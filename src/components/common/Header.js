import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Animated,
  StatusBar,
} from 'react-native';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../actions';
import { Actions } from 'react-native-router-flux';
import back from './../../images/BackButton.png'
import menuSlider from '../../images/Menu_Slider.png';
import Donate from './../../images/Donate.png'

Header = (props) => {

  const {
    headerStyle,
    headerFontStyle,
    headerContentLeft,
    headerContentMiddle,
    headerContentRight,
    rightIconStyle,
    rightTouchableOpacityStyle
  } = styles

  renderLeftButton = () => {
    if (props.back) {
      return (
        <View  style={headerContentLeft}>
          <TouchableOpacity onPress={props.onPress}>
            <Animated.Image source={back} style={{...{height: 30, width: 30, resizeMode: 'contain'}, ...props.buttonStyle}}/>
          </TouchableOpacity>
        </View>
      )
    }
    return (
      <View style={ headerContentLeft }>
        <TouchableOpacity onPress={props.onPress}>
          <Animated.Image source={ menuSlider } style={{...{height: 30, width: 30, resizeMode: 'contain'}, ...props.buttonStyle}}/>
        </TouchableOpacity>
      </View>
    )
  }

  renderDonateButton = () => {
    if (!props.donate) {
      return (
        <TouchableOpacity onPress={() => Actions.donate()} style={ rightTouchableOpacityStyle } >
          <Image source={Donate} style={{resizeMode: 'contain', width: 75}}/>
        </TouchableOpacity>
      )
    }
  }

  return (
    <View style={ headerStyle }>
      {this.renderLeftButton()}
      <View style={ headerContentMiddle }>
        {props.children}
      </View>

      <View style={ headerContentRight }>
        {this.renderDonateButton()}
      </View>
    </View>
  )
}

const styles = {
  headerStyle: {
    height: 75,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 1},
    shadowOpacity: 0.2,
    flexDirection: 'row',
    elevation: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#a4a4a4',
    paddingTop: 12.5,
  },
  headerContentLeft: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 12.5,
  },
  headerContentMiddle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2.5
  },
  headerContentRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 12.5
  },
  headerFontStyle: {
    fontSize: 24
  },
  rightIconStyle: {
    transform: [{scale: 0.9}]
  },

}

export { Header }
