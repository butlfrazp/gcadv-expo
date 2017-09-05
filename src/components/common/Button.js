import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d8d8d8',
    borderRadius: 5,
    height: 50,
    width: 200
  },
  text: {
    fontSize: 18,
    color: '#777777'
  }
}

export { Button }
