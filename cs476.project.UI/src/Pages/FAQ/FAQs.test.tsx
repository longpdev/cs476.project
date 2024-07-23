import { it, expect, describe } from 'vitest';
import FAQs from './FAQs';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

describe('FAQs', () => {
  it('should render the FAQs page', () => {
    render(<FAQs />);
    const heading = screen.queryAllByRole('heading');
    expect(heading[0]).toBeInTheDocument();
  });
});
