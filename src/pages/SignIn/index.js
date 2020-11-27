import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/logo.png';

import Background from '../../components/Background';

import { signInRequest } from '../../store/modules/auth/actions';

import {
Container,
Form,
FormInput,
SubmitButton,
SignLink,
SignLinkText
} from './styles';

export default function SignIn ({ navigation }) {

  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 // const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    console.tron.log(email, password);

    dispatch(signInRequest(email, password));

  }

  return (
    <Background >
     <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          icon="mail-outline"
          keyboardType="email-address" // tipo do teclado com @ etc
          autoCorrect={false}
          autoCapitalize="none" // Não adicona letras maisculas
          placeholder="Digite seu E-mail"
          returnKeyType="next" // adiciona um campo de next no teclado
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry // aidicona ponsto no lugar da senha
          placeholder="Digite sua senha"
          ref={passwordRef}
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
          />

          <SubmitButton  onPress={handleSubmit}>Acessar</SubmitButton>

      </Form>

      <SignLink onPress={() => navigation.navigate('SignUp')} >
        <SignLinkText>Criar uma Conta</SignLinkText>
      </SignLink>

      <SignLink  onPress={() => navigation.navigate('RecPassword')} >
        <SignLinkText>Esqueci minha senha</SignLinkText>
      </SignLink>

     </Container>
    </Background>
    );
}

