import { connect } from 'react-redux';

import { component } from './component';
import {
  appendJokes,
  setCategories,
  setActiveCategory,
  setJokesFetching,
  setJokesReceived
} from '../../redux/actions';

const mapStateToProps = state => ({
  jokes: state.jokes.jokes,
  categories: state.categories.categories,
  category: state.categories.category,
  isFetching: state.jokes.isFetching
});

const mapDispatchToProps = dispatch => ({
  appendJokes: jokes => dispatch(appendJokes(jokes)),
  setCategories: categories => dispatch(setCategories(categories)),
  setActiveCategory: category => dispatch(setActiveCategory(category)),
  setJokesFetching: () => dispatch(setJokesFetching()),
  setJokesReceived: () => dispatch(setJokesReceived())
});

export const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
