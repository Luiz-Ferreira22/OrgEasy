import React, { useState, useEffect } from 'react';
import {TouchableOpacity, Image, Linking } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import wpp from '../../../assets/icon/Whatsapp1.png';

import Background from '../../../components/Background';
import api from '../../../services/api';


import {
  Container,
  Form,
  Title,
  FormList,
  ScrollView,
  Button,
  Name,
  FormName,
  Desc,
  FormDesc,
  FormDescription,
  Voltar,
  ButtonWhats,
  Add,
  FormWhats,

  }  from './styles';

export default function ListaConvidados ({route}){

  const { mesa } = route.params;

  const navigation = useNavigation();

  const [convidados, setConvidado] = useState([]);

  useEffect(() => {
    async function loadMesa() {

      const response = await api.get('convidados');

      setConvidado(response.data);

    }

    loadMesa();

 },[]);

  const onReturn = () => {
  navigation.goBack();
  };

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=''`);
}

  return (
    <Background>
      <Container>

      <FormDescription>
          <TouchableOpacity onPress={onReturn}>
            <Icon name="arrow-back" size={20} color={'#f04'}/>
          </TouchableOpacity>
          <Voltar onPress={onReturn}>Voltar</Voltar>
        </FormDescription>

        <Form>
          <Title>Meus Convidados</Title>
        </Form>

          <FormList>
            <ScrollView
            data={convidados}
            keyExtractor={convidado => Object(convidado.id)}
            renderItem={({ item: convidado }) => (
              <Button >
                <FormName>
                <Name> {convidado.name}</Name>
                <Desc> {convidado.sobre_nome} </Desc>
               </FormName>


                <FormDesc>
                  <Desc> Mesa - {mesa.name}</Desc>
                </FormDesc>

              <FormWhats>

               <ButtonWhats
                 onPress={sendWhatsapp}>
                  <Image source={wpp}
                 size={10}
                 />

                </ButtonWhats>
                 </FormWhats>

              </Button>
              )}
            >
            </ScrollView>
          </FormList>

      </Container>
    </Background>
  )
};


