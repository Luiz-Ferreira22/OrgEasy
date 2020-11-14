import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeProvider from '../pages/HomeProvider';

const Provider = createBottomTabNavigator();

const ProviderRoutes = () => {
  return (
    <Provider.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
         backgroundColor: '#000',
        },
      }}

      >
      <Provider.Screen name="HomeProvider" component={HomeProvider}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={20} color={color}/>
            ),

        }}
       />
    </Provider.Navigator>
  );

};

export default ProviderRoutes;







