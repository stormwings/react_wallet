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
export const URL_SIGNIN: string = `${BASE_API_URL}rest-auth/login/ `;
export const URL_SIGNUP: string = `${BASE_API_URL}rest-auth/registration/`;
export const URL_LOGOUT: string = `${BASE_API_URL}rest-auth/logout/`;

/**
 * Profile
 *
 * get profiles | GET
 * get profile | GET
 * create profile | POST
 * update profile | PUT
 */

/**
 * Operation
 *
 * get operations | GET
 * get operation | GET
 * create operation | POST
 * update operation | PUT
 */

/**
 * Trading
 *
 * get tradings | GET
 * get trading | GET
 * create trading | POST
 * update trading | PUT
 * delete trading | DELETE
 */

/**
 * Wallet
 *
 * get wallets | GET
 * get wallet | GET
 * create wallet | POST
 * update wallet | PUT
 * delete wallet | DELETE
 */

/**
 * Others
 *
 * Crypto Prices | GET
 */

export const urlCryptoCurrency: string = 'http://api.coinlayer.com/api/live?access_key=6cf20ac78a76ac957077a648cbd6d208&symbols=BTC,ETH';
