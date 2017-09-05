import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  Image
} from 'react-native';
import _ from 'lodash'
import { Video } from 'expo';
import { connect } from 'react-redux';
import { getTrainings } from '../actions';
import {
  Header,
  Card,
  TrainingCard
} from './common'

import GCADVLogo from '../images/GCADV_logo.png';

class Training extends Component {

  componentWillMount() {
    this.props.getTrainings();
    this.createDataSource(this.props);
  }

  createDataSource({ trainings }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(trainings);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  renderRows = (training) => {
    return <TrainingCard training={training}/>
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header onPress={this.props.onPress}>
          <Image source={ GCADVLogo } style={{height: 52.5, width: 52.5}} />
        </Header>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontFamily: 'Avenir Next Condensed', fontSize: 48, color: '#979797'}}>Coming Soon!</Text>
          <Text style={{fontFamily: 'Avenir Next', fontSize: 18, color: '#979797'}}>check back periodically</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const trainings = _.map(state.training.trainings, (val, uid) => {
    return { ...val, uid };
  });
  console.log("Trainings", trainings)
  return {
    trainings
  }
}

export default connect(mapStateToProps, { getTrainings })(Training);
