import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { Picker } from '@react-native-community/picker';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

import Background from '../../../components/Background';

import { signUpEmpresa } from '../../../store/modules/auth/actions';

import {
  Container,
  Form,
  Title,
  FormInput,
  SubmitButton,
  FormPicker,
  ViewPicker,
  FormPickerUf,
  FormPickerCity
  } from './styles';

export default function EmpresaProvider (){

  const profile = useSelector(state => state.user.profile);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const ramo = ["Buffet", "Automoveis", "Hoteis"];

  const [ufs, setUfs] = useState(['']);
  const [citys, setCitys] = useState(['']);

  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [tel, setTelefone] = useState('');


  const [selectedRamo, setSeletedRamo] = useState('');
  const [selectedUf, setSelectedUf] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

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

  // Funcao para alterar dados
  function handleSubmit() {
    dispatch(signUpEmpresa(
      name,
      cnpj,
      tel,
      selectedRamo,
      selectedUf,
      selectedCity
      ));
  };

  useEffect(() => {
    setName(''),
    setCnpj(''),
    setTelefone(''),
    setSeletedRamo(''),
    setSelectedUf(''),
    setSelectedCity('')
}, [profile]);



  return (
    <Background>
      <Container >

      <Title>Cadastrar Empresa</Title>

      <Form>
       <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none" // Não adicona letras maisculas
          placeholder="Nome da Empresa"
          returnKeyType="next" // adiciona um campo de next no teclado
          value={name}
          onChangeText={setName}
        />

          <FormInput
          icon="lock-outline"
          placeholder="CNPJ"
          value={cnpj}
          onChangeText={setCnpj}
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
            selectedValue={selectedRamo}
            onValueChange={(itemValue, intemIndex) =>
              setSeletedRamo(itemValue)}
            >
            <Picker.Item label="Ramo de atividade" value=""/>
            {Object.keys(ramo).map((key) => {
              return (
                <Picker.Item
                label={ramo[key]}
                value={ramo[key]}
                key={key} />)
              })}
            </Picker>
          </FormPicker>

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

          <SubmitButton onPress={handleSubmit}>Cadastrar Empresa</SubmitButton>

          </Form>


      </Container>
    </Background>
  )
}




