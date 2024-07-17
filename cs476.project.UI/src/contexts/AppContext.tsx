import React, { useContext, ReactNode } from "react";
import { useToast } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { verifyToken } from "../apiServices";
type ToastMessage = {
  message: string;
  type: "success" | "error";
};

type User = {id : string}

type AppContextType = {
  showToast: (toastMessage: ToastMessage) => void;
  isAuthenticated: boolean;
  userData:User;
};

const AppContext = React.createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const toast = useToast();
  const { isError, data: userId } = useQuery("verifytoken", verifyToken, {
    retry: false,
  });
  const userId2 = String (userId);
  const user : User = {id: userId2};
  console.log(user);
  console.log(userId);

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
    <AppContext.Provider value={{ showToast, isAuthenticated: !isError, userData: user}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};
