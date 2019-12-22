import Axios from 'axios';

export const loadWallet = (payload: object) => ({ type: 'WALLET_LOAD', payload });
export const updateWallet = (payload: object) => ({ type: 'WALLET_UPDATE', payload });
export const errorWallet = (payload: object) => ({ type: 'WALLET_ERROR', payload });
export const walletLoading = () => ({ type: 'WALLET_LOADING' });

export const fetchWallet = () => async (dispatch: any) => {
  dispatch(walletLoading());
  try {
    const {
      data: { currency, operations, userId, tradings }
    } = await Axios.get('http://localhost:3001/wallet');

    dispatch(loadWallet({ currency, operations, userId, tradings }));
  } catch (error) {
    const { message } = error;
    dispatch(errorWallet({ message_error: message }));
  }
};

export const putWallet = (wallet: any) => async (dispatch: any) => {
  dispatch(walletLoading());
  try {
    const {
      data: { currency, operations, userId, tradings }
    } = await Axios.put('http://localhost:3001/wallet', { ...wallet });

    dispatch(updateWallet({ currency, operations, userId, tradings }));
  } catch (error) {
    const { message } = error;
    dispatch(errorWallet({ message_error: message }));
  }
};
