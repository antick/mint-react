import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Validator from 'validator';
import PropTypes from 'prop-types';
import userActions from '../../actions/user.action';

const Login = ({ history }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const { email, password } = inputs;

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const location = useLocation();
  const alert = useSelector(state => state.alert);

  const handleChange = event => {
    const { name, value } = event.target;
    setInputs(inputData => ({ ...inputData, [name]: value }));
  };

  const handleSubmit = () => {
    const errorBag = {};

    if (!Validator.isEmail(email)) {
      errorBag.email = 'Invalid email';
    }

    if (!password) {
      errorBag.password = 'Password is required';
    }

    setErrors(errorBag);
    setSubmitted(true);

    if (email && password) {
      const { from } = location.state || { from: { pathname: '/' } };
      const actionData = {
        history,
        email,
        password,
        from
      };

      dispatch(userActions.login(actionData));
    }
  };

  return (
    <div className="guest-container">
      <div className="login-bg-img w-full bg-gray-400 hidden lg:block lg:w-11/12 bg-cover rounded-l-lg" />
      <div className="m-auto w-full lg:w-1/2 rounded-lg lg:rounded-l-none border-b-2 border-gray-200">
        <div className="border border-gray-200">
          <h3 className="py-14 text-4xl font-bold text-center">Login</h3>
        </div>
        {alert.message && <div id="error-placeholder" className={`alert ${alert.type}`}>{alert.message}</div>}

        <form className="px-32 mt-8 mb-4">
          <div className="mb-8">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className={`login-input form-control${submitted && !email ? ' is-invalid' : ''}`}
            />
            {submitted && !email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="mb-8">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="************"
              value={password}
              onChange={handleChange}
              className={`login-input form-control${submitted && !password ? ' is-invalid' : ''}`}
            />
            {submitted && !password && <div className="invalid-feedback">{errors.password}</div>}
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
              id="login-button"
              className="login-button"
              type="button"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <hr className="mb-6 border-t"/>
          <div className="text-center">
            <Link to="/register" className="inline-block text-sm text-gray-800 align-baseline hover:text-blue-800">
              Create an Account!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object
};

export default Login;
