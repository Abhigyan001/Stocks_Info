import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { BsGraphDown, BsGraphUp, BsFillForwardFill } from 'react-icons/bs';

function StockInfo({ stock }) {
  const justPercent = stock.changesPercentage.match(/(-|\+)|(\.)|\d+/g).join('');
  const percentage = parseFloat(justPercent);
  return (
    <Card style={{ width: '16rem' }} className="m-2 bg-light">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-dark font-weight-bold">{ stock.ticker }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{ stock.companyName }</Card.Subtitle>
        <Card.Text className={`d-flex justify-content-between ${percentage > 0 ? 'text-success' : 'text-danger'}`}>
          { ` ${stock.price} ${stock.currency || 'USD'}` }
          {' '}
          <BsFillForwardFill />
          <em>{ `${percentage}%` }</em>
          {percentage > 0 ? <BsGraphUp /> : <BsGraphDown />}
        </Card.Text>
        <div className="mt-auto">
          <a href={`\\stock\\${stock.ticker}`} className="btn btn-outline-info w-100">Details</a>
        </div>
      </Card.Body>
    </Card>
  );
}

StockInfo.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    currency: PropTypes.string,
    changesPercentage: PropTypes.string.isRequired,
  }).isRequired,
};

export default StockInfo;
