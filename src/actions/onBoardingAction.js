import {
  SET_PAGE
} from './types';

export const setPage = (num) => {
  return {
    type: SET_PAGE,
    payload: num
  }
}
