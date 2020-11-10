import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator,
 } from 'react-navigation';

 import { createBottomTabNavigator } from 'react-navigation-tabs';

 import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';


import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Convidados from './pages/Convidados';

import TipoFornecedor from './pages/Fornecedor/TipoFornecedor';
import ListaFornecedor from './pages/Fornecedor/ListaFornecedor';

import HomeProvider from './pages/HomeProvider';



export default (isSigned) =>

createAppContainer (
   createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        SignIn,
        SignUp,
      }),
      Provider: createBottomTabNavigator({
        HomeProvider,
      }),
      App: createBottomTabNavigator({
        Dashboard,
        Convidados,
        Fornecedores: {
          screen: createStackNavigator({
            TipoFornecedor,
            ListaFornecedor,
          }),
          navigationOptions: {
            activeTintColor: '#f04',
            inactiveTintColor: '#fff',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="search" size={20} color={tintColor} />
              )
          }
        },
        Profile,
      },
      {
     tabBarOptions: {
       keyboardHidesTabBar: true, // passa o teclado por cima da tab bar
       activeTintColor: '#f04', // botão selecionado
       inactiveTintColor: '#fff',
       style: {
         backgroundColor: '#000'
       },
     },
   },
   ),
 }, {
     initialRouteName: isSigned ? 'App' : 'Sign',
 }),
);

