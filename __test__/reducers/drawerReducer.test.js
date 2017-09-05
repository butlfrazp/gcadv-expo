import drawer from './../../src/reducers/DrawerReducer';

import {
  TOGGLE_DRAWER
} from '../../src/actions/types';

const state = {
  open: true
}

describe('drawer reducer', () => {
  it('should close drawer', () => {
    expect(drawer(undefined, { type: TOGGLE_DRAWER, payload: true }))
    .toEqual({
      ...state,
      open: true
    });
  });

  it('should open drawer', () => {
    expect(drawer(undefined, { type: TOGGLE_DRAWER, payload: false }))
    .toEqual({
      open: false
    })
  });
});
