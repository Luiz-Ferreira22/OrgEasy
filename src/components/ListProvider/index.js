import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Avatar, FormSelect, FormName, FormCity, FormPreco, Preco, Qtd, Name, Bio, Description, City  } from './styles';

export default function ListProvider ({ data }) {

  const navigation = useNavigation();

  return (
    <Container>
      <Logo>
        <TouchableOpacity
        onPress={() => navigation.navigate('PerfilFornecedor')}
        >


        </TouchableOpacity>
      </Logo>


        <FormSelect>
          <TouchableOpacity>
            <Icon name="favorite" size={30} color={'#f04'}/>
          </TouchableOpacity>
        </FormSelect>

        <FormName>
          <Name>{data.name}</Name>
        </FormName>

        <FormCity>
          <City>{data.ramo}</City>
        </FormCity>

        <FormPreco>
          <Preco>
            A Partir de R$: 200,00
          </Preco>
        </FormPreco>

        <Bio>
          <Description>
            Noosa Empresa começou a carreira musical em 2007.
            Desde então nossa missão é fazer com que sua festa
            seja a melhor de todas.

          </Description>
        </Bio>

    </Container>
  );
}

