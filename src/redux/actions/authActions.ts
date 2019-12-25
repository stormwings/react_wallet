import Axios, { AxiosResponse, AxiosError } from 'axios';
import { Dispatch } from 'redux';
import * as urls from './../../helpers/api';
import * as types from './../types';

export const authLogin = (payload: object) => ({ type: types.AUTH_LOGIN, payload });
export const authRegister = (payload: object) => ({ type: types.AUTH_REGISTER, payload });
export const authClean = (payload: object) => ({ type: types.AUTH_CLEAN, payload });
export const authLoading = (payload: boolean) => ({ type: types.AUTH_LOADING, payload });
export const authError = (payload: string) => ({ type: types.AUTH_ERROR, payload });

export const authSignIn = (body: object) => (dispatch: Dispatch) => {
  dispatch(authLoading(true));

  Axios.post(urls.URL_SIGNIN, body, { withCredentials: true })
    .then(({ data }: AxiosResponse) => dispatch(authLogin({ data })))
    .catch(({ message }: AxiosError) => dispatch(authError(message)));
};

export const authSignUp = (body: object) => (dispatch: Dispatch) => {
  dispatch(authLoading(true));

  Axios.post(urls.URL_SIGNUP, body, { withCredentials: true })
    .then(({ data }: AxiosResponse) => dispatch(authLogin({ data })))
    .catch(({ message }: AxiosError) => dispatch(authError(message)));
};

export const authSignOut = () => (dispatch: any) => {
  dispatch(authLoading(true));

  Axios.post(urls.URL_LOGOUT, { withCredentials: true })
    .then(({ data }: AxiosResponse) => dispatch(authClean(data)))
    .catch(({ message }: AxiosError) => dispatch(authError(message)));
};
