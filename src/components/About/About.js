import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'
import {
  CardImage,
  Card,
  StackContainer,
  Header,
  Letter,
  Seperator,
  Modal
} from './../common'
import Expo, { LinearGradient, Assets } from 'expo';
import _ from 'lodash';
import { hideStatusBar, missionClosed } from '../../actions'
import AboutHeader from './AboutHeader';
import Mission from './Mission';
import AboutSupport from './AboutSupport'

const HeaderImg = Expo.Asset.fromModule(require('./../../images/About-Header.jpg')).uri;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class About extends Component {

  constructor(props) {
    super(props);
    this.position = new Animated.Value(-SCREEN_HEIGHT);
    this.opacity = new Animated.Value(0);
  }

  presentModal = () => {
    if (this.props.showModal) {
      Animated.sequence([
        Animated.timing(this.position, {
          toValue: 0,
          duration: 750
        }),
        Animated.timing(this.opacity, {
          toValue: 1,
          duration: 650
        })
      ]).start();
    }else{
      Animated.sequence([
        Animated.timing(this.opacity, {
          toValue: 0,
          duration: 400
        }),
        Animated.timing(this.position, {
          toValue: -SCREEN_HEIGHT,
          duration: 750
        })
      ]).start();
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
           barStyle="light-content"
           hidden={this.props.hidden}
         />
        <AboutHeader
          style={styles.headerText}
        />
        <ScrollView
          bounces={true}
          alwaysBounceVertical={false}
          style={styles.scrollViewStyle}
          scrollEventThrottle={20}
        >
        <View style={styles.bodyStyle}>
          <View style={styles.missionStyle}>
            <Text style={styles.groupHeaderStyle}>Projects</Text>
            <Seperator />
            <Mission
              mission={this.props.missions}
            />
          </View>
          <AboutSupport />
        </View>
        </ScrollView>
        {this.presentModal()}
        <Modal
          style={{top: this.position}}
          info={ this.props.selectedMission }
          opacity={{opacity: this.opacity}}
          exitPressed={() => this.props.missionClosed()}
        />
      </View>
    )
  }
}

const styles = {

  bodyStyle: {
    backgroundColor: 'transparent',
    opacity: 0.95,
    paddingBottom: 50
  },
  groupHeaderStyle: {
    textAlign: 'center',
    fontSize: 24,
    color: '#9B9B9B',
    padding: 20,
    fontWeight: '600',
    fontFamily: 'Avenir Next'
  },
  descriptionText: {
    fontSize: 48,
    textAlign: 'center',
    margin: 20
  },
  headerText: {
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#000',
    shadowOpacity: .8
  },
  scrollViewStyle: {
    flex: 1,
    zIndex: 2,
  },
  missionStyle: {
    backgroundColor: '#f8f8f8',
    paddingBottom: 20
  }
}

const mapStateToProps = state => {
  const { hidden } = state.statusBar
  const { mission } = state
  const { selectedMission } = state.selectedMission

  const showModal = selectedMission ? true : false;
  const missions = _.map(mission, (val, uid) => {
    return { val, uid, selectedMission, showModal }
  })
  return { hidden, missions, selectedMission, showModal }
}



export default connect(mapStateToProps, { hideStatusBar, missionClosed })(About);
