import * as types from '../types';

const INITIAL_STATE = {
  loading: false,
  user: {},
  request_status: {
    message_result: null,
    result: false
  } as any
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.AUTH_ERROR: {
      const { message_result } = action.payload;
      return { ...state, error: message_result, loading: false };
    }
    case types.AUTH_LOADING: {
      return { ...state, loading: true };
    }
    case types.AUTH_SIGNIN: {
      const {
        data: { user },
        message_result,
        success
      } = action.payload;

      return {
        ...state,
        user,
        loading: false,
        request_status: {
          ...state.request_status,
          message_result,
          result: success
        }
      };
    }
    case types.AUTH_LOGOUT: {
      return { ...INITIAL_STATE };
    }
    default:
      return state;
  }
}
