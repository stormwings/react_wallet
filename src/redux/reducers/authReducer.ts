import * as types from '../types';

const INITIAL_STATE = {
  loading: false,
  message: '' as string,
  error: '' as string,
  key: '' as string
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.AUTH_LOGIN: {
      const { data: key } = action.payload;

      return {
        ...state,
        key,
        error: '',
        message: 'Successful authentication',
        loading: false
      };
    }
    case types.AUTH_LOADING: {
      return { ...state, loading: true, message: '', error: '' };
    }
    case types.AUTH_CLEAN: {
      const { detail } = action.payload;
      return { ...INITIAL_STATE, message: detail, error: '', loading: false };
    }
    case types.AUTH_ERROR: {
      const message = action.payload;
      return { ...state, error: `User already exists or incorrect credentials - ${message}`, message: '', loading: false };
    }

    default:
      return state;
  }
}
