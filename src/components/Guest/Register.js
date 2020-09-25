import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Validator from 'validator';
import userActions from '../../actions/user.action';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const registering = useSelector(state => state.registration.registering);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(userData => ({ ...userData, [name]: value }));
  }

  function handleSubmit() {
    const errorBag = {};
    if (!Validator.isEmail(user.email)) {
      errorBag.email = 'Invalid email';
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
      dispatch(userActions.register(user));
      // TODO: Login user after the successful registration
    }
  }

  return (
    <div className="flex h-screen">
      <div className="register-block w-full bg-gray-400 hidden lg:block lg:w-11/12 bg-cover rounded-l-lg" />
      <div className="m-auto w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <h3 className="pt-4 text-4xl font-bold text-center">Register</h3>
        <form className="px-32 mt-8 mb-4">
          <div className="mb-8">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
              Full Name
            </label>
            <input
              className={`login-input form-control${submitted && !user.name ? ' is-invalid' : ''}`}
              type="text"
              id="name"
              name="name"
              value={user.name}
              placeholder="Your full name"
              onChange={handleChange}
            />
            {submitted && !user.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="mb-8">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              className={`login-input form-control${submitted && !user.email ? ' is-invalid' : ''}`}
              type="text"
              id="email"
              name="email"
              value={user.email}
              placeholder="Email"
              onChange={handleChange}
            />
            {submitted && !user.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="mb-8">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              className={`login-input form-control${submitted && !user.password ? ' is-invalid' : ''}`}
              type="password"
              id="password"
              name="password"
              value={user.password}
              placeholder="******************"
              onChange={handleChange}
            />
            {submitted && !user.password && <p className="text-xs text-red-500">{errors.password}</p>}
          </div>
          <div className="mb-8 text-center">
            <button
              onClick={handleSubmit}
              className="login-button"
              type="button"
            >
              {registering && <span className="spinner-border spinner-border-sm mr-1" />}
              Register
            </button>
          </div>

          <hr className="mb-6 border-t"/>

          <div className="text-center">
            <Link to="/login" className="inline-block text-sm text-gray-800 align-baseline hover:text-blue-800">
              Already have an account? Login now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
