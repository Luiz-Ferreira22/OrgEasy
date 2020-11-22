import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import Background from '../../../components/Background';

import {
  Container,
  Form,
  Button,
  Description,
  Name
  }  from './styles';

export default function OptionButton () {

  const navigation = useNavigation();
  return (
   <Background>
    <Container>
      <Form>
        <Button onPress={() =>
                navigation.navigate('AddConvidados')}>
          <Description>
            <Feather name="plus-square" size={20} color={'#f04'} />
            <Name>Adicionar Convidados</Name>
          </Description>
        </Button>
        <Button>
          <Description>
            <Feather name="plus-square" size={20} color={'#f04'} />
            <Name>Adicionar Convidados</Name>
          </Description>
        </Button>
      </Form>
    </Container>
   </Background>
  )
};
