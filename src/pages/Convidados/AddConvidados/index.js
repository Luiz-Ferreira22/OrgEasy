import React, { useState, useEffect } from 'react';
import {TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import  { Picker } from '@react-native-community/picker';

import api from '../../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../../components/Background';

import { signUpConvidado } from '../../../store/modules/auth/actions';

import {
  Container,
  Form,
  Title,
  FormInput,
  SubmitButton,
  FormPicker,
  FormDescription,
  Button,
  Voltar,
  FormTeste,

  } from './styles';

export default function AddConvidados (){

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [sobre_nome, setSobreNome] = useState('');

  const [mesas, setMesa] = useState(['']);

  // Funcao para alterar dados
  function handleSubmit() {
    dispatch(signUpConvidado(
      name,
      sobre_nome,
      ));
  };

  const onReturn = () => {
    navigation.goBack();
  };

  return (
    <Background>
      <Container >

       <FormDescription>
          <TouchableOpacity onPress={onReturn}>
            <Icon name="arrow-back" size={20} color={'#f04'}/>
          </TouchableOpacity>
          <Voltar onPress={onReturn}>Voltar</Voltar>
        </FormDescription>

      <Title>Adicionar Convidado</Title>

    <FormTeste>

      <Form>
       <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none" // Não adicona letras maisculas
          placeholder="Nome"
          returnKeyType="next" // adiciona um campo de next no teclado
          value={name}
          onChangeText={setName}
          />

          <FormInput
          icon="person-outline"
          placeholder="Sobre Nome"
          value={sobre_nome}
          onChangeText={setSobreNome}
          />


          <SubmitButton onPress={handleSubmit}> Adicionar Convidado</SubmitButton>

          </Form>

          </FormTeste>

      </Container>
    </Background>
  )
}




