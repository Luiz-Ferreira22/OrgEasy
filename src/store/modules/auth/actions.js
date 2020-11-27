
export function signInRequest(email, password) {
  console.tron.log('SignRequest', email, password);
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password},
  };
}

export function signInSuccess(token, user, provider ) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user, provider},
  };
}

export function signUpRequest(name, email, password, uf, city, tipo_usuario) {
  return {
    type:'@auth/SIGN_UP_REQUEST',
    payload: { name, email, password, uf, city, tipo_usuario },
  };
}

export function signUpEmpresa(name, cnpj, tel, ramo, uf, city) {
  console.tron.log('EMPRESA', name, cnpj, tel, ramo, uf, city);
  return {
    type:'@auth/SIGN_UP_EMPRESA',
    payload: { name, cnpj, tel, ramo, uf, city},
  };
}

export function signUpMesa(name, cadeiras ) {
  console.tron.log('SignUpMesa', name, cadeiras );
  return {
    type:'@auth/SIGN_UP_MESA',
    payload: { name, cadeiras},
  };
}

export function signUpConvidado(name, sobre_nome ) {
  console.tron.log('SignUpConvidado', name, sobre_nome );
  return {
    type:'@auth/SIGN_UP_CONVIDADO',
    payload: { name, sobre_nome},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
