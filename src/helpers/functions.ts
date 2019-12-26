import { reduxStore } from './../index';

export const buildTokenHeader = (): object => {
  const {
    auth: { key }
  } = reduxStore.getState();
  const headers: object = {
    'Content-Type': 'application/json',
    Authorization: `Token ${key}`
  };

  return headers;
};
