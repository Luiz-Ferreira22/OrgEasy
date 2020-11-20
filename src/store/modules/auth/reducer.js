import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: null,
  loading: false,
  tipoUsuario: '',
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {

    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
      draft.token = action.payload.token;

      draft.provider = action.payload.provider;
      draft.signed = true,
      draft.loading = false;
      break;
      }
      case '@auth/SIGN_IN_FAILURE': {
      draft.loading = false;
      break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        draft.provider = false;
        break;
      }
  default:
   }
  });
}
