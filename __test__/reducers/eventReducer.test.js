import event from './../../src/reducers/EventReducer';

import {
  FETCHING_EVENTS,
  EVENTS_RECEIVED,
  EVENTS_FAILED,
  GO_TO_EVENT
} from './../../src/actions/types';

const state = {
  loading: false,
  events: [],
  event: null
}

describe('event reducer', () =>{
  it('should fetch events', () => {
    expect(event(undefined, { type: FETCHING_EVENTS }))
    .toEqual({
      ...state,
      loading: true
    });
  });

  it('should recieve events',  () => {
    const payload = ["test", "test again", "tests final"]
    expect(event(undefined, { type: EVENTS_RECEIVED, payload }))
    .toEqual({
      ...state,
      events: payload
    });
  });

  it('should should fail events', () => {
    expect(event(undefined, { type: EVENTS_FAILED }))
    .toEqual({
      ...state,
      loading: false
    });
  });

  it('should go to event',  () => {
    expect(event(undefined, { type: GO_TO_EVENT, payload: "test"}))
    .toEqual({
      ...state,
      event: 'test'
    })
  });
});
