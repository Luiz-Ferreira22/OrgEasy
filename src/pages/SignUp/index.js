import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import  { Picker } from '@react-native-community/picker';
import { useDispatch , useSelector} from 'react-redux';

import axios from 'axios';

import logo from '../../assets/logo.png';

import Background from '../../components/Background';
import { signUpRequest } from '../../store/modules/auth/actions';


import {
Container,
Form,
FormInput,
SubmitButton,
SignLink,
SignLinkText,
FormPicker,
FormPickerUf,
FormPickerCity,
ViewPicker,
} from './styles';

export default function SignIn ({ navigation }) {

  const dispatch = useDispatch();
  const users = ["Noivos", "Cerimonialista", "Fornecedor"];

  const [ufs, setUfs] = useState(['']);
  const [citys, setCitys] = useState(['']);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [selectedUf, setSelectedUf] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedUsuario, setSelectedUsuario] = useState('');

  const loading = useSelector(state => state.auth.loading);

  const payload = useSelector(state => state.auth.paylaod);



  // pega todas as uf da api ibge
  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
    .then(response => {
      const ufNames = response.data.map(uf => uf.sigla);

      setUfs(ufNames);

    });
  }, []);

  useEffect(() => {
    // carregar as cidades toda vez que selecionar uma uf
    if(selectedUf === '0') {
      return;
    }

    axios.get
    (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
    .then(response => {
      const citysNames = response.data.map(citys => citys.nome);

      setCitys(citysNames);

    });
  }, [selectedUf]);

  function handleSubmit() {
    dispatch(signUpRequest(
      name,
      email,
      password,
      selectedUf,
      selectedCity,
      selectedUsuario,
      ));
  };

  useEffect(() => {
      setName(''),
      setEmail(''),
      setPassword(''),
      setSelectedUf(''),
      setSelectedCity(''),
      setSelectedUsuario('')
  }, [payload]);

  return (
    <Background >
     <Container>

      <Image source={logo} />

      <Form>
      <FormInput
          icon="person-outline"
          autoCorrect={false}
          //autoCapitalize="none" // Não adicona letras maisculas
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}

        />

        <FormInput
          icon="mail-outline"
          keyboardType="email-address" // tipo do teclado com @ etc
          autoCorrect={false}
          autoCapitalize="none" // Não adicona letras maisculas
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}

        />

        <FormInput
          icon="lock-outline"
          secureTextEntry // aidicona ponsto no lugar da senha
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          />

        <ViewPicker>
        <FormPickerUf>
          <Picker
            style={{color: '#000'}}
            mode="dropdown"
            selectedValue={selectedUf}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedUf(itemValue)}
              >
              <Picker.Item label="UF"/>
            {Object.keys(ufs).map((key) => {
              return (
                <Picker.Item
                label={ufs[key]}
                value={ufs[key]}
                key={key}/>)
               })}
          </Picker>
        </FormPickerUf>

        <FormPickerCity>
        <Picker
            style={{color: '#000'}}
            mode="dropdown"
            selectedValue={selectedCity}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedCity(itemValue)}
              >
              <Picker.Item label="Cidade"/>
            {Object.keys(citys).map((key) => {
              return (
                <Picker.Item
                label={citys[key]}
                value={citys[key]}
                key={key} />)
               })}
          </Picker>
        </FormPickerCity>
        </ViewPicker>


          <FormPicker>
          <Picker
            style={{color: '#000'}}
            mode="dropdown"
            selectedValue={selectedUsuario}
            onValueChange={(itemValue, intemIndex) =>
            setSelectedUsuario(itemValue)}
            >
            <Picker.Item label="Selecione" value=""/>
            {Object.keys(users).map((key) => {
              return (
                <Picker.Item
                label={users[key]}
                value={users[key]}
                key={key} />)
               })}
            </Picker>
          </FormPicker>



        <SubmitButton loading={loading} onPress={handleSubmit}>Cadastrar</SubmitButton>

      </Form>

      <SignLink onPress={() => navigation.navigate('SignIn')} >
        <SignLinkText>Ja possui conta</SignLinkText>
      </SignLink>

     </Container>
    </Background>
    );
}

