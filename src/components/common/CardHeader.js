import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native'

const CardHeader = (props) => {

  renderButton = () => {
    const {
      eventButtonText,
      eventButton
    } = styles

    onFalseAcitvePress = () => {
      const eventTitle = props.eventTitle
      Alert.alert('Event Passed', `This Event has passed`);
    }

    onComingSoon = () => {
      const { eventTitle } = props;
      Alert.alert("Coming Soon", `The Event, ${eventTitle}, will be available to view closer to its date`)
    }

    if (props.eventActive === 0) {
      return (
        <TouchableOpacity style={eventButton} onPress={props.onPress}>
          <Text style={eventButtonText}>View Event</Text>
        </TouchableOpacity>
      )
    }else if (props.eventActive === 1){
      return (
        <TouchableOpacity style={eventButton} onPress={this.onComingSoon.bind(this)}>
          <Text style={eventButtonText}>Coming Soon</Text>
        </TouchableOpacity>
      )
    }else {
      return (
        <TouchableOpacity style={eventButton} onPress={this.onFalseAcitvePress.bind(this)}>
          <Text style={eventButtonText}>Event passed</Text>
        </TouchableOpacity>
      )
    }
  }

  const {
    cardHeaderStyle,
    eventTitleStyle,
    eventDescriptionStyle,
    container,
    eventButtonContainer,
   } = styles
  return (
    <View style={container}>
      <View style={ cardHeaderStyle }>
        <Text style={ eventTitleStyle }>{ props.eventTitle }</Text>
        <Text style={ eventDescriptionStyle }>{ props.eventDescription }</Text>
      </View>
      <View style={eventButtonContainer}>
        { this.renderButton() }
      </View>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
    shadowOffset: { width: 0, height: 1},
    shadowColor: '#f8f8f8',
    shadowOpacity: 0.5
  },
  eventButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 15
  },
  eventButton: {
    borderWidth: 1,
    borderColor: '#a8a8a8',
    borderRadius: 5,
    padding: 7.5,
    backgroundColor: '#a8a8a8'
  },
  cardHeaderStyle: {
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    elevation: 3,
    flex: 1
  },
  eventTitleStyle: {
    fontSize: 24,
    fontFamily: 'Avenir Next Condensed',
    color: '#a8a8a8',
  },
  eventDescriptionStyle: {
    color: '#a8a8a8',
    fontFamily: 'Avenir Next',
    fontSize: 16,
  },
  eventButtonText: {
    color: 'white',
    fontFamily: 'Avenir Next',
    fontSize: 15,
  }
}

export { CardHeader }
