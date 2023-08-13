import { render, screen } from '@testing-library/react';
// import App from './App';
import LoginPage from './App';

test('renders learn react link', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
