import {
  fetchNewsRequest,
  fetchNewsSuccess,
  fetchNewsFailure,
} from '../redux/stockNews/stockNewsActions';

describe('stockActions', () => {
  describe('fetchNewsRequest', () => {
    it('returns an object with type property', () => {
      expect(fetchNewsRequest()).toEqual({ type: 'FETCH_NEWS_REQUEST' });
    });
  });

  describe('fetchNewsSuccess', () => {
    it('returns an object with type property', () => {
      expect(fetchNewsSuccess()).toEqual({ type: 'FETCH_NEWS_SUCCESS' });
    });
  });

  describe('fetchNewsFailure', () => {
    it('returns an object with type property', () => {
      expect(fetchNewsFailure()).toEqual({ type: 'FETCH_NEWS_FAILURE' });
    });
  });
});
