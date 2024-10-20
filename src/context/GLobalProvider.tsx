import { createContext, Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';

type User = {
  name: string;
};

interface GlobalContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  user: User[] | [];
  authToken: any;
  setUser: Dispatch<SetStateAction<User[]>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  setAuthTokenHandler: (token: string | null) => void;
}

const initialValues: GlobalContextType = {
  count: 0,
  setCount: () => {},
  user: [],
  setUser: () => {},
  message: '',
  setMessage: () => {},
  authToken: '',
  setAuthTokenHandler: (token: string | null) => {},
};

interface GlobalProviderInterface {
  children: ReactNode;
}

export const GlobalContext = createContext(initialValues);

const GlobalProvider: FC<GlobalProviderInterface> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User[]>([]);
  const [authToken, setAuthToken] = useState<any>('');
  const [message, setMessage] = useState<string>('');

  // Chunk for the auth start
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const setAuthTokenHandler = (token: string | null) => {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
    setAuthToken(token);
  };
  // Ends here

  // Set up Axios interceptor
  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        if (authToken) {
          config.headers['Authorization'] = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }, [authToken]);

  return (
    <GlobalContext.Provider
      value={{
        count,
        setCount,
        user,
        setUser,
        message,
        setMessage,
        authToken,
        setAuthTokenHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
