import * as firebase from 'firebase';
import _ from 'lodash';
import { Facebook } from 'expo';
import { AsyncStorage, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';

import {
  SET_IMG,
  SELECT_ABOUT,
  TOGGLE_DRAWER,
  EVENT_ID,
  IMAGE_LOADING,
  HIDE_BAR,
  EMAIL_ENTERED,
  PASSWORD_ENTERED,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAILED,
  USER_EXISTS,
  USER_SIGNED_OUT
} from './types';

export const emailChanedText = (text) => {
  return {
    type: EMAIL_ENTERED,
    payload: text
  }
}

export const passwordChangedText = (text) => {
  return {
    type: PASSWORD_ENTERED,
    payload: text
  };
};

export const loginUser = ({email, password}) =>  async dispatch => {
  let userToken = await AsyncStorage.getItem('user');
  if(userToken) {
    loginUserSucess(dispatch, userToken);
  }else{
    dispatch({type: LOGIN_USER});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
      })
      .catch((error) => loginUserFailed(dispatch, error));
  };
};

export const createUser = ({ email, password, confirmPassword }) => async dispatch => {
  if (password === confirmPassword) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user)
      })
      .catch((error) => loginUserFailed(dispatch, error));
  }else{
    loginUserFailed(dispatch, "Passwords Don't Match");
  }
}

const loginUserSuccess = async (dispatch, user) => {
  await AsyncStorage.setItem('user', user.uid);
  dispatch({
    type: LOGIN_USER_SUCESS,
    payload: user.uid
  });
  Actions.main({ type: 'replace'});
};

const loginUserFailed = (dispatch, error) => {
  Alert.alert('Login Error', error.message);
  dispatch({ type: LOGIN_USER_FAILED, payload: error });
};

export const tryPreLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('user');
  if (token) {
    dispatch({ type: USER_EXISTS, payload: true })
    dispatch({ type: LOGIN_USER_SUCESS, payload: token });
    Actions.main({ type: 'replace'});
  }else{
    dispatch({ type: USER_EXISTS, payload: false });
    Actions.onboarding({ type: 'replace' });
  }
}

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('user');
  if(token) {
    Actions.main();
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
  } else {
    doFaceBookLogin(dispatch);
  }
};

const doFaceBookLogin = async dispatch => {
  let loginError = null;
  let { token, type } = await Facebook.logInWithReadPermissionsAsync('430338160680705', {
    permission: ['public_profile']
  })

  if(type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAILED })
  }

  const provider = firebase.auth.FacebookAuthProvider
  const credential = provider.credential(token);
  if (credential) {
    firebase.auth().signInWithCredential(credential)
      .catch((error) => {
        loginError = error;
        alert(error)
      })
      .then(async () => {
        if (_.isNull(loginError)) {
          await AsyncStorage.setItem('user', token);
          Actions.main({ type: 'replace' });
          dispatch({ type: LOGIN_USER_SUCESS, payload: token });
        }
      });
  }
};

export const signOut = () => async dispatch => {
  await AsyncStorage.removeItem('user');
  Actions.onboarding({ type: 'replace' });
  dispatch({ type: USER_SIGNED_OUT });
}
