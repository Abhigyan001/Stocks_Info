import {
  fetchStockItemRequest,
  fetchStockItemSuccess,
  fetchStockItemFailure,
} from '../redux/stockItem/stockItemActions';

describe('stockActions', () => {
  describe('fetchStockItemRequest', () => {
    it('returns an object with type property', () => {
      expect(fetchStockItemRequest()).toEqual({ type: 'FETCH_STOCK_ITEM_REQUEST' });
    });
  });

  describe('fetchStockItemSuccess', () => {
    it('returns an object with type property', () => {
      expect(fetchStockItemSuccess()).toEqual({ type: 'FETCH_STOCK_ITEM_SUCCESS' });
    });
  });

  describe('fetchStockItemFailure', () => {
    it('returns an object with type property', () => {
      expect(fetchStockItemFailure()).toEqual({ type: 'FETCH_STOCK_ITEM_FAILURE' });
    });
  });
});