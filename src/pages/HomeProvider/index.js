import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';

export default function Dashboard (){

  return (
    <Background>
     <Text>BEM VINDO</Text>
    </Background>
  )
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Inicio',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={20} color={tintColor} />
    )
  };


