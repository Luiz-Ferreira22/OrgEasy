import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

  // funcao para fazer o login autenticação
export function* signIn({ payload }) {
  try {
    const { email, password, tipo_usuario} = payload;

    const response = yield call(api.post, 'sessions', {
    email,
    password,
    tipo_usuario,
  });

    const { token, user } = response.data;

    const tipoUsuario = user.tipo_usuario;

    const provider = tipoUsuario !== 'Fornecedor' ? true: false;

    console.tron.log('DADOS', user);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user, provider));

  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(signFailure());
  }

}

// funcao para criar um usaurio
export function* signUp({ payload }) {
  try {
    const { name, email, password, uf, city, tipo_usuario } = payload;
      yield call(api.post, 'users', {
      name,
      email,
      password,
      uf,
      city,
      tipo_usuario,
    });

    Alert.alert(
      'Cadastrado com Sucesso',
    );

  }catch (err) {

    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados'
    );
    yield put(signFailure());
  }
}

//Cadastrar empresa
export function* signEmpresa({ payload }) {
  console.tron.log('SignEmpresa', payload);
  try {
    const { name, cnpj, tel, ramo, uf, city } = payload;
     yield call(api.post, 'providers', {
      name,
      cnpj,
      tel,
      ramo,
      uf,
      city,
    });

    Alert.alert(
      'Cadastrado com Sucesso',
    );


  }catch (err) {

    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export function* signMesa({ payload }) {
  console.tron.log('SignMesa', payload);
  try {
    const { name, cadeiras } = payload;
     yield call(api.post, 'mesa', {
      name,
      cadeiras,
    });

    Alert.alert(
      'Cadastrado com Sucesso',
    );


  }catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados'
    );
    yield put(signFailure());
  }
}


export function* signConvidado({ payload }) {
  console.tron.log('SignConvidado', payload);
  try {
    const { name, sobre_nome } = payload;
     yield call(api.post, 'convidados', {
      name,
      sobre_nome,
    });

    Alert.alert(
      'Cadastrado com Sucesso',
    );


  }catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }){
  if(!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn), // chama uma funcao toda vez que ouvir
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_UP_EMPRESA', signEmpresa),
  takeLatest('@auth/SIGN_UP_MESA', signMesa),
  takeLatest('@auth/SIGN_UP_CONVIDADO', signConvidado),



]);


