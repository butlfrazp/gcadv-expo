import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { facebookLogin } from './../actions';
import facebook from './../images/facebook.png';

class FacebookLogin extends Component {

  facebookBtnPressed = () => {
    Alert.alert('Coming Soon', 'Check Back Shortly')
  }

  render() {
    const {
      container,
      imageStyle,
      imageContainer,
      innerContainer,
      textContainer,
      titleText,
      moveOnText
    } = styles
    return (
      <View style={ container }>
        <View style={innerContainer}>
          <View style={imageContainer}>
            <TouchableOpacity onPress={this.facebookBtnPressed.bind(this)}>
              <Image source={facebook} style={imageStyle} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={titleText}>Click The Facebook Icon to Sign In through Facebook</Text>
        </View>

        <View>
          <Text style={moveOnText}>Scroll over to Sign in with Email</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#3C5A96',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageStyle: {
    height: 100,
    width: 100
  },
  innerContainer: {
    marginTop: 40,
    marginRight: 20,
    marginLeft: 20,
    alignItems: 'center',
  },
  imageContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5
  },
  titleText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Avenir Next',
    textAlign: 'center',
    alignSelf: 'center'
  },
  moveOnText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Avenir Next',
    textAlign: 'center',
    alignSelf: 'center'
  }
}

export default connect(null, { facebookLogin })(FacebookLogin);
