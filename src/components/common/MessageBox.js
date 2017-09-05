import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView
} from 'react-native';
import { Spinner } from './index'

const MessageBox = (props) => {
  const {
    container,
    input,
    text,
    button
  } = styles

  renderButton = () => {
    console.log("LOADING: " + props.loading);
    if (props.loading) {
      return <Spinner color="white" animating={true} size="large"/>
    }else{
      return (
        <TouchableOpacity
          onPress={props.onPress}
        >
          <Text style={ text }>Send</Text>
        </TouchableOpacity>
      )
    }
  }

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={ container }>
        <TextInput
          style={ input }
          placeholder="enter message here"
          onChangeText={ props.onChangeText }
          value={ props.value }
        />
        <View style={ button }>
          { this.renderButton() }
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = {
  container: {
    height: 60,
    backgroundColor: '#a4a4a4',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 3,
    height: 40,
    borderColor: '#d8d8d8',
    borderWidth: 1,
    borderRadius: 15,
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 5,
    marginLeft: 5,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  button: {
    flex: 1
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  }
}

export { MessageBox };
