import React from 'react';
import { TouchableOpacity, Linking, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import wpp from '../../../assets/icon/Whatsapp1.png';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Container,
FormVoltar,
FormDescription,
Voltar,
Title,
ScrollView,
FormAvatar,
Avatar,
FormName,
Name,
FormRamo,
Ramo,
FormCel,
Cel,
FormCity,
City,
FormIcon,
Uf,
FormOptions,
ButtonTel,
ButtonWhats,
ButtonFavorite,
Add,
} from './styles'

export default function TipoFornecedor ({route}) {

    const { provider } = route.params;

  const navigation = useNavigation();

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${provider.tel}`);
}

function sendPhone() {
  Linking.openURL(`tel:${provider.tel}`);
}

  const onReturn = () => {
    navigation.goBack();
  };

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
          <Avatar
          source={{
            uri:
            'https://fastcorpbr.com/wp-content/uploads/2019/04/reforma-de-barbearia.jpg'
          }}
          />
          </TouchableOpacity>
        </FormAvatar>

            <FormName>
              <Icon name="domain" size={22} color={'#E0FF00'}/>
              <Name> - {provider.name}</Name>
            </FormName>

        <FormCity>
          <FormIcon>
          <Icon name="place" size={22} color={'#f04'}></Icon>
          </FormIcon>
          <City>- {provider.city}</City>
          <Uf> - {provider.uf}</Uf>
        </FormCity>

        <FormCel>
        <Icon name="call" size={22} color='#0A24F9'></Icon>
        <Cel> - {provider.tel}</Cel>
        </FormCel>

        <FormRamo>
          <Feather name="award" size={22} color='#fff'></Feather>
          <Ramo> - {provider.ramo}</Ramo>
        </FormRamo>

        <FormRamo>
          <FormIcon>
          <Feather name="dollar-sign" size={22} color='#00FF0F'></Feather>
          </FormIcon>
          <Ramo> - Serviço 120,00 </Ramo>
        </FormRamo>

        <FormOptions>
          <ButtonTel
            onPress={sendPhone}>
            <Icon name="call" size={35} color='#0A24F9'></Icon>
            <Add>Ligar</Add>
          </ButtonTel>

          <ButtonWhats
            onPress={sendWhatsapp}>
            <Image source={wpp}
              size={40}
            />
            <Add>Whats</Add>
          </ButtonWhats>

          <ButtonFavorite
            onPress={sendWhatsapp}>
            <Icon name="star" size={35} color='#f04'></Icon>
            <Add>Favoritos</Add>
          </ButtonFavorite>
        </FormOptions>

    </ScrollView>
  </Container>

  )
};


