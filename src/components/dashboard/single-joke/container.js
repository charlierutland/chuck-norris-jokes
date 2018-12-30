import { connect } from 'react-redux';
import { appendJokes } from '../../../redux/actions';

import { component } from './component';

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
  appendJokes: jokes => dispatch(appendJokes(jokes))
});

export const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
