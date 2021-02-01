import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import '@testing-library/jest-dom/extend-expect';

it('renders Footer correctly', () => {
  const tree = renderer.create(<Footer />);
  expect(tree).toMatchSnapshot();
});

it('should display developer name', () => {
  render(<Footer />);
  const devName = screen.getByText(/Abhigyan/);
  expect(devName).toBeInTheDocument();
});
