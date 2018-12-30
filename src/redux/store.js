import { createStore } from 'redux';
import rootReducer from './reducers/index-reducer';

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
