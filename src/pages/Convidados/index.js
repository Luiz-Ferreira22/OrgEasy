import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import Background from '../../components/Background';
import api from '../../services/api';

import OptionButton from './OptionButton';

import {
  Container,
  Form,
  Title,
  FormList,
  ScrollView,
  Button,
  Name,
  FormName,
  IconDesc,


  }  from './styles';

export default function Convidados (){

  const navigation = useNavigation();
  const [mesas, setMesa] = useState();

  useEffect(() => {
    async function loadMesa() {

      const response = await api.get('mesa');

      setMesa(response.data);
    }
    loadMesa();

 },[]);

  return (
    <Background>
      <Container>

        <Form>
          <Title>Meus Convidados</Title>
        </Form>

        <OptionButton />

          <FormList>
            <ScrollView
            data={mesas}
            keyExtractor={mesa => Object(mesa.id)}
            renderItem={({ item: mesa }) => (
              <Button onPress={() =>
                navigation.navigate('ListaConvidados', {mesa})}>
                <FormName>
                  <IconDesc>
                    <Feather name="hash" size={16} color={'#f04'}/>
                  </IconDesc>
                <Name> - Mesa {mesa.name}</Name>
                <Name> - {mesa.cadeiras} Cadeiras </Name>

               </FormName>
              </Button>
              )}
            >

            </ScrollView>
          </FormList>

      </Container>
    </Background>
  )
};
