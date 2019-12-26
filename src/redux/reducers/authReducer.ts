import * as types from './../types';

const INITIAL_STATE = {
  loading: false,
  message: '' as string,
  key: '' as string,
  user_id: '' as string,
  errors: null as any,
  profile: {} as any
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.AUTH_LOGIN: {
      const {
        data: { key, user }
      } = action.payload;

      return {
        ...state,
        key,
        user_id: user,
        errors: null,
        message: 'Successful authentication',
        loading: false
      };
    }
    case types.AUTH_LOADING: {
      return { ...state, loading: true, message: '', errors: null };
    }
    case types.AUTH_PROFILE: {
      const profile = action.payload;
      return { ...state, loading: true, message: '', errors: null, profile };
    }
    case types.AUTH_CLEAN: {
      const { detail } = action.payload;
      return { ...INITIAL_STATE, message: detail, errors: null, loading: false };
    }
    case types.AUTH_ERROR: {
      const { errors } = action.payload;
      return { ...state, errors, message: '', loading: false };
    }

    default:
      return state;
  }
}
