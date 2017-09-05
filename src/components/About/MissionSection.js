import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import {
  DescriptiveImage
} from './../common'
import { missionSelected } from './../../actions'

const MissionSection = (props) => {

  renderDescriptiveImage = () => {
    return props.info.map(({val, uid}) => {
      console.log("Value: ", val)
      return (
        <DescriptiveImage
          key={ uid }
          info={ val }
          onPress={ props.missionSelected.bind(this, val) }
        />
      )
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {this.renderDescriptiveImage()}
      </View>
    </View>
  );
};

const styles = {
  imageContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container: {
    height: 150,
    paddingRight: 25,
    paddingLeft: 25
  }
}

export default connect(null, { missionSelected })(MissionSection);
