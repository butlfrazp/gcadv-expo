import React, { Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Animated
} from 'react-native'
import { CardSection } from './../common'

export default class AboutInformation extends Component {
  render() {
    const {
      cardHeader,
      textStyle,
      headerTextStyle
    } = styles
    return (
      <Animated.View style={{flex: 1, flexGrow: 1}}>
        <ScrollView style={{flex: 1, flexGrow: 1}}>
          <CardSection style={cardHeader}>
            <Text style={headerTextStyle}>{this.props.description.title}</Text>
          </CardSection>
          <CardSection>
            <Text style={textStyle}>     {this.props.description.description}</Text>
          </CardSection>
        </ScrollView>
      </Animated.View>
    )
  }
}

const styles = {
  textStyle: {
    fontSize: 14,
    color: '#959593',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  headerTextStyle: {
    fontSize: 22,
    color: '#959593',
    textAlign: 'center',
    fontWeight: '500'
  },
  cardHeader: {
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#4A4A4A',
    justifyContent: 'center',
  }
}
