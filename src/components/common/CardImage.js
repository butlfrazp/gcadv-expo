import React from 'react';
import {
  View,
  Image,
  Text,
  Dimensions
} from 'react-native';

const CardImage = (props) => {
  const {
    cardImageContainer,
    cardImage,
    imageLabelStyle
   } = styles
  return (
    <View style={{ ...cardImageContainer, ...props.style }}>
      <Image
        source={props.source}
        style={ cardImage }
        onLoadStart={props.onLoadStart}
        onLoadEnd={props.onLoadEnd}
      >
      {props.children}
      </Image>
      <Text style={imageLabelStyle}>{props.title}</Text>
    </View>
  );
}

const styles = {
  cardImageContainer: {
    flex: 1,
    height: 'auto',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    margin: 5
  },
  cardImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  imageLabelStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  }
}

export { CardImage };
