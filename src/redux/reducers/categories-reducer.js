import types from '../action-types';

export default function(state = { categories: [], category: '' }, action) {
  switch (action.type) {
    case types.SET_CATEGORIES:
      return { ...state, categories: action.categories };
    case types.SET_ACTIVE_CATEGORY:
      return { ...state, category: action.category };
    default:
      return state;
  }
}

// TODO(charlierutland): Test this reducer.
