import React, { useContext, ReactNode } from "react";
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
};

const AppContext = React.createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const toast = useToast();
  const { isError } = useQuery("verifytoken", verifyToken, {
    retry: false,
  });
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
    <AppContext.Provider value={{ showToast, isAuthenticated: !isError }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};
