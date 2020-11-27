import React, {useEffect, useState} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import api from '../../../services/api';

import ProviderAvatar from '../../../components/ProviderAvatar';
import Background from '../../../components/Background';



import {
Container,
FormAvatar,
Button,
ListProvider,
Avatar,
FormTitle,
Name,
Description,
Form,
ScrollView,
Image,
FormName,
Empresa,
FormCity,
City,
Uf,
FormCel,
Cel,
FormRamo,
Ramo,
FormIcon,
} from './styles';

export default function HomeProvider () {

const profile = useSelector(state => state.user.profile);

  const navigation = useNavigation();

  const { params } = useRoute();

  const [file, setFile] = useState('');

  const [fornecedor, setFornecedor] = useState();

  useEffect(() => {
    async function loadProviders() {

      const response = await api.get('providers');

      setFornecedor(response.data)
    }
    loadProviders();

 },[fornecedor]);


 useEffect(() => {
   async function loadFile() {

     const response = await api.get('users');
     setFile(response.data);
   }
   loadFile();

},[file]);

  return (
  <Background>
    <Container>
      <FormAvatar>
          <Button>
          <Avatar
          source={{
                uri: file
                ? file.avatar.url :
               'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fmonicamuhlbauer%2Flogo-fotografia%2F&psig=AOvVaw1HrhjvOteY7jyo_awALPFY&ust=1606448836588000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDNs7qmn-0CFQAAAAAdAAAAABAQ',
              }}
          />
          </Button>
          <FormTitle>
          <Name>{profile.name} - </Name>
            <Description>{profile.tipo_usuario}</Description>
        </FormTitle>
        </FormAvatar>

        <Form>
          <ScrollView
            horizontal={true}
            data={fornecedor}
            keyExtractor={fornecedor => Object(fornecedor.id)}
            renderItem={({ item: fornecedor }) => (
              <Button onPress={() =>
                navigation.navigate('InfoEmpresa', {fornecedor})} >
              <Image
               source={{
                uri:
               'https://fastcorpbr.com/wp-content/uploads/2019/04/reforma-de-barbearia.jpg',
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

