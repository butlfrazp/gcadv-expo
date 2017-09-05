import login from './../../src/reducers/LoginReducer';

import {
  EMAIL_ENTERED,
  PASSWORD_ENTERED,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAILED,
  CREATE_EMAIL_ENTERED,
  CREATE_PASSWORD_ENTERED,
  CREATE_CONFIRM_PASSWORD_ENTERED,
  USER_EXISTS,
  USER_SIGNED_OUT,
  SET_PAGE
} from '../../src/actions/types';

const state = {
  createConfirmPassword: '',
  createEmail: '',
  createPassword: '',
  email: '',
  password: '',
  user: null,
  error: null,
  loading: false,
  token: null,
  userBool: null,
  page: 0
};

describe('login reducer', () => {
  it('should return true', () => {
    expect(true).toEqual(true)
  });
});
