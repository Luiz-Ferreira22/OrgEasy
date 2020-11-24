import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import Background from '../../../components/Background';
import api from '../../../services/api';



import {
  Container,
  Form,
  Title,
  FormList,
  ScrollView,
  List,
  Button,
  Name,
  FormName,
  FormDescription,
  Voltar,
  Avatar,
  }  from './styles';

export default function ListaConvidados (){

  const navigation = useNavigation();

 const onReturn = () => {
  navigation.goBack();
};


  return (
    <Background>
      <Container>

      <FormDescription>
          <TouchableOpacity onPress={onReturn}>
            <Icon name="arrow-back" size={20} color={'#f04'}/>
          </TouchableOpacity>
          <Voltar onPress={onReturn}>Voltar</Voltar>
        </FormDescription>

      </Container>
    </Background>
  )
};
