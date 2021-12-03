import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Header';
import {} from './About'
import {} from './Question'
import {} from './Footer'


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
