import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';



import {
  Container,
  Title,
  Separator,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
  } from './styles';

export default function Profile (){

  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  // Limpas campos apos alterar dados
  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  // Funcao para alterar dados
  function handleSubmit() {
    dispatch(
      updateProfileRequest({
      name,
      email,
      password,
      oldPassword,
      confirmPassword,
      })
    );
  };

  // Função para deslogar
  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container >
        <Title>Meu Perfil</Title>

       <Form>
       <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none" // Não adicona letras maisculas
          placeholder="Nome"
          returnKeyType="next" // adiciona um campo de next no teclado
          value={name}
          onChangeText={setName}
        />

        <FormInput
          icon="mail-outline"
          keyboardType="email-address" // tipo do teclado com @ etc
          autoCorrect={false}
          autoCapitalize="none" // Não adicona letras maisculas
          placeholder="Email"
          returnKeyType="next" // adiciona um campo de next no teclado
          value={email}
          onChangeText={setEmail}
        />

        <Separator />

          <FormInput
          icon="lock-outline"
          secureTextEntry // aidicona ponsto no lugar da senha
          placeholder="Senha Atual"
          value={oldPassword}
          onChangeText={setOldPassword}
          />

          <FormInput
          icon="lock-outline"
          secureTextEntry // aidicona ponsto no lugar da senha
          placeholder="Nova Senha"
          value={password}
          onChangeText={setPassword}
          />

        <FormInput
          icon="lock-outline"
          secureTextEntry // aidicona ponsto no lugar da senha
          placeholder="Confirmação de senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          />

        <SubmitButton onPress={handleSubmit}>Atualizar Perfil</SubmitButton>
        <LogoutButton onPress={handleLogout}>Sair do OrgEasy</LogoutButton>

        </Form>
      </Container>
    </Background>
  )
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
    )
  };



