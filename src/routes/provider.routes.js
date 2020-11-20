import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeProvider from '../pages/Provider/HomeProvider';
import ProfileProvider from '../pages/Provider/ProfileProvider';
import EmpresaProvider from '../pages/Provider/EmpresaProvider';
import DadosEmpresa from '../pages/Provider/DadosEmpresa';

const Provider = createBottomTabNavigator();
const Perfil = createStackNavigator();

function Dados () {
  return (
    <Perfil.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#000'}
      }}
    >
      <Perfil.Screen name="Home" component={HomeProvider} />
      <Perfil.Screen name="Profile" component={DadosEmpresa} />

    </Perfil.Navigator>
  )
}

const ProviderRoutes = () => {
  return (
    <Provider.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#f04',
        inactiveTintColor: '#fff',
        style: {
         backgroundColor: '#000',
        },
      }}

      >
      <Provider.Screen name="Home" component={Dados}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={20} color={color}/>
            ),
        }}
       />

      <Provider.Screen name="Empresa" component={EmpresaProvider}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="domain" size={20} color={color}/>
            ),
        }}
       />

      <Provider.Screen name="Perfil" component={ProfileProvider}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="settings" size={20} color={color}/>
            ),
        }}
       />
    </Provider.Navigator>
  );

};

export default ProviderRoutes;







