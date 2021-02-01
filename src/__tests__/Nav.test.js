import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopNav from '../components/Nav';

it('renders TopNav correctly', () => {
  const tree = renderer.create(<TopNav />);
  expect(tree).toMatchSnapshot();
});

it('should display the heading', () => {
  const { getByTestId } = render(<TopNav />);
  expect(getByTestId('navbar-heading')).toHaveTextContent('STOCKS INFO');
});

it('should display link for home page', () => {
  render(<TopNav />);
  const homeAnchorNode = screen.getByText('STOCKS INFO');
  expect(homeAnchorNode).toBeInTheDocument();
});
