import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Convidados from '../pages/Convidados';
import AddConvidados from '../pages/Convidados/AddConvidados';
import AddMesas from '../pages/Convidados/AddMesas';
import ListaConvidados from '../pages/Convidados/ListaConvidados';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/User/Profile';
import Fornecedor from '../pages/Fornecedor';
import TipoFornecedor from '../pages/Fornecedor/TipoFornecedor';
import PerfilFornecedor from '../pages/Fornecedor/PerfilFornecedor';

const User = createBottomTabNavigator();

const Prov = createStackNavigator();

const Conv = createStackNavigator();


function Provider () {
  return (
    <Prov.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#000'}
      }}
    >
      <Prov.Screen name="Fornecedor" component={Fornecedor} />
      <Prov.Screen name="TipoFornecedor" component={TipoFornecedor}/>
      <Prov.Screen name="PerfilFornecedor" component={PerfilFornecedor} />

    </Prov.Navigator>
  )
};

function Seila () {
  return (
    <Conv.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#000'}
      }}
    >
      <Conv.Screen name="Convidados" component={Convidados} />
      <Conv.Screen name="AddConvidados" component={AddConvidados}/>
      <Conv.Screen name="AddMesas" component={AddMesas}/>
      <Conv.Screen name="ListaConvidados" component={ListaConvidados}/>

    </Conv.Navigator>
  )
}


const UserRoutes = () => {
  return (
    <User.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#f04',
        inactiveTintColor: '#fff',
        style: {
         backgroundColor: '#000',

        },
      }}
      >
      <User.Screen name="Dashboard" component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={20} color={color}/>
            ),
        }}

       />

       <User.Screen name="Provider" component={Provider}
        options={{
          tabBarLabel: 'Fornecedores',
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={20} color={color} />
            )
        }}

       />

      <User.Screen name="Convidados" component={Seila}
      options={{
        tabBarLabel: 'Convidados',
        tabBarIcon: ({ color }) => (
          <Icon name="favorite" size={20} color={color} />
          ),
        }}
      />

      <User.Screen name="Profile" component={Profile}
      options={{
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ color }) => (
        <Icon name="person" size={20} color={color}  />
    )
      }}
       />
    </User.Navigator>
  );
};

export default UserRoutes;



