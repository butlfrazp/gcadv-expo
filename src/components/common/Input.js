import React from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard
} from 'react-native'

const Input = (props) => {
  const {
    container,
    textStyle,
    inputStyle
  } = styles;
  return (
    <View style={container}>
      <Text style={textStyle}>{props.title}</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize='none'
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        style={inputStyle}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        value={props.value}
        onSubmitEditing={Keyboard.dismiss}
      />
    </View>
  );
};

const styles = {
  container: {
    height: 75,
    justifyContent: 'space-around',
    marginBottom: 7.5
  },
  inputStyle: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderColor: '#f8f8f8',
    borderRadius: 5,
    padding: 10,
    fontFamily: 'Avenir Next'
  },
  textStyle: {
    fontSize: 20,
    paddingLeft: 5,
    fontFamily: 'Avenir Next Condensed',
    fontWeight: '100',
    color: '#4a4a4a'
  }
}

export { Input };
