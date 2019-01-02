import types from '../action-types';

import { uniqBy } from 'lodash';

export default function(state = { jokes: [], isFetching: false }, action) {
  switch (action.type) {
    case types.APPEND_JOKES:
      return {
        ...state,
        jokes: uniqBy(state.jokes.concat(action.jokes), 'id')
      };
    case types.SET_JOKES_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.SET_JOKES_RECEIVED:
      return {
        ...state,
        isFetching: false
      };

    default:
      return state;
  }
}

// TODO(charlierutland): Test this reducer.
