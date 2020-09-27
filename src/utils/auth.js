import Cookies from 'js-cookie';
import { isEmpty } from 'lodash';

const getAccessToken = () => {
  const token = Cookies.get('accessToken');

  return isEmpty(token) ? false : token;
};

const getRefreshToken = () => {
  const token = Cookies.get('refreshToken');

  return isEmpty(token) ? false : token;
};

const setAccessToken = access => {
  const { token, expires } = access;
  const expiresAt = new Date(new Date(expires).getTime());

  Cookies.set('accessToken', token, { expires: expiresAt });
};

const setRefreshToken = refresh => {
  const { token, expires } = refresh;
  const expiresAt = new Date(new Date(expires).getTime());

  Cookies.set('refreshToken', token, { expires: expiresAt });
};

const removeAccessToken = () => {
  Cookies.remove('accessToken');
};

const removeRefreshToken = () => {
  Cookies.remove('refreshToken');
};

const removeAllTokens = () => {
  removeAccessToken();
  removeRefreshToken();
};

const isAuthenticated = () => !!getAccessToken();

export default {
  removeRefreshToken,
  removeAccessToken,
  isAuthenticated,
  removeAllTokens,
  getRefreshToken,
  setRefreshToken,
  getAccessToken,
  setAccessToken
};
