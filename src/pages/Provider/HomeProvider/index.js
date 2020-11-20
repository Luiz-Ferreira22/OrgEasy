import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import api from '../../../services/api';

import Background from '../../../components/Background';

import {

Container,
FormAvatar,
Button,
Avatar,
FormTitle,
Name,
Description,
Form,
ScrollView,
Image,
FormName,
Empresa,
FormEmpresa,
FormCity,
City,
Uf,
FormCel,
Cel,
FormRamo,
Ramo,
FormIcon,
FormPreco,
Preco,
} from './styles';

export default function HomeProvider () {

  const navigation = useNavigation();

  const [fornecedor, setFornecedor] = useState();

  useEffect(() => {
    async function loadProviders() {

      const response = await api.get('providers');

      setFornecedor(response.data)
    }
    loadProviders();

 },[]);

  return (
  <Background>
    <Container>
      <FormAvatar>
          <Button >
          <Avatar
          source={{
            uri:
            'https://fastcorpbr.com/wp-content/uploads/2019/04/reforma-de-barbearia.jpg'
          }}
          />
          </Button>
          <FormTitle>
          <Name>Luiz - </Name>
          <Description>Fornecedor</Description>
        </FormTitle>
        </FormAvatar>

        <Form>
          <ScrollView
            horizontal={true}
            data={fornecedor}
            keyExtractor={fornecedor => Object(fornecedor.id)}
            renderItem={({ item: fornecedor }) => (
              <Button onPress={() =>
                navigation.navigate('ProviderProfile')} >
              <Image
              source={{
               uri:'https://fastcorpbr.com/wp-content/uploads/2019/04/reforma-de-barbearia.jpg',
              }}
               >
            </Image>

               <FormName>
                 <Icon name="domain" size={20} color={'#E0FF00'}/>
                <Empresa> - {fornecedor.name}</Empresa>
               </FormName>

               <FormCity>
                 <Icon name="place" size={20} color={'#f04'}></Icon>
                <City> - {fornecedor.city}</City>
                  <Uf> - {fornecedor.uf}</Uf>
               </FormCity>

             <FormCel>
               <Icon name="call" size={20} color='#0A24F9'></Icon>
                <Cel> - {fornecedor.tel}</Cel>
             </FormCel>

             <FormRamo>
               <FormIcon>
                 <Feather name="award" size={20} color='#fff'></Feather>
                 </FormIcon>
            <Ramo> - {fornecedor.ramo}</Ramo>
             </FormRamo>

             <FormRamo>
               <FormIcon>
                 <Feather name="dollar-sign" size={22} color='#00FF0F'></Feather>
                 </FormIcon>
               <Ramo> - Serviço 120,00 </Ramo>
             </FormRamo>

             <FormRamo>
               <FormIcon>
                 <Feather name="activity" size={22} color='#00FFEC'></Feather>
                 </FormIcon>
            <Ramo> - CNPJ - {fornecedor.cnpj}</Ramo>
             </FormRamo>

           </Button>
            )}
          >

          </ScrollView>
        </Form>

    </Container>
  </Background>
  );
}

