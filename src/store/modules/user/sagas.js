import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  console.tron.log('UPLOAD', payload);

  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, },
      rest.oldPassword ? rest: {}
    );

    const response = yield call(api.put, 'users', profile);

    console.tron.log('Update Profile Resultado', payload);

    Alert.alert(
      'Sucesso!',
      'Perfil atualizado com secesso',
    );

    yield put(updateProfileSuccess(response.data));

  }catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização, verifique seus dados'
    );
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
]);
