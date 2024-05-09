// AuthContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context value
interface AuthContextType {
  isLoggedIn: boolean;
  login: ({username, password}:{username:string, password:string}) => string;
  logout: () => void;
  getUser: () => {};
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(localStorage.getItem('isLoggedIn')? true: false);

  const login = ({username, password}:{username:string, password:string}) => {
    // Implement your login logic here (e.g., set isLoggedIn to true)
    console.log(`${username} ${password}`);
    if(true){
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('user', JSON.stringify({
        username,
        password,
      }));
      return "success";
    }else{
      return "error";
    }
  };

  const getUser = () => {
    const user = localStorage.getItem('user');
    return user?JSON.parse(user):null;
  }

  const logout = () => {
    // Implement your logout logic here (e.g., set isLoggedIn to false)
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
