import { render } from '@testing-library/react';
import App from './App';
import { AppContextProvider, useAppContext } from './contexts/AppContext';
import { ChakraProvider } from '@chakra-ui/react';

jest.mock('./contexts/AppContext');

describe('App', () => {
  it('should work as expected', () => {
    (useAppContext as jest.Mock).mockReturnValue({ isAuthenticated: true });

    render(
      <AppContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </AppContextProvider>
    );
  });
});
