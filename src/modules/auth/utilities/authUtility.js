import axios from 'axios';
import Cookies from 'js-cookie';
import { isEmpty } from 'lodash';

const getAccessToken = () => {
  const token = Cookies.get('accessToken');

  return isEmpty(token) ? false : token;
};

const getTokenExpiry = () => {
  const expiresIn = Cookies.get('expiresIn');

  return isEmpty(expiresIn) ? false : expiresIn;
};

const getRefreshToken = () => {
  const token = Cookies.get('refreshToken');

  return isEmpty(token) ? false : token;
};

const setAccessToken = access => {
  const { token, expires, expiresIn } = access;
  const expiresAt = new Date(new Date(expires).getTime());

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  Cookies.set('accessToken', token, { expires: expiresAt, sameSite: 'strict' });
  Cookies.set('expiresIn', expiresIn, { expires: expiresAt, sameSite: 'strict' });
};

const setRefreshToken = refresh => {
  const { token, expires } = refresh;
  const expiresAt = new Date(new Date(expires).getTime());

  Cookies.set('refreshToken', token, { expires: expiresAt, sameSite: 'strict' });
};

const removeAllTokens = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  Cookies.remove('expiresIn');
};

const isAuthenticated = () => !!getAccessToken();

const isRefreshTokenAvailable = () => !!getRefreshToken();

export default {
  isRefreshTokenAvailable,
  isAuthenticated,
  removeAllTokens,
  getRefreshToken,
  setRefreshToken,
  getAccessToken,
  getTokenExpiry,
  setAccessToken
};
