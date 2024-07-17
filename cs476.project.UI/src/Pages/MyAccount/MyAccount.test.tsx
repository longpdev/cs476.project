import { render, screen } from '@testing-library/react';
import MyAccount from './MyAccount';

describe('App', () => {
  it('should work as expected', () => {
    render(<MyAccount />);
    expect(screen.getByText('This is MyAccount page'));
  });
});
