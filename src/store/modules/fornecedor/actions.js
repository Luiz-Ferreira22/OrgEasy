export function updateProfileRequest(data) {
  console.tron.log('Update Profile Receber dados', data);

  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  console.tron.log('Update Profile Retorna os dados', profile);
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  console.tron.log('Updat Erro nos dados');

  return {
    type: '@user/UPDATE_PROFILE_RESQUEST',
  };
}
