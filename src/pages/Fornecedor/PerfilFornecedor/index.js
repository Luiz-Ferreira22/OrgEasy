import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';


import { Container, Title } from './styles'

export default function PerfilFornecedor () {

  const navigation = useNavigation();

  const onReturn = () => {
    navigation.goBack();
  };

  return (
      <Container>

        <TouchableOpacity onPress={onReturn}>
          <Icon name="arrow-back" size={30} color={'#f04'}/>
        </TouchableOpacity>

          <Title>Perfil Fornecedor</Title>
      </Container>

    )
};


