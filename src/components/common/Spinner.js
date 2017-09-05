import React from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';

const Spinner = (props) => {
  return (
      <ActivityIndicator
        size={props.size}
        color={props.color}
        animating={props.animating}
      />
  )
}

export { Spinner };
