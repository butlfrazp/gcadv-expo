import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Spinner } from './index';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { PerformerSelected } from './../../actions';

const IMAGE_WIDTH = Dimensions.get('window').width - 60

class Performer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  performerSelected = () => {
    this.props.PerformerSelected(this.props.performer)
    Actions.performer();
  }

  renderSpinner = () => {
    return (
      <View style={styles.loadingStyle}>
        <Spinner
          size='large'
          color='black'
          animating={this.state.loading}
        />
        <View style={{...styles.spinnerOverlay, ...{opacity: this.state.loading ? 0.25 : 0.0}}}/>
      </View>
    )
  }
  render() {

    const {
      container,
      topContainer,
      bottomContainer,
      innerContainer,
      imageContainer,
      imageStyle,
      info,
      performerText,
      performerTime,
      performerDescription,
      performerDescriptionText,
      performerTitle,
      overlay
    } = styles
    const {
      description,
      name,
      time,
      image,
      title
    } = this.props.performer;

    return (
      <TouchableOpacity onPress={this.performerSelected.bind(this)}>
        <View style={ container }>
          <View style={ topContainer }>
            <View style={ innerContainer }>
              <View style={ info }>
                <Text style={ performerText }>{ name }</Text>
                <Text style={ performerTitle }>{ title }</Text>
              </View>
            </View>
          </View>
          <View style={ imageContainer }>
            <Image
              style={ imageStyle }
              source={{uri: image }}
              onLoadEnd={() => this.setState({ loading: false })}
            />
            {this.renderSpinner()}
          </View>
          <View style={overlay}/>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = {
  loadingStyle: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: IMAGE_WIDTH,
    transform: [{translateY: 50}]
  },
  overlay: {
     flex: 1,
     position: 'absolute',
     backgroundColor: '#000',
     opacity: 0.15,
     zIndex: -99,
     height: 200,
     width: IMAGE_WIDTH
  },
  spinnerOverlay: {
    position: 'absolute',
    height: 50,
    width: 50,
    backgroundColor: '#000',
  },
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    margin: 20,
    borderRadius: 5,
    height: 200,
    overflow: 'hidden'
  },
  topContainer: {
    height: 200
  },
  bottomContainer: {
    padding: 5
  },
  innerContainer: {
    flexDirection: 'row',
    flex: 1
  },
  imageContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    borderTopLeftRadius: 10,
    overflow: 'hidden',
    position: 'absolute',
    height: 400,
    width: IMAGE_WIDTH,
    transform: [{translateY: -50}],
    zIndex: -9999
  },
  imageStyle: {
    flex: 1,
    flexGrow: 1,
  },
  info: {
    flex: 2,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  performerText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Avenir Next',
    marginTop: 15,
  },
  performerTime: {
    color: 'white',
    fontSize: 10,
    marginBottom: 15,
    textAlign: 'center'
  },
  performerTitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Avenir'
  },
  performerDescription: {
    color: '#9B9B9B',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10
  },
  performerDescriptionText: {
    color: '#9B9B9B',
    margin: 5
  }
}

export default connect(null, { PerformerSelected })(Performer);
