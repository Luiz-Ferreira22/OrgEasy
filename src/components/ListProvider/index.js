import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Avatar, FormSelect, FormName, FormCity, Name, Bio, Description,  } from './styles';

export default function ListProvider () {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo>
        <TouchableOpacity
        onPress={() => navigation.navigate('PerfilFornecedor')}
        >
          <Avatar
          source={{
            uri:
            'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000ldanaMAA/57a87e9be4b00dab3a056b14.jpg&w=710&h=462&f=webp',
            }}
          />
        </TouchableOpacity>
      </Logo>


        <FormSelect>
          <TouchableOpacity>
            <Icon name="favorite" size={30} color={'#f04'}/>
          </TouchableOpacity>
        </FormSelect>

        <FormName>
          <Name> Luiz Ferreira - DJ  </Name>
        </FormName>

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

