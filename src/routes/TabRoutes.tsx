import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import TaskListScreen from '../screens/TaskList';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#246bfd',
        tabBarStyle: { height: 60, paddingBottom: 100, paddingTop: 4 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="TaskList"
        component={TaskListScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />,
          tabBarLabel: 'Tarefas',
        }}
      />
    </Tab.Navigator>
  );
}
