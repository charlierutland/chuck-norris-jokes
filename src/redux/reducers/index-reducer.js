import { combineReducers } from 'redux';

import jokes from './jokes-reducer';
import categories from './categories-reducer';

export default combineReducers({ jokes, categories });
