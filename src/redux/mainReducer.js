
import { combineReducers } from 'redux';
import stockReducer from './stocks/reducer';

const mainReducer = combineReducers({
  stocks: stockReducer,
});

export default mainReducer;