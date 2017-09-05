import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Linking
} from 'react-native';
import { connect } from 'react-redux';
import AppLink from 'react-native-app-link';
import { NavigationButton, Icon } from './common';
import { LinearGradient } from 'expo';

import icon from './../images/GCADV_logo.png';
import backBtn from '../images/BackButton.png'
import facebook from '../images/fb-icon.png'
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';

const DRAWER_HEIGHT = Dimensions.get('window').height
const DRAWER_WIDTH = 300;
class Drawer extends Component {

  linkToApp = (url, social) => {
    Linking.openURL(url)
    .catch(() => {
      switch (social) {
        case 'facebook':
          this.openInAppStore('id284882215');
          break;
        case 'twitter':
          this.openInAppStore('id333903271');
          break;
        case 'linkedin':
          this.openInAppStore('id288429040');
          break;
        case 'instagram':
          this.openInAppStore('id389801252');
          break;
        default:
          return;
      }
    })
  }

  openInAppStore = (id) => {
    AppLink.openInStore(id).then(() => {

    })
    .catch(error => {
      alert(error)
    });
  }

  render() {
    const {
      drawerStyle,
      drawerHeaderStyle,
      drawerHeaderTextContainerStyle,
      drawerHeaderTextStyle,
      drawerLeftContent,
      navigationStyle,
      drawerFooter,
      drawerFooterTextStyle,
      socialIconContainer,
      backbtnStyle,
      drawerRightContent,
      drawerRightText
    } = styles
    return (
      <LinearGradient
       colors={['#fff', '#f8f8f8']}
       style={ styles.drawerStyle }>
        <View style={ drawerHeaderStyle }>
          <View style={ drawerLeftContent }>
            <Icon
              source={backBtn}
              onPress={this.props.onPress}
              style={backbtnStyle}
              imageStyle={{height: 30, width: 30, resizeMode: 'contain'}}
            />
          </View>

          <View style={drawerHeaderTextContainerStyle}>
            <Image source={icon} style={{resizeMode: 'contain', height: 45, width: 45}} />
          </View>

          <View style={drawerRightContent}>
            <TouchableOpacity onPress={ this.props.onRightPressed }>
              <Text style={drawerRightText}>Sign out</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={navigationStyle}>
          <NavigationButton
            title="Home"
            type="home"
            onPress={this.props.onHomePress}
          />

          <NavigationButton
            title="Training"
            type="training"
            onPress={this.props.onTrainingPress}
          />

          <NavigationButton
            title="About Us"
            type="about"
            onPress={this.props.onAboutPress}
          />

          <NavigationButton
            title="Donate"
            type="donate"
            onPress={this.props.onDonatePress}
          />
        </View>

        <View style={drawerFooter}>
          <Text style={drawerFooterTextStyle}>
            Connect on Social Media
          </Text>

          <View style={ socialIconContainer }>
            <Icon
              source={facebook}
              onPress={this.linkToApp.bind(this, 'fb://profile?id=101286490004867', 'facebook')}
            />
            <Icon
              source={linkedin}
              onPress={this.linkToApp.bind(this, 'linkedin://profile?id=[gcadv]', 'linkedin')}
            />
            <Icon
              source={instagram}
              onPress={this.linkToApp.bind(this, 'instagram://user?username=gcadv', 'instagram')}
            />
            <Icon
              source={twitter}
              onPress={this.linkToApp.bind(this, 'twitter://user?screen_name=gcadv', 'twitter')}
            />
          </View>
        </View>
      </LinearGradient>
    )
  }
}

const styles = {
  drawerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: DRAWER_HEIGHT,
    width: DRAWER_WIDTH,
    backgroundColor: 'transparent',
  },
  drawerHeaderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    height: 75,
    flexDirection: 'row',
    paddingLeft: 12.5,
    paddingRight: 12.5,
    paddingTop: 12.5
  },
  drawerHeaderTextContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2
  },
  drawerHeaderTextStyle: {
    fontSize: 28,
    color: '#A3A3A3',
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  drawerLeftContent: {
    justifyContent: 'center',
    flex: 1.5
  },
  drawerRightContent: {
    justifyContent: 'center',
    flex: 1.5
  },
  drawerRightText: {
    textAlign: 'right',
    color: '#A3A3A3',
    fontSize: 16,
    fontFamily: 'Avenir Next'
  },
  navigationStyle: {
    paddingLeft: 20,
    paddingRight: 20
  },
  drawerFooter: {
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: DRAWER_WIDTH,
    zIndex: 2
  },
  drawerFooterTextStyle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '400',
    color: '#A3A3A3'
  },
  socialIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexGrow: 1,
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20
  },
  backbtnStyle: {
    height: 20,
    width: 20,
    justifyContent: 'center',
  }
}

mapStateToProps = state => {
  const { open } = state.drawer;
  return { open }
}


export default connect(mapStateToProps)(Drawer);
