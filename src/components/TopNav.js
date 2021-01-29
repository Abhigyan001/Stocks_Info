import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  Form,
} from 'react-bootstrap';

function TopNav({ handleOnSelect }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">STOCK INFO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/news">Market News</Nav.Link>
        </Nav>
        <Form inline>
          <Form.Control onChange={handleOnSelect} as="select" className="mr-sm-2">
            <option value="active">Most Active Stocks</option>
            <option value="gainers">Most Gaining Stocks </option>
            <option value="losers">Most Losing Stocks </option>
          </Form.Control>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

TopNav.propTypes = {
  handleOnSelect: PropTypes.func.isRequired,
};

export default TopNav;
