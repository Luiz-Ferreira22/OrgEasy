import React, {useState, useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import api from '../../../services/api';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Container,
FormDescription,
Voltar,
Title,
Search,
FormPicker,
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

  const { params } = useRoute();

  const navigation = useNavigation();

  const [providersAll, setProvidersAll] = useState([]);

  const [providers, setProviders] = useState([]);
  const [buscaCity, setBuscaCity] = useState([]);

  const [cityList, setCityList] = useState([]);
  const [currentCity, setCurrentCity] = useState([]);

  useEffect(() => {

    const ListProviders = providersAll.filter(item => item.city === currentCity);
    console.log(currentCity);

    setProviders(ListProviders);

  },[currentCity]);

  useEffect(() => {
    if(params) {
      const {ramo} = params;

      api.get('listaproviders').then(response => {

        const {data} = response;

        const listRamos = data.filter(item => item.ramo === ramo);

        setProviders(listRamos);
      })

      api.get('providers').then(response => {
        const { data } = response;

        const listCityAll = data.map(item => item.city);

        const listCity = listCityAll.filter((city, index, self ) => {

          return self.indexOf(city) == index;
        })

        setProvidersAll(data);
        setCityList(listCity);
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

         <FormPicker>
          <Picker
            style={{color: '#fff'}}
            mode="dropdown"
            selectedValue={currentCity}
            onValueChange={itemValue => setCurrentCity(itemValue)}
          >
            <Picker.Item label="Busca por Cidade" />
            {cityList.map((nameCity) =>(
              <Picker.item
              label={nameCity}
              value={nameCity}
              key={nameCity}
              />
            ))}
          </Picker>
     </FormPicker>

        <FormList>
          <List
            data={providers}
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
            <Empresa> - {provider.name}</Empresa>
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


