import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import  { Picker } from '@react-native-community/picker';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';

import ProviderAvatar from '../../../components/ProviderAvatar';

import { useNavigation } from '@react-navigation/native';

import { Container,
FormVoltar,
FormDescription,
Voltar,
Title,
ScrollView,
FormAvatar,
FormInput,
Form,
FormPicker,
SubmitButton,

} from './styles'

export default function InfoEmpresa ({route}) {

  const navigation = useNavigation();

  const { fornecedor } = route.params;

  const [file, setFile] = useState('');

  const ramo = ["Buffet", "Automoveis", "Hoteis"];

  const [name, setName] = useState('');
  const [tel, setTelefone] = useState('');
  const [selectedRamo, setSeletedRamo] = useState('');



  const onReturn = () => {
    navigation.goBack();
  };


  useEffect(() => {
    async function loadFile() {

      const response = await api.get('users');
      setFile(response.data);
    }
    loadFile();

 },[file]);

  return (
    <Container>

      <FormVoltar>
        <FormDescription>
          <TouchableOpacity onPress={onReturn}>
            <Icon name="arrow-back" size={20} color={'#f04'}/>
          </TouchableOpacity>
          <Voltar onPress={onReturn}>Voltar</Voltar>
        </FormDescription>
      </FormVoltar>

        <Title>Perfil Fornecedor</Title>

      <ScrollView>
        <FormAvatar>
          <TouchableOpacity >
          <ProviderAvatar />
          </TouchableOpacity>
        </FormAvatar>

        <Form>
       <FormInput
          icon="domain"
          autoCorrect={false}
          placeholder={fornecedor.name}
          returnKeyType="next" // adiciona um campo de next no teclado
          value={name}
          onChangeText={setName}
        />

          <FormInput
          icon="call"
          placeholder={fornecedor.tel}
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
            <Picker.Item label={fornecedor.ramo} value=""/>
            {Object.keys(ramo).map((key) => {
              return (
                <Picker.Item
                label={ramo[key]}
                value={ramo[key]}
                key={key} />)
              })}
            </Picker>
          </FormPicker>

          <SubmitButton >Atualizar Dados </SubmitButton>
          <SubmitButton >Excluir Empresa</SubmitButton>

          </Form>

    </ScrollView>
  </Container>

  )
};


