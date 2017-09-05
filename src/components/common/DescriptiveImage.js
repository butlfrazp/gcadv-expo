import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import hotline from '../../images/hotline.png';
import training from '../../images/training.png';
import advocacy from '../../images/advocacy.png';
import review from '../../images/review.png';

const DescriptiveImage = (props) => {
  const {
    imageStyle,
    container,
    textStyle
  } = styles

  renderImage = () => {
    switch (props.info.title) {
      case "Training":
        return this.returnImage(training)
        break;
      case "Advocacy":
        return this.returnImage(advocacy);
        break;
      case "Hotline":
        return this.returnImage(hotline);
        break;
      case "Fatality Review":
        return this.returnImage(review);
        break;
      default:
        return;
    }
  }

  returnImage = (image) => {
    return (
      <View style={imageStyle}>
        <Image source={image} style={{height: 80, width: 80, resizeMode: 'contain'}}/>
      </View>
    )
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={container}>
        {this.renderImage()}
        <Text style={textStyle}>{props.info.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    width: 100
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: '#979797',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  textStyle: {
    fontSize: 18,
    fontFamily: 'Avenir Next Condensed',
    color: '#979797',
    paddingTop: 10,
    textAlign: 'center'
  }
}

export { DescriptiveImage };
