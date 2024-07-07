import React, { useContext, ReactNode, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { verifyToken } from "../apiServices";
type ToastMessage = {
  message: string;
  type: "success" | "error";
};

type AppContextType = {
  showToast: (toastMessage: ToastMessage) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: any;
};

const AppContext = React.createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toast = useToast();

  const showToast = ({ message, type }: ToastMessage) => {
    toast({
      title: message,
      status: type,
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <AppContext.Provider
      value={{
        showToast,
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated,
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
