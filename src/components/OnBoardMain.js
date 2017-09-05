import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  Dimensions
} from 'react-native';

import GCADV_Icon from './../images/GCADV_logo.png';
const SCREEN_WIDTH = Dimensions.get('window').width
class OnBoardMain extends Component {
  componentWillMount() {
    this.background = new Animated.Value(0);
    this.title = new Animated.Value(0);
    this.image = new Animated.Value(0);
    this.welcome = new Animated.Value(0);
    this.scroll = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.sequence([
      Animated.timing( this.background, {
        toValue: 1,
        duration: 400
      }),
      Animated.timing(this.image, {
        toValue: 1,
        duration: 1500,
      }),
      Animated.timing(this.title, {
        toValue: 1,
        duration: 1500,
      }),
      Animated.timing(this.scroll, {
        toValue: 1,
        duration: 1200
      })
    ]).start();
  }
  render() {
    const {
      container,
      imageStyle,
      imageContainer,
      innerContainer,
      titleStyle,
      bottomContainer,
      bottomControl
    } = styles
    return  (
      <Animated.View style={[ container, { opacity: this.background } ]}>
          <Animated.View style={[imageContainer, {opacity: this.image}]}>
            <Image
              source={GCADV_Icon}
              style={imageStyle}
            />
          </Animated.View>
          <Animated.Text style={[titleStyle, { opacity: this.title }]}>Georgia Coalition Against Domestic Violence</Animated.Text>
          <Animated.Text style={[bottomControl, {opacity: this.scroll}]}>Scroll to Sign in!</Animated.Text>
      </Animated.View>
    )
  }
}

const styles = {
  container: {
    backgroundColor: '#5B5D9F',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageStyle: {
    height: 80,
    width: 80,
  },
  imageContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 60,
    marginBottom: 30,
    marginTop: 30
  },
  innerContainer: {
    marginTop: 40,
    marginRight: 20,
    marginLeft: 20,
    alignItems: 'center',
  },
  titleStyle: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Avenir Next',
    fontSize: 28,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    height: 120,
    width: SCREEN_WIDTH,
    justifyContent: 'center'
  },
  bottomControl: {
    textAlign: 'center',
    fontFamily: 'Avenir Next',
    fontSize: 18,
    color: 'white'
  }
}

export default OnBoardMain
