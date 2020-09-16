import config from '../config';

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
  localStorage.removeItem('token');
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
  register,
  getById,
  getAll,
  update,
  logout,
  login
};
