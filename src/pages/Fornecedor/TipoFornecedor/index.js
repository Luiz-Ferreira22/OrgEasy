import React, {useState, useEffect} from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import api from '../../../services/api';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Container,
FormDescription,
Voltar,
Title,
Search,
FormSearch,
List,
FormList,
FomrIcon,
ListProvider,
Avatar,
FormName,
Empresa,
FormCity,
City,
Uf,
FormRamo,
Ramo,
FormIcon,
FormPreco,
Preco,
Bio,
Description,
} from './styles'

export default function TipoFornecedor () {

  const navigation = useNavigation();
  const { params } = useRoute();
  const [providers, setProviders] = useState([]);
  const [buscaCity, setBuscaCity] = useState([]);

  useEffect(() => {
    if(params) {
      const {ramo} = params;

      api.get('listaproviders').then(response => {

        const {data} = response;

        const listRamos = data.filter(item => item.ramo === ramo);

        setProviders(listRamos);
      })
    }
  },
   []);


   useEffect(() => {
      async function laodCity() {

        const response = await api.get('buscacidade');

        setBuscaCity(response.data)
      }
      laodCity();


   },[]);


  const onReturn = () => {
    navigation.goBack();
  };

  return (
      <Container>

        <FormDescription>
          <TouchableOpacity onPress={onReturn}>
            <Icon name="arrow-back" size={20} color={'#f04'}/>
          </TouchableOpacity>
          <Voltar onPress={onReturn}>Voltar</Voltar>
        </FormDescription>

          <Title>Fornecedores</Title>
        <FormSearch>
          <FomrIcon>
            <Icon name="location-on" size={20} color={'#F04'}/>
          </FomrIcon>

          <Search
            placeholder="Pesquisar nova cidade"
            onChangeText={setBuscaCity}
            >
          </Search>
        </FormSearch>

        <FormList>
          <List
            data={buscaCity}
            keyExtractor={provider => Object(provider.id)}
            renderItem={({ item: provider }) => (
              <ListProvider onPress={() =>
                navigation.navigate('PerfilFornecedor', {provider})}
              >
              <Avatar
             source={{
              uri:'https://fastcorpbr.com/wp-content/uploads/2019/04/reforma-de-barbearia.jpg',
             }}
            />

           <FormName>
              <Icon name="domain" size={20} color={'#E0FF00'}/>
            <Empresa>{provider.name}</Empresa>
            </FormName>

            <FormCity>
              <Icon name="place" size={20} color={'#f04'}></Icon>
              <City> - {provider.city}</City>
                <Uf> - {provider.uf}</Uf>
            </FormCity>

            <FormRamo>
               <FormIcon>
                 <Feather name="award" size={20} color='#fff'></Feather>
                 </FormIcon>
              <Ramo> - {provider.ramo}</Ramo>
            </FormRamo>
            </ListProvider>
              )}
            />
          </FormList>

      </Container>

    )
};


