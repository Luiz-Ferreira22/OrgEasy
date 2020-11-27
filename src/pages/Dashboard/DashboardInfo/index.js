import React, {useEffect, useState} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default function DashboardInfo() {

  const navigation = useNavigation();
  const [nrConvidados, setNrConvidados] = useState([]);
  const [convidados, setConvidado] = useState([]);

  useEffect(() => {
    async function loadMesa() {

      const response = await api.get('convidados');
      debugger;
      setNrConvidados(response.data.length);
      setConvidado(response.data);
      debugger;
    }

    loadMesa();

 },[convidados]);

  return (
    <View style={styles.info}>
          <TouchableOpacity onPress={() => navigation.navigate('Convidados')} style={styles.home}>
            <Icon name={"person"} size={30} color={"#FF0000"} />
          <Text style={styles.convidado}>Convidados</Text>
            <Text style={styles.qtd}> {nrConvidados} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.home}>
            <Icon name={"star-rate"} size={30} color={"#FF0000"} />
            <Text style={styles.convidado}> Favoritos </Text>
            <Text style={styles.qtd}> </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.home}>
            <Icon name={"share"} size={30} color={"#FF0000"} />
            <Text style={styles.convidado}> Compartilhar </Text>

          </TouchableOpacity>

        </View>
  )
};

