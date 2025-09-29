import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio title', () => {
  render(<App />);
  const titleElement = screen.getByText(/portfolio/i); // busca "portfolio" en tu App
  expect(titleElement).toBeInTheDocument();
});