import React from 'react';
import { useNavigation } from '@react-navigation/native';



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

} from './styles';

export default function HomeProvider () {

  const navigation = useNavigation();

  return (
  <Background>
    <Container>
      <FormAvatar>
          <Button onPress={() =>
                 navigation.navigate("InfoEmpresa")}>
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
              <ListProvider onPress={() =>
                 navigation.navigate('InfoEmpresa')}
                >
                  <FormTitle>
          <Name>Luiz - </Name>
          <Description>Fornecedor</Description>
        </FormTitle>
           </ListProvider>


        </Form>

    </Container>
  </Background>
  );
}

