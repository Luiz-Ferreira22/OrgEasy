import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import  { Picker } from '@react-native-community/picker';

import Background from '../../../components/Background';

import { signUpEmpresa } from '../../../store/modules/auth/actions';

import {
  Container,
  Form,
  Title,
  FormInput,
  SubmitButton,
  FormPicker,

  } from './styles';

export default function AddConvidados (){

  const dispatch = useDispatch();

  const tipo = ['Confirmado', 'Nao Confirmado'];

  const [name, setName] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [tel, setTelefone] = useState('');
  const [confirma, setConfirma] = useState('');

  const [selectedConf, setSelectedConf] = useState('');

  // Funcao para alterar dados
  function handleSubmit() {
    dispatch(signUpEmpresa(
      name,
      sobreNome,
      tel,
      confirma,
      ));
  };

  return (
    <Background>
      <Container >

      <Title>Cadastrar Mesa</Title>

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
          icon="lock-outline"
          placeholder="Sobre Nome"
          value={sobreNome}
          onChangeText={setSobreNome}
          />

          <FormInput
          icon="call"
          placeholder="Telefone"
          value={tel}
          onChangeText={setTelefone}
          />

        <FormPicker>
          <Picker
            style={{color: '#000'}}
            mode="dropdown"
            selectedValue={selectedConf}
            onValueChange={(itemValue, intemIndex) =>
              setSeletedRamo(itemValue)}
            >
            <Picker.Item label="Cofirmar Presença" value=""/>
            {Object.keys(tipo).map((key) => {
              return (
                <Picker.Item
                label={tipo[key]}
                value={tipo[key]}
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




