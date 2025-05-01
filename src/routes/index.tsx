import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import { AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  )
}

export default Routes;