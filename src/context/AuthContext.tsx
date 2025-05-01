import React, { createContext, useEffect, useState} from "react";
import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await SecureStore.getItemAsync('token');
        setIsAuthenticated(!!token);
      } catch(error) {
        Alert.alert('Error loading token:', error?.toString());
      }
    };

    loadToken();
  }, []);

  const login = async (token: string) => {
    try {
      await SecureStore.setItemAsync('token', token);
      setIsAuthenticated(true);
    } catch (error) {
      Alert.alert('Error saving token:', error?.toString());
    }
  };

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync('token');
      setIsAuthenticated(false);
    } catch (error) {
      Alert.alert('Error deleting token:', error?.toString());
    }
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};