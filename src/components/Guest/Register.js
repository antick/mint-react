import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Validator from 'validator';
import PropTypes from 'prop-types';
import userActions from '../../actions/user.action';

const Register = ({ history }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const registering = useSelector(state => state.registration.registering);
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alert);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(userData => ({ ...userData, [name]: value }));
  }

  function handleSubmit() {
    const errorBag = {};
    if (!Validator.isEmail(user.email)) {
      errorBag.email = 'Please enter a valid email';
    }

    if (!user.name) {
      errorBag.name = 'Name is required';
    }

    if (!user.password) {
      errorBag.password = 'Password is required';
    }

    setErrors(errorBag);
    setSubmitted(true);

    if (user.name && user.email && user.password) {
      dispatch(userActions.register(history, user));
    }
  }

  return (
    <div className="guest-container">
      <div className="guest-block">
        <h3 className="guest-title">Sign Up</h3>

        {alert.message && <div className={alert.type}>{alert.message}</div>}

        <form className="guest-form">
          <div className="mb-8">
            <label className="input-label-top" htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Your full name"
              onChange={handleChange}
              className={`login-input ${submitted && !user.name ? ' is-invalid' : ''}`}
            />
            {submitted && !user.name && <p className="input-error">{errors.name}</p>}
          </div>

          <div className="mb-8">
            <label className="input-label-top" htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="Email"
              onChange={handleChange}
              className={`login-input ${submitted && !user.email ? ' is-invalid' : ''}`}
            />
            {submitted && !user.email && <p className="input-error">{errors.email}</p>}
          </div>

          <div className="mb-8">
            <label className="input-label-top" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="**********"
              onChange={handleChange}
              className={`login-input ${submitted && !user.password ? ' is-invalid' : ''}`}
            />
            {submitted && !user.password && <p className="input-error">{errors.password}</p>}
          </div>

          <div className="mb-4 text-center">
            <button className="login-button" type="button" onClick={handleSubmit}>
              {registering && <span className="spinner-border spinner-border-sm mr-1" />}
              Register
            </button>
          </div>

          <hr className="my-4 border-t" />

          <div className="text-center mb-8">
            <Link to="/login" className="guest-link">Already have an account? Login now!</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  history: PropTypes.object
};

export default Register;
