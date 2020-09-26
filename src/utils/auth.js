import { isEmpty } from 'lodash';

const getAccessToken = () => {
  const token = localStorage.getItem('token');

  return isEmpty(token) ? false : token;
};

const setAccessToken = token => localStorage.setItem('token', token);

const removeAccessToken = () => localStorage.removeItem('token');

const getRefreshToken = () => {
  const token = localStorage.getItem('refreshToken');

  return isEmpty(token) ? false : token;
};

const setRefreshToken = token => localStorage.setItem('refreshToken', token);

const removeRefreshToken = () => localStorage.removeItem('refreshToken');

const removeAllTokens = () => {
  removeAccessToken();
  removeRefreshToken();
};

export default {
  removeRefreshToken,
  removeAccessToken,
  removeAllTokens,
  getRefreshToken,
  setRefreshToken,
  getAccessToken,
  setAccessToken
};
