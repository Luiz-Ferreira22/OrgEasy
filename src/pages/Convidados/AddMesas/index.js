import React, { useState } from 'react';
import {TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import  { Picker } from '@react-native-community/picker';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../../components/Background';

import { signUpMesa } from '../../../store/modules/auth/actions';

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

  } from './styles';

export default function AddConvidados (){

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const lugares = ["4", "6", "8", "10"];

  const [name, setName] = useState('');
  const [cadeiras, setSelectedCadeiras] = useState('');

  // Funcao para alterar dados
  function handleSubmit() {
    dispatch(signUpMesa(
      name,
      cadeiras,
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

      <Title>Adicionar Mesa</Title>

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


        <FormPicker>
          <Picker
            style={{color: '#000'}}
            mode="dropdown"
            selectedValue={cadeiras}
            onValueChange={(itemValue, intemIndex) =>
              setSelectedCadeiras(itemValue)}
            >
            <Picker.Item label="Quantidade de Acentos" value=""/>
            {Object.keys(lugares).map((key) => {
              return (
                <Picker.Item
                label={lugares[key]}
                value={lugares[key]}
                key={key} />)
              })}
            </Picker>
          </FormPicker>

          <SubmitButton onPress={handleSubmit}>Cadastrar Mesa</SubmitButton>

          </Form>


      </Container>
    </Background>
  )
}




