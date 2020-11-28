import axios from 'axios';
import { auth } from '../utils';

const isLoggedIn = async () => {
  let loggedIn = false;

  await axios.get('user/logged-in')
    .then(response => {
      if (response.data.status) {
        loggedIn = true;
      }
    })
    .catch(() => {
      loggedIn = false;
    });

  if (!loggedIn) {
    const refreshToken = auth.getRefreshToken();

    if (refreshToken) {
      await axios.post('auth/refresh-tokens', { refreshToken })
        .then(response => {
          if (response.data.access) {
            auth.setAccessToken(response.data.access);
            auth.setRefreshToken(response.data.refresh);

            loggedIn = true;
          }
        })
        .catch(() => {
          loggedIn = false;
          auth.removeAllTokens();
        });
    }
  }

  return loggedIn;
};

const logout = async () => {
  const refreshToken = auth.getRefreshToken();

  if (refreshToken) {
    await axios.delete(`user/logout/${refreshToken}`);
  }

  auth.removeAllTokens();
};

const login = (email, password) => axios.post('auth/login', { email, password })
  .then(response => {
    auth.setAccessToken(response.data.tokens.access);
    auth.setRefreshToken(response.data.tokens.refresh);
  });

const getAll = () => axios.get('user')
  .then(response => response.data)
  .catch(() => {});

const getById = id => axios.get(`users/${id}`)
  .then(() => {})
  .catch(() => {});

const register = user => axios.post('auth/register', user);

const update = user => axios.put(`users/${user.id}`, { body: JSON.stringify(user) })
  .then(() => {})
  .catch(() => {});

const deleteUser = id => axios.delete(`users/${id}`)
  .then(() => {})
  .catch(() => {});

export default {
  delete: deleteUser,
  isLoggedIn,
  register,
  getById,
  getAll,
  update,
  logout,
  login
};
