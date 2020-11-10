import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


 import styles from './styles';

export default function DashboardList () {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.textScroll}>
          <Text style={styles.titulo}>
            Crie Sua Lista de Convidados
          </Text>
          <Text>
            Faça uma lista de todas as pessoas que nao podem faltar
            no seu grande dia
          </Text>
          <TouchableOpacity  style={styles.button}>
            <Text> Criar Lista </Text>
            <Icon name={'arrow-right'} size={20} color={'#f04'}/>
          </TouchableOpacity>
        </View>

        <View style={styles.textScroll}>
          <Text style={styles.titulo}>
            Crie Sua Lista de Convidados
          </Text>

          <Text>
            O vestido evasê, o sapato branco discreto, o véu e a grinalda
            (que já não se limita mais às antigas coroas de flores),
            são itens indispensáveis para compor o visual da noiva tradicional.
            O noivo costuma usar fraque e cravo na lapela, como se casou seu avô.
            Na hora da recepção, a noiva costuma abrir mão do véu para rodopiar
            na pista de dança com o seu marido.
          </Text>
        </View>

        <View style={styles.textScroll}>
          <Text style={styles.titulo}>
            Crie Sua Lista de Convidados
          </Text>

          <Text>
            Faça uma lista de todas as pessoas que nao podem faltar
            no seu grande dia
          </Text>
        </View>

        <View style={styles.textScroll}>
          <Text style={styles.titulo}>
            Crie Sua Lista de Convidados
          </Text>

          <Text>
            Faça uma lista de todas as pessoas que nao podem faltar
            no seu grande dia
          </Text>
        </View>

        <View style={styles.textScroll}>
          <Text style={styles.titulo}>
            Crie Sua Lista de Convidados
          </Text>

          <Text>
            Faça uma lista de todas as pessoas que nao podem faltar
            no seu grande dia
          </Text>
        </View>

        <View style={styles.textScroll}>
          <Text style={styles.titulo}>
            Crie Sua Lista de Convidados
          </Text>

          <Text>
            Faça uma lista de todas as pessoas que nao podem faltar
            no seu grande dia
          </Text>
        </View>

        <View style={styles.textScroll}>
          <Text style={styles.titulo}>
            Crie Sua Lista de Convidados
          </Text>

          <Text>
            Faça uma lista de todas as pessoas que nao podem faltar
            no seu grande dia
          </Text>
        </View>
        <View style={styles.textScroll}>
          <Text style={styles.titulo}>
            Crie Sua Lista de Convidados
          </Text>

          <Text>
            Faça uma lista de todas as pessoas que nao podem faltar
            no seu grande dia
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
