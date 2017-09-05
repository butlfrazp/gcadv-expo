import React from 'react';
import {
  TouchableOpacity,
  Image
} from 'react-native';

const Icon = (props) => {
  const {
    iconStyle,
    iconContainerStyle
  } = styles
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      <Image style={{...iconStyle, ...props.imageStyle}}  source={props.source} />
    </TouchableOpacity>
  )
}

const styles = {
  iconStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  iconContainerStyle: {
    shadowOpacity: .8,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }
  }
}


export { Icon };
