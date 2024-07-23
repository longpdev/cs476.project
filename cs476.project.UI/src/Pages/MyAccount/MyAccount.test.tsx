import { it, expect, describe } from 'vitest';
import MyAccount from './MyAccount';
import { render, screen } from '@testing-library/react';
import { AppContextProvider } from '../../contexts/AppContext';
import { QueryClientProvider } from 'react-query';
import '@testing-library/jest-dom/vitest';
import { QueryClient } from 'react-query';
describe('My Account', () => {
  it('should render the FAQs page', () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>
          <MyAccount />
        </AppContextProvider>
      </QueryClientProvider>
    );
    const heading = screen.queryAllByRole('heading');
    expect(heading[0]).toBeInTheDocument();
  });
});
