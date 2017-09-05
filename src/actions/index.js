import * as firebase from 'firebase';
import { Facebook } from 'expo';
import { AsyncStorage } from 'react-native'
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
  USER_SIGNED_OUT,
  PERFORMER_SELECTED
} from './types';

export * from './loginActions';
export * from './chatActions';
export * from './eventsActions';
export * from './trainingActions';
export * from './aboutActions';
export * from './onBoardingAction';
export * from './createAccountActions';


export const setImg = (imgId) => {
  return {
    type: SET_IMG,
    payload: imdId
  }
}

export const toggleDrawer = (isOpen) => {
  return {
    type: TOGGLE_DRAWER,
    payload: isOpen
  }
}

export const imageLoading = (loading) => {
  return {
    type: IMAGE_LOADING,
    payload: loading
  }
}

export const eventName = (id) => {
  return {
    type: EVENT_ID,
    payload: id
  }
}

export const hideStatusBar = (hidden) => {
  return {
    type: HIDE_BAR,
    payload: hidden
  }
}

export const PerformerSelected = (performer) => {
  return  {
    type: PERFORMER_SELECTED,
    payload: performer
  }
}
