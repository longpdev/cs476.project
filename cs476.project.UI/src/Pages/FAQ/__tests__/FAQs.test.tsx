import { render, screen } from '@testing-library/react';
import FAQs from '../FAQs';

describe('App', () => {
  it('should work as expected', () => {
    render(<FAQs />);
    expect(screen.getByText('Know Your Pets'));
  });
});
