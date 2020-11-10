import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';



import styles from './styles';

export default function TipoFornecedor ({ navigation }) {


  return (
    <View style={styles.container}>

      <Text style={styles.title}>Org Easy</Text>

        <ScrollView style={styles.Scroll}>

          <View style={styles.teste}>
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigete('ListFornecedor')}

            >
            </TouchableOpacity>

            </View>
           </ScrollView>
      </View>

    )
};


