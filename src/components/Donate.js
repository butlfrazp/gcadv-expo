import React from 'react';
import {
  View,
  Text,
  WebView
} from 'react-native';
import { Header } from './common';

const Donate = (props) => {

  const {
    headerTextStyle
  } = styles

  return (
    <View style={{flex: 1}}>
      <Header onPress={props.onPress} donate back>
        <Text style={ headerTextStyle }>Donate</Text>
      </Header>
      <WebView
        source={{uri: 'https://gcadv.org/donate/make-a-donation/'}}
        style={{flex: 1}}
      />
    </View>
  )
}

const styles = {
  headerTextStyle: {
    fontSize: 28,
    color: '#949492',
    fontFamily: 'Avenir Next Condensed'
  },
}

export default Donate;
