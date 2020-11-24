import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeProvider from '../pages/TelaFornecedores/HomeProvider';
import ProfileProvider from '../pages/TelaFornecedores/ProfileProvider';
import EmpresaProvider from '../pages/TelaFornecedores/EmpresaProvider';
import InfoEmpresa from '../pages/TelaFornecedores/InfoEmpresa';

const Provider = createBottomTabNavigator();

const Conv = createStackNavigator();

const Teste = () => {
  return (
    <Conv.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#000'}
      }}
    >
      <Conv.Screen name="HomeProvider" component={HomeProvider} />
      <Conv.Screen name="InfoEmpresa" component={InfoEmpresa}/>

    </Conv.Navigator>
  )
};


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
      <Provider.Screen name="Home" component={Teste}
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







