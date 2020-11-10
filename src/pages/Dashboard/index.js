import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';

import DashboardInfo from './DashboardInfo';
import DashboardList from './DashboardList';

import styles from './styles';

export default function Dashboard (){

  return (
    <Background>
      <View style={styles.container}>
        <DashboardInfo />
        <DashboardList />
      </View>
    </Background>
  )
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Inicio',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={20} color={tintColor} />
    )
  };


