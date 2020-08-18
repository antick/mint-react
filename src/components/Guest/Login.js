import React, { useState } from 'react';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState('1');

  const loginHandler = () => {
    setLoggedIn(loggedIn);
    localStorage.setItem('loggedIn', '1');
    window.location.href = '/';
  };

  return (
    <div className="flex h-screen">
      <div className="login-block w-full bg-gray-400 hidden lg:block lg:w-11/12 bg-cover rounded-l-lg" />
      <div className="m-auto w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <h3 className="pt-4 text-4xl font-bold text-center">Login</h3>
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
              placeholder="***************"
            />
            <p className="text-xs text-red-500 hidden">Please choose a password.</p>
          </div>
          <div className="mb-8">
            <div className="flex justify-between">
              <div>
                <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id"/>
                <label className="text-sm" htmlFor="checkbox_id">
                  Remember Me
                </label>
              </div>
              <div>
                <a
                  className="inline-block text-sm text-gray-800 align-baseline hover:text-blue-800"
                  href="/forgot-password"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
          <div className="mb-8 text-center">
            <button
              onClick={loginHandler}
              className="login-button"
              type="button"
            >
              Login
            </button>
          </div>
          <hr className="mb-6 border-t"/>
          <div className="text-center">
            <a
              className="inline-block text-sm text-gray-800 align-baseline hover:text-blue-800"
              href="/register"
            >
              Create an Account!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
