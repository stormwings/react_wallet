import Axios from 'axios';
import { buildTokenHeader } from './../../helpers/functions';

export const loadWallet = (payload: object) => ({ type: 'WALLET_LOAD', payload });
export const updateWallet = (payload: object) => ({ type: 'WALLET_UPDATE', payload });
export const errorWallet = (payload: object) => ({ type: 'WALLET_ERROR', payload });
export const walletLoading = () => ({ type: 'WALLET_LOADING' });

export const fetchWallet = (userId: number) => async (dispatch: any) => {
  dispatch(walletLoading());
  try {
    const headers = buildTokenHeader();

    const wallet = await Axios.get(`http://localhost:8000/wallet/${userId}/`, { headers });
    const tradings = await Axios.get('http://localhost:8000/trading/', { headers });
    const operations = await Axios.get('http://localhost:8000/operation/', { headers });

    await dispatch(loadWallet({ wallet, operations, tradings }));
  } catch (error) {
    const { message } = error;
    dispatch(errorWallet({ message_error: message }));
  }
};

export const updateCurrency = (userId: string, body: any) => async (dispatch: any) => {
  try {
    const headers = buildTokenHeader();

    const { data } = await Axios.put(`http://localhost:8000/wallet/${userId}/`, body, { headers });
    dispatch(updateWallet(data));
  } catch (error) {
    const { message } = error;
    dispatch(errorWallet({ message_error: message }));
  }
};

export const createOperation = (body: any) => async (dispatch: any) => {
  try {
    const headers = buildTokenHeader();

    // request
    await Axios.post(`http://localhost:8000/operation/`, body, { headers });
  } catch (error) {
    console.warn(error.config, error.code, error.request, error.response, error.isAxiosError);
    const { message } = error;
    dispatch(errorWallet({ message_error: message }));
  }
};

export const createTrading = (body: any) => async (dispatch: any) => {
  try {
    const headers = buildTokenHeader();

    // request
    await Axios.post(`http://localhost:8000/trading/`, body, { headers });
  } catch (error) {
    console.warn(error.config, error.code, error.request, error.response, error.isAxiosError);
    const { message } = error;
    dispatch(errorWallet({ message_error: message }));
  }
};

export const removeTrading = (tradingId: number) => async (dispatch: any) => {
  try {
    const headers = buildTokenHeader();
    await Axios.delete(`http://localhost:8000/trading/${tradingId}/`, { headers });
  } catch (error) {
    console.warn(error.config, error.code, error.request, error.response, error.isAxiosError);
    const { message } = error;
    dispatch(errorWallet({ message_error: message }));
  }
};

export const updatePublisherCurrency = (publisherId: any, publisherMoney: any) => async (dispatch: any) => {
  try {
    const headers = buildTokenHeader();

    let {
      data: { USD }
    } = await Axios.get(`http://localhost:8000/wallet/${publisherId}/`, { headers });
    USD += publisherMoney;
    await Axios.put(`http://localhost:8000/wallet/${publisherId}/`, { USD }, { headers });
  } catch (error) {
    console.warn(error.config, error.code, error.request, error.response, error.isAxiosError);
    const { message } = error;
    dispatch(errorWallet({ message_error: message }));
  }
};
