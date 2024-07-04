import { screen, render } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    render(<Async />);

    const listItemElements = await screen.findAllByRole('listitem'); //find returns promise + 3rd arg: timeout 1s
    expect(listItemElements).not.toHaveLength(0);
  });
});
