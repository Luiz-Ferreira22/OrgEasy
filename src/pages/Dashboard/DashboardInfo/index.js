import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default function DashboardInfo() {

  return (
    <View style={styles.info}>
          <TouchableOpacity style={styles.home}>
            <Icon name={"person"} size={30} color={"#FF0000"} />
            <Text style={styles.convidado}> Convidados </Text>
            <Text style={styles.qtd}> 125 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.home}>
            <Icon name={"star-rate"} size={30} color={"#FF0000"} />
            <Text style={styles.convidado}> Favoritos </Text>
            <Text style={styles.qtd}> 125 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.home}>
            <Icon name={"share"} size={30} color={"#FF0000"} />
            <Text style={styles.convidado}> Compartilhar </Text>
            <Text style={styles.qtd}> 125 </Text>
          </TouchableOpacity>

        </View>
  )
};

