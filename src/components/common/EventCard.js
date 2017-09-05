import React from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';

import {
  Card,
  CardHeader,
  CardImage
} from './index';


const HEIGHT = Dimensions.get('window').height - 165
const EventCard = (props) => {
  onPress = () => {
    console.log(this.props.event);
  }
  const {
    title,
    description,
    image,
    active
  } = props.event
  return (
    <View style={ styles.container }>
      <Card style={ styles.cardStyle}>
        <CardHeader
          eventTitle={title}
          eventDescription={description}
          eventActive={active}
          onPress={props.onPress}
        />
        <CardImage
          source={{uri: image}}
        />
      </Card>
    </View>
  )
}

const styles = {
  container: {
    height: 300,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  cardStyle: {
    flex: 1,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.7
  }
}

export { EventCard };
