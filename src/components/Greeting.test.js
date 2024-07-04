import { screen, render } from '@testing-library/react';
import Greeting from './Greeting';

test('renders hello world', () => {
  render(<Greeting />);
  const helowWorldElement = screen.getByText('hello world', { exact: false });
  expect(helowWorldElement).toBeInTheDocument();
});
