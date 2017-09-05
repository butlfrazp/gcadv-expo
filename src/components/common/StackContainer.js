import React from 'react';
import {
  View
} from 'react-native';

const StackContainer = (props) => {
  return (
    <View style={styles.stackContainerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  stackContainerStyle: {
    height: 70
  }
}

export { StackContainer }
