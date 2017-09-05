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
} from '../actions/types';
const INITIAL_STATE = {
  createConfirmPassword: '',
  createEmail: '',
  createPassword: '',
  email: '',
  password: '',
  user: null,
  error: null,
  facebookError: null,
  loading: false,
  token: null,
  userBool: null,
  page: 0
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMAIL_ENTERED:
      return { ...state, email: action.payload, error: null };
    case PASSWORD_ENTERED:
      return { ...state, password: action.payload, error: null };
    case LOGIN_USER_SUCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' }
    case LOGIN_USER_FAILED:
      return { ...state, error: action.payload, password: '', loading: false};
    case FACEBOOK_LOGIN_SUCCESS:
      return { ...state, token: action.payload}
    case FACEBOOK_LOGIN_FAILED:
      return { ...state, token: null, facebookError: "Error"}
    case CREATE_EMAIL_ENTERED:
      return { ...state, createEmail: action.payload, error: null };
    case CREATE_PASSWORD_ENTERED:
      return { ...state, createPassword: action.payload, error: null };
    case CREATE_CONFIRM_PASSWORD_ENTERED:
      return { ...state, createConfirmPassword: action.payload, error: null };
    case USER_EXISTS:
      return { ...state, userBool: action.payload };
    case USER_SIGNED_OUT:
      return { ...state, ...INITIAL_STATE };
    case SET_PAGE:
      return { ...state, page: state.page + action.payload };
    default:
      return state;
  }
}
