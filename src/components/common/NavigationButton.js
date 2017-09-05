import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import TrainingIcon from './../../images/TrainigIcon.png';
import HomeIcon from './../../images/HomeIcon.png';
import AboutIcon from './../../images/AboutIcon.png';
import DonateIcon from './../../images/DonateIcon.png';

const NavigationButton = (props) => {
  const {
    navigationButtonContainer,
    navigationButtonTextStyle,
    seperatorStyle,
    buttonStyle,
    imageStyle
  } = styles
  renderImage = () => {
    var image;
    switch (props.type) {
      case 'home':
        image = HomeIcon;
        break;
      case 'training':
        image = TrainingIcon;
        break;
      case 'about':
        image = AboutIcon;
        break;
      case 'donate':
        image = DonateIcon;
        break;
      default:
        image = null
    }
    return <Image source={image} style={imageStyle}/>
  }
  return (
    <View style={ navigationButtonContainer }>
      <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
        {this.renderImage()}
        <Text style={navigationButtonTextStyle}>{props.title}</Text>
      </TouchableOpacity>
      <View style={seperatorStyle}/>
    </View>
  )
}

const styles = {
  navigationButtonContainer: {
    paddingTop: 15,
  },
  seperatorStyle: {
    height: 4,
    borderColor: '#707070',
    borderRadius: 10,
    borderWidth: 1
  },
  navigationButtonTextStyle: {
    fontSize: 22,
    color: '#A3A3A3',
    fontWeight: '400',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10
  },
  imageStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginRight: 25
  }
}

export { NavigationButton }
