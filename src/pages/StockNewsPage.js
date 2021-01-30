import React from 'react';
import { Container } from 'react-bootstrap';
import TopNavTicker from '../components/TopNavTicker';
import Footer from '../components/Footer';
import MarketNewsContainer from '../container/MarketNewsContainer';

export default function Stocknewspage() {
  return (
    <Container className="pt-5 pb-5">
      <TopNavTicker />
      <MarketNewsContainer />
      <Footer />
    </Container>
  );
}
