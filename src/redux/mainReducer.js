import { combineReducers } from 'redux';
import stockItemReducer from './stockItem/stockItemReducer';
import stockReducer from './stocks/stockReducer';
import stockNewsReducer from './stockNews/stockNewsReducer';

const mainReducer = combineReducers({
  stocks: stockReducer,
  stockItem: stockItemReducer,
  stockNews: stockNewsReducer,
});

export default mainReducer;
