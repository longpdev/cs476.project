import React, { useContext, ReactNode, useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { verifyToken } from '../apiServices';
type ToastMessage = {
  message: string;
  type: 'success' | 'error';
};

type AppContextType = {
  showToast: (toastMessage: ToastMessage) => void;
  isAuthenticated: boolean;
  userId: string | null;
};

const AppContext = React.createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const toast = useToast();
  const { isError, data } = useQuery('verifytoken', verifyToken, {
    retry: false,
  });
  const [userId, setUserId] = useState<string | null>(null);
  useEffect(() => {
    if (data) {
      setUserId(data.userId);
    }
  }, [data]);
  const showToast = ({ message, type }: ToastMessage) => {
    toast({
      title: message,
      status: type,
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  };
  return (
    <AppContext.Provider
      value={{ showToast, isAuthenticated: !isError, userId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};
