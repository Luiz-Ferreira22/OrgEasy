import React, {useState, useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../../services/api';

import { useNavigation } from '@react-navigation/native';

import ListProvider from '../../../components/ListProvider';

import { Container,
Title,
Search,
FormSearch,
List,
FormList,
FomrIcon
} from './styles'

export default function TipoFornecedor () {

  const navigation = useNavigation();
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');

      setProviders(response.data);
    }

    loadProviders();

  }, []);

  const onReturn = () => {
    navigation.goBack();
  };

  return (
      <Container>

        <TouchableOpacity onPress={onReturn}>
          <Icon name="arrow-back" size={30} color={'#f04'}/>
        </TouchableOpacity>

          <Title>Fornecedores</Title>
        <FormSearch>
          <FomrIcon>
            <Icon name="location-on" size={20} color={'#F04'}/>
          </FomrIcon>

          <Search
            placeholder="Pesquisar nova cidade"
            >
          </Search>
        </FormSearch>

        <FormList>
          <List
            data={providers}
            keyExtractor={item => String(item)}
            renderItem={({ item }) =>
            <ListProvider data={item}
            />
            }
          />
          </FormList>
      </Container>

    )
};


