import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BsGraphDown, BsGraphUp, BsFillForwardFill } from 'react-icons/bs';
import dotenv from 'dotenv';

dotenv.config();

function StockInfo({ stock }) {
   return (
    <Card style={{ width: '16rem' }} className="m-2 bg-dark">
      <Card.Img className="img" variant="top" src={`https://financialmodelingprep.com/image-stock/${stock.symbol}.png`} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-light font-weight-bold">{ stock.symbol }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{ stock.company }</Card.Subtitle>
        <Card.Text className={`d-flex justify-content-between ${stock.percentage > 0 ? 'text-success' : 'text-danger'}`}>
          { ` ${stock.price} ${stock.currency || 'USD'}` }
          {' '}
          <BsFillForwardFill />
          <em>{ ` ${stock.percentage}% ` }</em>
          {stock.percentage > 0 ? <BsGraphUp /> : <BsGraphDown />}
        </Card.Text>
        <div className="mt-auto">
          <ul className="d-flex flex-wrap justify-content-between price text-muted">
            <li>
              <strong>12h Low</strong>
              <br />
              32.4100
            </li>
            <li>
              <strong>12h High</strong>
              <br />
              32.1417
            </li>
          </ul>
          <Button variant="outline-success w-100">Details</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

StockInfo.propTypes = {
  stock: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.number,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default StockInfo;