import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ListView,
  Dimensions,
  Animated
} from 'react-native';
import _ from 'lodash';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
 import { connect } from'react-redux'
 import { Actions } from 'react-native-router-flux';
import {
  Card,
  CardHeader,
  CardImage,
  Footer,
  Header,
  Spinner,
  EventCard
 } from './common';
 import { imageLoading, getEvents, goToEvent } from '../actions'

const LISTVIEW_HEIGHT = Dimensions.get('window').height - 165
import GCADVLogo from '../images/GCADV_logo.png';
import EventImg from './../../assets/images/Event.jpg'

const SCREEN_WIDTH = Dimensions.get('window').width

class Home extends Component {
  componentWillMount() {
    this.props.getEvents();
    this.createDataSource(this.props);
    this.position = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.position, {
      toValue: 1,
      duration: 400
    }).start();
  }

  createDataSource({ events }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(events);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onPress = (event) => {
    this.props.goToEvent(event);
    Actions.event({ type: 'push' });
  }

  renderRows = (event) => {
    return (
      <EventCard
        event={event}
        onPress={this.onPress.bind(this, event)}
      />
    )
  }

  showImage(bool) {
    this.props.imageLoading(bool);
  }

  renderListView = () => {
    if (_.isNull(this.props.events)) {
      return (
        <View>
          <Text>Test</Text>
        </View>
      )
    }
    return (
      <ListView
        enableEmptySections
        dataSource={ this.dataSource }
        renderRow={ this.renderRows }
      />
    )
  }

  render() {
    const { headerImageStyle, AnimatedContianer } = styles
    return (
      <Animated.View style={[{flex: 1, zIndex: -1}, {opacity: this.position}]}>
        <Header onPress={this.props.onPress} buttonStyle={this.props.buttonStyle}>
          <Image source={ GCADVLogo } style={ headerImageStyle } />
        </Header>
        <View style={{height: LISTVIEW_HEIGHT}}>
          {this.renderListView()}
        </View>
        <Footer />
      </Animated.View>
    );
  }
}


const styles = {
  headerImageStyle: {
    height: 52.5,
    width: 52.5
  },
  loadingStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingTextStyle: {
    fontSize: 20,
    color: '#f8f8f8',
    padding: 15
  },
  listViewStyle: {
    height: 400
  }
}

const mapStateToProps = state => {
  const events = _.map(state.events.events, (val, uid) => {
    return { ...val, uid };
  });
  return {
    events,
    image: state.image
  }
}


export default connect(mapStateToProps, {imageLoading, getEvents, goToEvent})(Home);
