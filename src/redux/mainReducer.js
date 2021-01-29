import { combineReducers } from 'redux';
import stockReducer from './stocks/reducer';
import stockItemReducer from './stockItem/stockItemReducer';
import stockNewsReducer from './stockNews/stockNewsReducer';

const mainReducer = combineReducers({
  stocks: stockReducer,
  stockItem: stockItemReducer,
  stockNews: stockNewsReducer,
});

export default mainReducer;