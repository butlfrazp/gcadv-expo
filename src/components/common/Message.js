import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  Card,
  CardSection
} from './index';

const Message = (props) => {
  const { message, email } = props.message;
  const {
    userMessage,
    userMessageContainer,
    sentMessge,
    sentMessageContainer
  } = styles;
  if(props.user == props.message.user){
    return (
      <View style={ userMessageContainer }>
        <View style={userMessage}>
          <Text>Sender: You</Text>
          <Text>   {message}</Text>
        </View>
      </View>
    )
  }
  return (
      <View style={ sentMessageContainer }>
        <View style={ sentMessge }>
          <Text>Sender: { email }</Text>
          <Text>   {message}</Text>
        </View>
      </View>
  );
};

const styles = {
  sentMessageContainer: {
    flex: 1,
    alignItems: 'flex-start',
    margin: 5
  },
  sentMessge: {
    backgroundColor: '#f8f8f8',
    padding: 7.5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    overflow: 'hidden',
  },
  userMessageContainer: {
    flex: 1,
    alignItems: 'flex-end',
    margin: 5
  },
  userMessage: {
    backgroundColor: '#dda0dd',
    padding: 7.5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    overflow: 'hidden',
  }
}

export { Message };
