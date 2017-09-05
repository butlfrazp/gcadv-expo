import React from 'react';
import {
  View,
  Animated
} from 'react-native';
import { Letter } from './../common'

const AboutHeader = (props) => {

  const {
    container
  } = styles
  return (
    <Animated.View style={props.style}>
    <View style={container}>
      <View style={{ flexDirection: 'row'}}>
        <Letter
          firstFontSize={props.firstFontSize}
          secondFontSize={props.secondFontSize}
          name="Georgia"
        />
        <Letter
          firstFontSize={props.firstFontSize}
          secondFontSize={props.secondFontSize}
          name="Coalition"
        />
        <Letter
          firstFontSize={props.firstFontSize}
          secondFontSize={props.secondFontSize}
          name="Against"
        />
      </View>
      <View style={{ flexDirection: 'row'}}>
        <Letter
          firstFontSize={props.firstFontSize}
          secondFontSize={props.secondFontSize}
          name="Domestic"
        />
        <Letter
          firstFontSize={props.firstFontSize}
          secondFontSize={props.secondFontSize}
          name="Violence"
        />
      </View>
    </View>
    </Animated.View>
  );
}

const styles = {
  container: {
    backgroundColor: '#4a4a4a',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default AboutHeader;
