import reducer from './jokes-reducer';
import types from '../action-types';

const initialState = {
  jokes: [],
  isFetching: false
};

describe('jokes reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_JOKES_FETCHING', () => {
    expect(reducer(undefined, { type: types.SET_JOKES_FETCHING })).toEqual({
      jokes: [],
      isFetching: true
    });
  });

  it('should handle SET_JOKES_RECEIVED', () => {
    expect(reducer(undefined, { type: types.SET_JOKES_RECEIVED })).toEqual({
      jokes: [],
      isFetching: false
    });
  });

  it('should handle APPEND_JOKES', () => {
    const jokes = [{ id: 1 }, { id: 2 }, { id: 3 }];
    expect(reducer(undefined, { type: types.APPEND_JOKES, jokes })).toEqual({
      jokes,
      isFetching: false
    });
  });

  it('should handle APPEND_JOKES and remove duplicates', () => {
    const actionJokes = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }];
    const uniqueJokes = [{ id: 1 }, { id: 2 }, { id: 3 }];

    expect(
      reducer(undefined, { type: types.APPEND_JOKES, jokes: actionJokes })
    ).toEqual({
      jokes: uniqueJokes,
      isFetching: false
    });
  });
});
