import React from 'react';
import StockInfo from '../components/StockInfo';

export default function Stockcontainer() {
  const apple = {
    symbol: 'AAPL',
    price: 350.03,
    percentage: 0.55,
    company: 'Apple Inc',
  };

  return (
    <div className="mt-5 d-flex flex-wrap justify-content-center">
      <StockInfo stock={apple} />
      <StockInfo stock={apple} />
      <StockInfo stock={apple} />      
      <StockInfo stock={apple} />      
    </div>
  );
}