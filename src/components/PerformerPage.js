import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import {
  Header
} from './common';
import icon from './../images/GCADV_logo.png';

const SCREEN_WIDTH = Dimensions.get('window').width;

class PerformerPage extends Component {
  render() {
    const {
      container
    } = styles

    const {
      image,
      name,
      description,
      title
    } = this.props.performer

    return (
      <View style={container}>
        <Header
          onPress={this.props.onPress}
          back
        >
          <Image source={icon} style={{resizeMode: 'contain', height: 45, width: 45}} />
        </Header>
        <View style={{height: 200, overflow: 'hidden'}}>
          <Image
            source={{uri: image}}
            style={{height: 300, zIndex: -999}}
          />
          <View style={{position: 'absolute', height: 200, width: SCREEN_WIDTH, backgroundColor: 'black', opacity: 0.15}}/>
          <View style={{width: SCREEN_WIDTH, position: 'absolute', height: 200, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 10}}>
            <Text style={{color: 'white', fontSize: 24, fontFamily: 'Avenir Next', fontWeight: '500', textAlign: 'center'}}>{name}</Text>
            <Text style={{color: 'white', fontSize: 18, fontFamily: 'Avenir Next', fontWeight: '500', textAlign: 'center'}}>{title}</Text>
          </View>
        </View>
        <ScrollView style={{backgroundColor: '#f8f8f8', margin: 10, flex: 1}}>
          <Text style={{fontSize: 24, color: '#A4A4A4', fontFamily: 'Avenir Next', margin: 10, textAlign: 'center'}}>About {name}</Text>
          <Text style={{fontSize: 18, color: '#A4A4A4', fontFamily: 'Avenir Next', marginTop: 10, marginBottom: 10, marginRight: 20, marginLeft: 20}}>  {description}</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  }
}

mapStateToProps = state => {
  return  {
    performer: state.performer.performer
  }
}

export default connect(mapStateToProps)(PerformerPage);
