
import { combineReducers } from 'redux';
import stockReducer from './stocks/reducer';
import stockItemReducer from './stockItem/stockItemReducer';

const mainReducer = combineReducers({
  stocks: stockReducer,
  stockItem: stockItemReducer,
});

export default mainReducer;