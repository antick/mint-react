import React, { useState } from 'react';

const Register = () => {
  const [loggedIn, setLoggedIn] = useState('1');

  const registerHandler = () => {
    setLoggedIn(loggedIn);
    localStorage.setItem('loggedIn', '1');
    window.location.href = '/';
  };

  return (
    <div className="flex h-screen">
      <div className="register-block w-full bg-gray-400 hidden lg:block lg:w-11/12 bg-cover rounded-l-lg" />
      <div className="m-auto w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <h3 className="pt-4 text-4xl font-bold text-center">Register</h3>
        <form className="px-32 mt-8 mb-4">
          <div className="mb-8">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
              Email Address
            </label>
            <input
              className="login-input"
              id="username"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-8">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className="login-input"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-xs text-red-500">Please choose a password.</p>
          </div>
          <div className="mb-8 text-center">
            <button
              onClick={registerHandler}
              className="login-button"
              type="button"
            >
              Register
            </button>
          </div>
          <hr className="mb-6 border-t"/>
          <div className="text-center">
            <a
              className="inline-block text-sm text-gray-800 align-baseline hover:text-blue-800"
              href="/login"
            >
              Already have an account? Login now!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
