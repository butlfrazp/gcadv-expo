import React from 'react';
import { View, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Seperator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.seperatorStyle}>
      </View>
    </View>
  )
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  seperatorStyle: {
    width: SCREEN_WIDTH * 0.9,
    height: 2.5,
    opacity: 0.5,
    borderColor: '#A3A3A3',
    borderWidth: 1,
    borderRadius: 5
  }
}

export { Seperator };
