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
      errorBag.email = 'Please enter a valid email';
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
      <div className="guest-block">
        <h3 className="guest-title">Login</h3>

        {alert.message && <div className={alert.type}>{alert.message}</div>}

        <form className="guest-form">
          <div className="mb-8">
            <label className="input-label-top" htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="name@domain.com"
              value={email}
              onChange={handleChange}
              className={`login-input ${submitted && !email ? ' is-invalid' : ''}`}
            />
            {submitted && !email && <p className="input-error">{errors.email}</p>}
          </div>

          <div className="mb-8">
            <label className="input-label-top" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="************"
              value={password}
              onChange={handleChange}
              className={`login-input ${submitted && !password ? ' is-invalid' : ''}`}
            />
            {submitted && !password && <p className="input-error">{errors.password}</p>}
          </div>

          <div className="mb-4 text-center">
            <button id="login-button" className="login-button" type="button" onClick={handleSubmit}>Login</button>
          </div>

          <div className="text-center">
            <a className="guest-link" href="/forgot-password">Forgot Password?</a>
          </div>

          <hr className="my-4 border-t" />

          <div className="text-center">
            <Link to="/register" className="guest-link">Create an Account!</Link>
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
