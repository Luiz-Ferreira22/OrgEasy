import React from 'react';

import Background from '../../components/Background';

import OptionButton from './OptionButton';

import { Container, Form, Title}  from './styles';

export default function Convidados (){
  return (
    <Background>
      <Container>
        <Form>
          <Title>Meus Convidados</Title>
        </Form>

        <OptionButton />
      </Container>
    </Background>
  )
};
