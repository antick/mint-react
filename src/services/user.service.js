import { auth, api } from '../utils';

const isLoggedIn = async () => {
  let loggedIn = false;

  await api.get('user/logged-in')
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
      await api.post('auth/refresh-tokens', { refreshToken })
        .then(response => {
          if (response.data.access) {
            auth.setAccessToken(response.data.access.token);
            auth.setRefreshToken(response.data.refresh.token);

            loggedIn = true;
          }
        })
        .catch(() => {
          loggedIn = false;
        });
    }
  }

  return loggedIn;
};

const logout = () => {
  const refreshToken = auth.getRefreshToken();

  if (refreshToken) {
    api.delete(`user/logout/${auth.getRefreshToken()}`)
      .finally(() => auth.removeAllTokens());
  }

  auth.removeAllTokens();
};

const login = (email, password) => api.post('auth/login', { email, password })
  .then(response => {
    auth.setAccessToken(response.data.tokens.access);
    auth.setRefreshToken(response.data.tokens.refresh);
  });

const getAll = () => api.get('users')
  .then(() => {})
  .catch(() => {});

const getById = id => api.get(`users/${id}`)
  .then(() => {})
  .catch(() => {});

const register = user => api.post('auth/register', user);

const update = user => api.put(`users/${user.id}`, { body: JSON.stringify(user) })
  .then(() => {})
  .catch(() => {});

const deleteUser = id => api.delete(`users/${id}`)
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
