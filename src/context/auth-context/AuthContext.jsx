// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const toggleLoginStatus = () => {
    setIsLogged((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ isLogged, toggleLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
