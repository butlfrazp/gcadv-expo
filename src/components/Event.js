import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash'
import axios from 'axios';
import { Header, EventHeader } from './common';
import Performer from './common/Performer';
import GCADVLogo from '../images/GCADV_logo.png';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedData: this.props.event.performers
    }
  }

  getPerformers = () => {
    const performers = _.map(this.state.renderedData, (val, uid) => {
      return { ...val, uid };
    });
    this.createDataSource(performers)
  }
  createDataSource = (performers) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(performers);
  }

  renderRow = (performer) => {
    return <Performer performer={ performer } />
  }

  onTrainingPressed = (data) => {
    this.setState({
      renderedData: data
    });
  }

  renderTrainings = () => {
    if (this.props.event.trainings) {
      return (
        <TouchableOpacity onPress={this.onTrainingPressed.bind(this, thie.props.event.trainings)}>
          <Text style={ eventPickerBtn } >Trainings</Text>
        </TouchableOpacity>
      )
    }
  }

  render() {
    const {
      imageStyle,
      container,
      listView,
      eventPicker,
      eventPickerBtn
    } = styles
    return (
      <View style={ container }>
        <Header
          onPress={this.props.onPress}
          back
        >
          <Image
            source={GCADVLogo}
            style={imageStyle}
          />
        </Header>
        {this.getPerformers()}
        <EventHeader
          event={this.props.event}
        />
        <View style={eventPicker}>
          <TouchableOpacity onPress={this.onTrainingPressed.bind(this, this.props.event.performers)}>
            <Text style={ eventPickerBtn } >Performers</Text>
          </TouchableOpacity>
          {this.renderTrainings()}
        </View>
        <ListView
          enableEmptySections
          pagingEnabled={false}
          dataSource={ this.dataSource }
          renderRow={ this.renderRow }
          style={ listView }
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  imageStyle: {
    height: 52.5,
    width: 52.5
  },
  listView: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: '#f8f8f8'
  },
  eventPicker: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  eventPickerBtn: {
    fontSize: 18,
    fontFamily: 'Avenir Next',
    color: '#4A4A4A'
  }
}
const mapStateToProps = state => {
  return {
    event: state.events.event
  }
}

export default connect(mapStateToProps)(Event);
