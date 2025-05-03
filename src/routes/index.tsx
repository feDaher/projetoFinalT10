import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { AuthContext } from '../context/AuthContext';
import { RootStackParamList } from '../types/navigation';
import TabRoutes from './TabRoutes';
import CreateTaskScreen from '../screens/CreateTask';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="HomeTabs" component={TabRoutes} options={{ headerShown: false }} />
          <Stack.Screen name="CreateTask" component={CreateTaskScreen} options={{ title: 'Nova Tarefa' }} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default Routes;