import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function OptionButton () {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Meus Convidados</Text>
      </View>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.button}
          >
            <Text style={styles.text}>Convidados</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Mesas</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}
