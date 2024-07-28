import React, { useContext, ReactNode, useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { verifyToken, getUserById } from '../apiServices';

type ToastMessage = {
  message: string;
  type: 'success' | 'error' | 'info';
};

type AppContextType = {
  showToast: (toastMessage: ToastMessage) => void;
  isAuthenticated: boolean;
  userId: string | null;
  user: User | null;
  isAdmin: boolean;
};

type User = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  isAdmin: boolean;
};

const AppContext = React.createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const toast = useToast();
  const { isError, data: authData } = useQuery('verifytoken', verifyToken, {
    retry: false,
  });
  const [userId, setUserId] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  useEffect(() => {
    if (authData) {
      setUserId(authData.userId);
    }
  }, [authData]);
  const showToast = ({ message, type }: ToastMessage) => {
    toast({
      title: message,
      status: type,
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const { data: userData } = useQuery(
    ['getUserById', userId],
    () => getUserById(userId!),
    {
      enabled: !!userId,
      retry: false,
    }
  );
  useEffect(() => {
    if (userData) {
      const { email, firstName, lastName, phoneNumber, isAdmin } = userData;
      setUser({ email, firstName, lastName, phoneNumber, isAdmin });
      setIsAdmin(isAdmin);
    }
  }, [userData]);
  return (
    <AppContext.Provider
      value={{
        showToast,
        isAuthenticated: !isError,
        userId,
        user,
        isAdmin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};
