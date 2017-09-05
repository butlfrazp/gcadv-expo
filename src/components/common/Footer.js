import React from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo';

const FOOTER_WIDTH = Dimensions.get('window').width;

const Footer = () => {

  const {
    footerStyle,
    headerTextStyle,
    footerTextStyle,
    copyrightTextStyle
  } = styles

  return (
    <LinearGradient
      colors={['#4A4A4A', '#404040']}
     style={ footerStyle }
    >
      <Text style={ headerTextStyle }>Connect with Us</Text>
      <Text style={ footerTextStyle }>114 New Street, Suite B,</Text>
      <Text style={ footerTextStyle }>Decatur, GA 30030</Text>
      <Text style={ footerTextStyle }>Phone: 404-209-0280 Fax: 404-766-3800</Text>
      <Text style={ copyrightTextStyle }>COPYRIGHT © 2017 GCADV</Text>
    </LinearGradient>
  );
}

const styles = {
  footerStyle: {
    height: 90,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
    width: FOOTER_WIDTH,
    alignItems: 'center'
  },
  copyrightTextStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    color: '#7E7F7F',
    fontSize: 8
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    color: '#7E7F7F',
  },
  footerTextStyle: {
    fontSize: 12,
    color: '#7E7F7F'
  }
}

export { Footer }
