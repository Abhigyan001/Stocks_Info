import {
  fetchStocksRequest,
  fetchStocksSuccess,
  fetchStocksFailure,
} from '../redux/stocks/stockActions';

describe('stockActions', () => {
  describe('fetchStocksRequest', () => {
    it('returns an object with type property', () => {
      expect(fetchStocksRequest()).toEqual({ type: 'FETCH_STOCK_REQUEST' });
    });
  });

  describe('fetchStocksSuccess', () => {
    it('returns an object with type property', () => {
      expect(fetchStocksSuccess()).toEqual({ type: 'FETCH_STOCK_SUCCESS' });
    });
  });

  describe('fetchStocksFailure', () => {
    it('returns an object with type property', () => {
      expect(fetchStocksFailure()).toEqual({ type: 'FETCH_STOCK_FAILURE' });
    });
  });
});
