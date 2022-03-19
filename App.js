import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/pages/Home';
import Finalizados from './src/pages/Finalizados';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerMode: "screen",
        headerTintColor: "black",
        headerStyle: {
          backgroundColor: "white",
        }
      }}>


        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => <Icon name="home" size={25} color={color} />,
            tabBarStyle: {
              backgroundColor: "white"
            }
          }}
        />

        <Tab.Screen
          name="Finalizados"
          component={Finalizados}
          options={{
            tabBarIcon: ({ color }) => <Icon name="clock-o" size={25} color={color} />,
            tabBarStyle: {
              backgroundColor: "white"
            }
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
