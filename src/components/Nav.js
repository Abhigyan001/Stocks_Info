import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

export default function TopNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">STOCKLIST</Navbar.Brand>
      <Nav className="mr-auto">        
        <Nav.Link href="#pricing">Market News</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search Stock"
          className="mr-sm-2"
        />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}