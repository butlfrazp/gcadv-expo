import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Video } from 'expo';
import {
  Card,
  CardHeader
} from './index';

const TrainingCard = (props) => {
  const { container, cardStyle } = styles
  const {
    title,
    description,
    video
  } = props.training
  return  (
    <View style={ container }>
      <Card style={ cardStyle }>
        <CardHeader
          eventTitle={ title }
          eventDescription={ description }
          eventActive={false}
        />
        <Video
          source={{ uri: video}}
          rate={1.0}
          volume={0.0}
          muted={true}
          shouldPlay
          resizeMode='cover'
          style={{ flex: 1, flexGrow: 1, margin: 5 }}
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
    marginTop: 20,
  },
  cardStyle: {
    flex: 1,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.7
  }
}

export { TrainingCard }
