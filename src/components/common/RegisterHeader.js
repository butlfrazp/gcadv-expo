import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const RegisterHeader = (props) => {
  onBackPressed = () => {
    Actions.pop();
  }
  const {
    backContainer,
    backButtonText,
    sideControlContainer,
    centerControlContainer,
    signUpText,
    rightButtonText
  } = styles
  return (
    <View style={ backContainer }>
      <View style={sideControlContainer}>
        <TouchableOpacity onPress={ this.onBackPressed.bind(this) }>
          <Text style={backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
      <View style={centerControlContainer}>
        <Text style={signUpText}>{props.title}</Text>
      </View>
      <View style={sideControlContainer}>
        <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={props.onPress}>
          <Text style={rightButtonText}>{props.rightText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = {
  backContainer: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#4A4A4A'
  },
  backButtonText: {
    color: 'white',
    fontFamily: 'Avenir Next',
    fontSize: 14
  },
  rightButtonText: {
    color: 'white',
    fontFamily: 'Avenir Next',
    fontSize: 14,
    alignItems: 'flex-end'
  },
  sideControlContainer: {
    margin: 15,
    justifyContent: 'center',
    flex: 1
  },
  centerControlContainer: {
    justifyContent: 'center',
    flex: 2
  },
  signUpText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    textAlign: 'center'
  }
}


export { RegisterHeader };
