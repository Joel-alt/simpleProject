import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElementOne = screen.getByText('Enter your first number');
  const linkElementTwo = screen.getByText('Enter your second number');
  expect(linkElementOne).toBeInTheDocument();
  expect(linkElementTwo).toBeInTheDocument();
});
