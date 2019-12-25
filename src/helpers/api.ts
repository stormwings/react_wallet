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
