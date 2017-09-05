import React, { Component } from 'react';
import {
  View,
  Text,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { chatChanged, messageSent, messageFetched } from './../actions';
import {
  MessageBox,
  Message,
  Header
} from './common';

class Chat extends Component {
  componentWillMount() {
    this.createDataSource(this.props);
    this.props.messageFetched(this.props.eventId);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ messages }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(messages);
  }

  onPress = () => {
    const {
      eventId,
      message,
      user
    } = this.props
    this.props.messageSent(eventId, message, user);
  }

  renderRow = (message) => {
    console.log(message.user == this.props.user)
    return <Message message={ message } user={ this.props.user } />;
  }

  render() {
    const {
      container,
      messageContainer,
      headerText
    } = styles
    return (
      <View style={ container }>
        <Header
          onPress={ () => Actions.pop() }
          back
        >
          <Text style={headerText}>{this.props.eventId}</Text>
        </Header>
        <ListView
          ref="chat"
          enableEmptySections
          dataSource={ this.dataSource }
          renderRow={ this.renderRow }
        />
        <MessageBox
          onChangeText={(text) => this.props.chatChanged(text)}
          value={ this.props.message }
          onPress={ this.onPress.bind(this) }
          loading={this.props.loading}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  messageContainer: {
    flex: 1
  },
  headerText: {
    fontFamily: 'Avenir Next Condensed',
    fontSize: 32,
    color: '#979797'
  }
}

mapStateToProps = state => {
  const  {
    message,
    loading,
    error
  } = state.chat;

  const { event } = state.events

  const messages = _.map(state.chat.messages, (val, uid) => {
    return { ...val, uid }
  });
  const { user } = state.login;
  console.log( user )
  return {
    message,
    messages,
    user,
    loading,
    eventId: state.events.event.uid
  };
};

export default connect(mapStateToProps, { chatChanged, messageSent, messageFetched })(Chat);
