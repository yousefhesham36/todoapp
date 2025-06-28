import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import TodoDetails from './pages/TodoDetails';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack Navigator for Home (includes Details)
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={Home} options={{ title: "Home" }} />
      <Stack.Screen name="Details" component={TodoDetails} />
    </Stack.Navigator>
  );
}

// Stack Navigator for Tasks (you can extend later)
function TasksStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TasksMain" component={Tasks} options={{ title: "Tasks" }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Tasks') iconName = 'checkmark-done';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Tasks" component={TasksStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
