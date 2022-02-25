import { render, screen } from '@testing-library/react';
import App from './App';

// I don't think this will need to be changed

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
