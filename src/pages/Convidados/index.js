import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';

import OptionButton from './OptionButton';

export default function Convidados (){
  return (
    <Background>
      <OptionButton />
    </Background>
  )
}

Convidados.navigationOptions = {
  tabBarLabel: 'Convidados',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="favorite" size={20} color={tintColor} />
    )

  };



