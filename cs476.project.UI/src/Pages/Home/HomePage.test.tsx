import HomePage from './HomePage';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('should work as expected', () => {
    render(<HomePage />);
    expect(
      screen.getByText(
        'Luna, the adventurous Husky, is always ready for an outdoor expedition. Her striking blue eyes and playful spirit capture the hearts of everyone she meets.'
      )
    );
  });
});
