import React from 'react';
import { Alert } from 'react-native';

import {
  Container,
  Form,
  SubmitButton,
  } from './styles';

// import { Container } from './styles';

export default function RecPassword () {

  function handleSubmit() {

  }



  return (
    <Container>
      <Form >
        <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
      </Form>
    </Container>
  )
}
