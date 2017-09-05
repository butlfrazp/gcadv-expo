import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ListView,
  StyleSheet
} from 'react-native';
import _ from 'lodash';
import { LinearGradient, BlurView } from 'expo';
import { Actions } from 'react-native-router-flux';
import messageIcon from './../../images/message_icon.png'

import EventImg from './../../../assets/images/Event.jpg'

const SCREEN_WIDTH = Dimensions.get('window').width
const EventHeader = (props) => {

  onPress = () => {
    Actions.chat()
  }

  getVenueImages = () => {
    const venueImages = _.map(props.event.venue.images, (val, uid) => {
      return { val, uid };
    });
    this.createDataSource(venueImages)
  }
  createDataSource = (venueImages) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(venueImages);
  }

  renderRow = (venueImage) => {
    const {
      blurViewStyle,
      gradientStyle
    } = styles
    return  (
      <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(216, 216, 216, .8)']}
          style={gradientStyle}
        >
          <Image style={{height: 177, flex: 1, }} source={{uri: venueImage.val}} />
          <BlurView
            intensity={30}
            tint="default"
            style={{ position: 'absolute', height: 177, width: SCREEN_WIDTH, top: 0, right: 0 }}
          >
          </BlurView>
      </LinearGradient>
    )
  }

  const {
    imageStyle,
    gradientStyle,
    textContainer,
    titleStyle,
    descriptionStyle,
    timeStyle,
    blurViewStyle,
    container,
    messageIconStyle,
    innerTextContainer,
    messageIconContainerStyle
  } = styles;
  const {
    time,
    image,
    title,
    address
  } = props.event;
  this.getVenueImages();
  return (
    <View style={container}>
      <View style={{flex: 1}}>
        <ListView
          enableEmptySections
          dataSource={ this.dataSource }
          renderRow={ this.renderRow }
          style={{flex: 1}}
          pagingEnabled={true}
        >
        </ListView>
      </View>
      <View style={ innerTextContainer }>
        <Text style={titleStyle}>{ title }</Text>
        <Text style={ timeStyle }>{ address }</Text>
        <Text style={ timeStyle }>{ time }</Text>
      </View>
      <TouchableOpacity
        style={ messageIconContainerStyle }
        onPress={ this.onPress.bind(this) }
      >
        <Image source={messageIcon} style={ messageIconStyle }/>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  container: {
    height: 177
  },
  imageStyle: {
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
    flex: 1
  },
  messageIconContainerStyle: {
    position: 'absolute',
    bottom: 12.5,
    right: 7.5,
    height: 35,
    width: 35,
  },
  gradientStyle: {
    flex: 1
  },
  titleStyle: {
    fontSize: 24,
    fontFamily: 'Avenir Next Condensed',
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowColor: '#000'
  },
  descriptionStyle: {
    fontSize: 18,
    color: '#a8a8a8',
    textAlign: 'center',
    fontFamily: 'Avenir Next',
    marginTop: 10
  },
  timeStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Avenir Next Condensed',
  },
  blurViewStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: SCREEN_WIDTH * 0.8
  },
  messageIconStyle: {
    zIndex: 999,
    height: 35,
    width: 35,
  },
  innerTextContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignSelf: 'center',
    height: 177,
    width: SCREEN_WIDTH * 0.8
  },
}

export { EventHeader }
