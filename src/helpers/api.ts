/**
 * Base Urls
 *
 * base | {string} | set the base url depending on the environment
 */
const BASE_API_URL: string = 'http://localhost:8000/';

/**
 * Authentication
 *
 * login | POST
 * register | POST
 * logout | POST
 */
export const URL_SIGNIN: string = `${BASE_API_URL}rest-auth/login/`;
export const URL_SIGNUP: string = `${BASE_API_URL}rest-auth/registration/`;
export const URL_LOGOUT: string = `${BASE_API_URL}rest-auth/logout/`;

/**
 * Operation
 *
 * get operations | GET | CREATE
 */
export const URL_OPERATIONS: string = `${BASE_API_URL}operation/`;

/**
 * Trading
 *
 * tradings | GET | CREATE
 * trading | DELETE
 */
export const URL_TRADINGS: string = `${BASE_API_URL}trading/`;
export const URL_TRADING = (id: number): string => `${BASE_API_URL}trading/${id}/`;

/**
 * Wallet
 *
 * wallet | GET | PUT
 */
export const URL_WALLET = (id: number): string => `${BASE_API_URL}wallet/${id}/`;

/**
 * Others
 *
 * Crypto Prices | GET
 * profile handler | GET | PUT
 */
export const urlCryptoCurrency: string = 'http://api.coinlayer.com/api/live?access_key=6cf20ac78a76ac957077a648cbd6d208&symbols=BTC,ETH';
export const URL_PROFILE = (id: string): string => `${BASE_API_URL}profile/${id}/`;
