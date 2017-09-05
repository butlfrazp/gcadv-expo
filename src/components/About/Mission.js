import React from'react';
import {
  View
} from 'react-native';
import _ from 'lodash';
import MissionSection from './MissionSection'

const Mission = (props) => {
  createMissionMatrix = () => {
    var j = 0;
    var m = 0;
    var matrix = [];
    var tempArr = [];
    for (var i = 0; i < props.mission.length; i++) {
      tempArr.push(props.mission[i]);
      if (tempArr.length == 2) {
        matrix.push(tempArr);
        tempArr = [];
      }
    }
    return this.renderMissionSections(matrix)
  }

  renderMissionSections = (matrix) => {
    return matrix.map((values) => {
      console.log(values)
      return (
        <MissionSection
          key={`${values[0].uid} ${values[1].uid}`}
          info={values}
        />
      )
    });
  }

  return (
    <View style={styles.container}>
      {this.createMissionMatrix()}
    </View>
  );
};

const styles = {
  container: {
    paddingTop: 25
  }
}

export default Mission
