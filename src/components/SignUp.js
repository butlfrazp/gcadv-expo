import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Input,
  Button,
  Spinner,
  RegisterHeader
} from './common';
import{
  createEmailChanged,
  createPasswordChanged,
  createConfirmPasswordChanged,
  createUser
} from './../actions';

import Icon from './../images/GCADV_logo.png';

class SignUp extends Component {

  onBackPressed = () => {
    Actions.pop();
  }

  onLoginDidTapped = () => {
    Actions.login({ type: "replace" })
  }

  render() {
    const {
      innerContainer,
      backContainer,
      backButtonText,
      leftControlContainer,
      centerControlContainer,
      signUpText,
      iconStyle
    } = styles
    return (
      <View style={{flex: 1}}>
        <RegisterHeader
          title="Sign Up"
          rightText="Login"
          onPress={ this.onLoginDidTapped.bind(this) }
        />
        <KeyboardAvoidingView style={{flex: 1, alignItems: 'center'}} behavior="padding" keyboardVerticalOffset={-120}>
          <View style={innerContainer}>
            <Image
              source={Icon}
              style={iconStyle}
            />
            <Input
              title="Email"
              placeholder="joesmith@gmail.com"
              keyboardType='email-address'
              value={this.props.email}
              onChangeText={(text) => this.props.createEmailChanged(text)}
            />
            <Input
              title="Password"
              placeholder="password123"
              keyboardType='default'
              value={this.props.password}
              onChangeText={(text) => this.props.createPasswordChanged(text)}
              secureTextEntry
            />
            <Input
              title="Confirm Password"
              placeholder="password123 again"
              keyboardType='default'
              value={this.props.confirmPassword}
              onChangeText={(text) => this.props.createConfirmPasswordChanged(text)}
              secureTextEntry
            />
            <Button
              title="Sign Up"
              style={styles.buttonWidth}
              onPress={this.props.createUser.bind(this, this.props)}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = {
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 75
  },
  buttonWidth: {
    width: Dimensions.get('window').width * 0.8
  },
  iconStyle: {
    height: 60,
    width: 60,
    margin: 20
  },
}

mapStateToProps = state => {
  const { createEmail, createPassword, createConfirmPassword, error } = state.login;
  return {
    email: createEmail,
    password: createPassword,
    confirmPassword: createConfirmPassword,
    error
  }
}

export default connect(mapStateToProps, {
  createEmailChanged,
  createPasswordChanged,
  createConfirmPasswordChanged,
  createUser
})(SignUp);
