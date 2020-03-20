import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import TabBar from './TabBar';

import HomeScreen from '../pages/Home';
import LoginScreen from '../pages/Login';

const Tab = createMaterialBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <TabBar {...props} />}
        barStyle={{ backgroundColor: '#fff' }}
      >
        <Tab.Screen
          name="Entregas"
          component={LoginScreen}
          options={{
            tabBarLabel: "Entregas",
            tabBarIcon: ({ focused, color }) => (
              <Icon name="truck-loading" size={20} color={focused ? '#7D40E7' : '#999'} />
            )
          }}
        />
        <Tab.Screen
          name="Meu Perfil"
          component={HomeScreen}
          options={{
            tabBarLabel: "Meu perfil",
            tabBarIcon: ({ focused, color }) => {
              return (
                <Icon name="user-circle" size={20} color={focused ? '#7D40E7' : '#999'} />
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

export default Routes;
