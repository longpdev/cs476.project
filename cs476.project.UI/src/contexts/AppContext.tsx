import React, { useContext, ReactNode, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { verifyToken } from '../apiServices';

type ToastMessage = {
  message: string;
  type: 'success' | 'error';
};

type User = { id: string };

type AppContextType = {
  showToast: (toastMessage: ToastMessage) => void;
  isAuthenticated: boolean;
  userData: User;
  userId: string;
};

const AppContext = React.createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const toast = useToast();
  const { isError, isLoading, data } = useQuery<{ userId: string }>(
    'verifytoken',
    verifyToken,
    {
      retry: false,
    }
  );

  useEffect(() => {
    if (isError) {
      toast({
        title: 'Error verifying token',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  }, [isError, toast]);

  const userIdStr = data?.userId ?? ''; // Ensure userId is extracted and defaulting to an empty string if null
  const user: User = { id: userIdStr };

  const showToast = ({ message, type }: ToastMessage) => {
    toast({
      title: message,
      status: type,
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading user data</div>;
  }

  return (
    <AppContext.Provider
      value={{
        showToast,
        isAuthenticated: !isError,
        userData: user,
        userId: userIdStr,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
