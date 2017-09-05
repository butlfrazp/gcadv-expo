import {
  CREATE_EMAIL_ENTERED,
  CREATE_PASSWORD_ENTERED,
  CREATE_CONFIRM_PASSWORD_ENTERED
} from './types';

export const createEmailChanged = email => {
  return {
    type: CREATE_EMAIL_ENTERED,
    payload: email
  }
}

export const createPasswordChanged = password => {
  return {
    type: CREATE_PASSWORD_ENTERED,
    payload: password
  }
}

export const createConfirmPasswordChanged = password => {
  return {
    type: CREATE_CONFIRM_PASSWORD_ENTERED,
    payload: password
  }
}
