import React from 'react';
import renderer from 'react-test-renderer';
import StockInfo from '../components/StockInfo';

it('renders StockInfo correctly', () => {
  const stock = {
    ticker: 'AAPL',
    price: '230.54',
    changesPercentage: '2.02',
    companyName: 'Apple Inc',
  };
  const tree = renderer.create(<StockInfo stock={stock} />);
  expect(tree).toMatchSnapshot();
});
