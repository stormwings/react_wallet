import Axios, { AxiosResponse, AxiosError } from 'axios';
import { Dispatch } from 'redux';
import * as urls from './../../helpers/api';
import * as types from './../types';
import { buildTokenHeader } from './../../helpers/functions';

export const authLogin = (payload: object) => ({ type: types.AUTH_LOGIN, payload });
export const authRegister = (payload: object) => ({ type: types.AUTH_REGISTER, payload });
export const authClean = (payload: object) => ({ type: types.AUTH_CLEAN, payload });
export const setProfile = (payload: object) => ({ type: types.AUTH_PROFILE, payload });
export const authLoading = (payload: boolean) => ({ type: types.AUTH_LOADING, payload });
export const authError = (payload: object) => ({ type: types.AUTH_ERROR, payload });
export const authClearErrors = () => ({ type: types.AUTH_CLEAR_ERRORS });

export const authSignIn = (body: object) => (dispatch: Dispatch) => {
  dispatch(authLoading(true));

  Axios.post(urls.URL_SIGNIN, body, { withCredentials: true })
    .then(({ data }: AxiosResponse) => dispatch(authLogin({ data })))
    .catch((response: AxiosError) => {
      dispatch(authError({ errors: handlerError(response) }));
    });
};

export const authSignUp = (body: object) => (dispatch: Dispatch) => {
  dispatch(authLoading(true));

  Axios.post(urls.URL_SIGNUP, body, { withCredentials: true })
    .then(({ data }: AxiosResponse) => dispatch(authLogin({ data })))
    .catch((response: AxiosError) => {
      dispatch(authError({ errors: handlerError(response) }));
    });
};

export const authSignOut = () => (dispatch: any) => {
  dispatch(authLoading(true));

  Axios.post(urls.URL_LOGOUT, { withCredentials: true })
    .then(({ data }: AxiosResponse) => dispatch(authClean(data)))
    .catch((response: AxiosError) => {
      dispatch(authError({ errors: handlerError(response) }));
    });
};

export const getProfile = (userId: string) => (dispatch: Dispatch) => {
  dispatch(authLoading(true));
  const headers = buildTokenHeader();

  Axios.get(urls.URL_PROFILE(userId), { headers })
    .then(({ data }: AxiosResponse) => dispatch(setProfile(data)))
    .catch((response: AxiosError) => {
      dispatch(authError({ errors: handlerError(response) }));
    });
};

export const saveProfile = (body: object, userId: string) => (dispatch: Dispatch) => {
  dispatch(authLoading(true));
  const headers = buildTokenHeader();

  Axios.put(urls.URL_PROFILE(userId), { ...body, wallet: userId }, { headers })
    .then(({ data }: AxiosResponse) => dispatch(setProfile(data)))
    .catch((response: AxiosError) => {
      dispatch(authError({ errors: handlerError(response) }));
    });
};

const handlerError = (response: AxiosError) => {
  const errorResponse = response.response?.data;
  let errorArray: any = [];
  for (const [key, value] of Object.entries(errorResponse) as any) {
    console.error(`Error in "${key}": ${value}`);
    errorArray = [...errorArray, ...value];
  }
  return errorArray;
};
