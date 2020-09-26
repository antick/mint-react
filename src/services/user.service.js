import config from '../config';
import axios from '../utils/axios';

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
    await axios.post('auth/refresh-tokens', { refreshToken: localStorage.getItem('refreshToken') })
      .then(response => {
        if (response.data.access) {
          localStorage.setItem('token', response.data.access.token);
          localStorage.setItem('refreshToken', response.data.refresh.token);
          loggedIn = true;
        }
      })
      .catch(() => {
        loggedIn = false;
      });
  }

  return loggedIn;
};

// Get authorization header with jwt token
const authHeader = () => {
  const token = localStorage.getItem('token');

  if (token) {
    return {
      Authorization: `Bearer ${token}`
    };
  }

  return {};
};

const logout = () => {
  const refreshToken = localStorage.getItem('refreshToken');

  return axios.delete(`user/logout/${refreshToken}`)
    .then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    })
    .catch(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    });
};

const handleResponse = response => response.json()
  .then(data => {
    if (!response.ok) {
      // if (response.status === 401) {
      //   logout();
      //   window.location.reload(true);
      // }

      const error = (data && data.message) || response.statusText;

      return Promise.reject(error);
    }

    return data;
  });

const login = (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  };

  return fetch(`${config.apiUrl}/auth/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', user.tokens.access.token);
      localStorage.setItem('refreshToken', user.tokens.refresh.token);

      return user;
    });
};

const getAll = () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
};

const getById = id => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
};

const register = user => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/auth/register`, requestOptions)
    .then(handleResponse);
};

const update = user => {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
};

const deleteUser = id => {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
};

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
