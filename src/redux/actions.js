import types from './action-types';

export function appendJokes(jokes) {
  return {
    type: types.APPEND_JOKES,
    jokes
  };
}

export function setCategories(categories) {
  return {
    type: types.SET_CATEGORIES,
    categories
  };
}

export function setActiveCategory(category) {
  return {
    type: types.SET_ACTIVE_CATEGORY,
    category
  };
}

export function setJokesFetching() {
  return {
    type: types.SET_JOKES_FETCHING
  };
}

export function setJokesReceived() {
  return {
    type: types.SET_JOKES_RECEIVED
  };
}
