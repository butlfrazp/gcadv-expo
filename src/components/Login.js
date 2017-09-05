import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  AsyncStorage,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import {
  Input,
  Button,
  Spinner,
  RegisterHeader,
} from './common';
import { Actions } from 'react-native-router-flux'
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import Icon from './../images/GCADV_logo.png';
import {
  emailChanedText,
  passwordChangedText,
  loginUser,
  facebookLogin,
  attemptLogin,
  getEvents
} from '../actions';


class Login extends Component {

  buttonPressed = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  createAccountDidTapped = () => {
    Actions.signUp({ type: 'replace' });
  }

  onBackPressed = () => {
    Actions.pop();
  }

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getAllKeys();
      if (value !== null) {
        console.log(value)
      }
    }catch(error) {
      console.log(error);
    }
  }

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size="large" />
    }else{
      return (
        <Button
          title="Login"
          style={styles.buttonWidth}
          onPress={this.buttonPressed.bind(this)}
        />
      );
    }
  }

  render() {
    const {
      container,
      headerText,
      buttonWidth,
      headerStyle,
      iconStyle,
      backButtonContainer,
      buttonTextStyle,
      backText
    } = styles
    this.props.getEvents();
    if (this.props.error) {
      console.log(this.props.error);
    }
    return (
      <View style={{flex: 1}}>
        <RegisterHeader
          title="Login"
          rightText="Sign Up"
          onPress={this.createAccountDidTapped.bind(this)}
        />
        <KeyboardAvoidingView keyboardVerticalOffset={-100} behavior="padding" style={{flex: 1, alignItems: 'center'}}>
          <View style={container}>
            <Image source={Icon} style={iconStyle}/>
            <Input
              title="Email"
              placeholder="joesmith@gmail.com"
              onChangeText={(text) => this.props.emailChanedText(text)}
              value={this.props.email}
              keyboardType='email-address'
            />
            <Input
              title="Password"
              placeholder="password123"
              onChangeText={(text) => this.props.passwordChangedText(text)}
              value={this.props.password}
              keyboardType='default'
              secureTextEntry
            />
            { this.renderButton() }
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 135,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Avenir Next Condensed',
    fontWeight: '400',
    color: '#4A4A4A'
  },
  buttonWidth: {
    width: Dimensions.get('window').width * 0.8
  },
  headerStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  iconStyle: {
    height: 60,
    width: 60,
    margin: 20
  },
  backButtonContainer: {
    margin: 10
  },
  buttonTextStyle: {
    fontFamily: 'Avenir Next',
    color: '#4A4A4A'
  },
  backText: {
    color: '#4A4A4A',
    fontFamily: 'Avenir Next',
  }
};

const mapStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password,
    error: state.login.error,
    loading: state.login.loading
  }
}


export default connect(mapStateToProps, {
  emailChanedText,
  passwordChangedText,
  loginUser,
  facebookLogin,
  getEvents
})(Login)
