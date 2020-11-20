import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Fornecedor () {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Org Easy</Text>

        <ScrollView
        style={styles.Scroll}>

          <View style={styles.teste}>
            <TouchableOpacity onPress={() => navigation.navigate('TipoFornecedor', {
              ramo:'Recepção'
            })} style={styles.button}>
              <Text style={styles.description}>Recepção</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TipoFornecedor', {
              ramo:'Buffet'
            })} style={styles.button}>
              <Text style={styles.description}>Buffet</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TipoFornecedor', {
              ramo:'Fotografo'
            })} style={styles.button}>
              <Text style={styles.description}>Fotografo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TipoFornecedor', {
              ramo:'Videos'
            })} style={styles.button}>
              <Text style={styles.description}>Videos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TipoFornecedor', {
              ramo:'Musicos'
            })} style={styles.button}>
              <Text style={styles.description}>Musicos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TipoFornecedor', {
              ramo:'Automoveis'
            })} style={styles.button}>
              <Text style={styles.description}>Automoveis</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.description}>Convites</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.description}>Lembranças</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.description}>Flores e Decorações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.description}>Animações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.description}>Cerimonialistas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.description}>Bolos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.description}>Acessorios de Noivas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.description}>Acessorios de Noivos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.description}>Beleza e saude</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.description}>Joalheria</Text>
            </TouchableOpacity>
              </View>
           </ScrollView>
      </View>
  )
};
