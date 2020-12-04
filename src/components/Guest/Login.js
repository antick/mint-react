import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Formik, Form, Field, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import userActions from '../../actions/user.action';

/**
 * Initial form values
 *
 * @type {{password: string, email: string}}
 */
const initialValues = {
  email: '',
  password: ''
};

/**
 * Login form validation schema
 */
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short - should be at least 6 characters long.')
});

/**
 * Login component
 *
 * @param history
 * @returns {JSX.Element}
 * @constructor
 */
const Login = ({ history }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const alert = useSelector(state => state.alert);

  const handleLogin = inputs => {
    const { email, password } = inputs;

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
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={inputs => handleLogin(inputs)}
    >
      {formik => {
        const {
          errors, touched, isValid, dirty
        } = formik;

        return (
          <div className="guest-container">
            <div className="guest-block">
              <h3 className="guest-title">Login</h3>

              {alert.message && <div className={alert.type}>{alert.message}</div>}

              <Form className="guest-form">
                <div className="mb-8">
                  <label className="input-label-top" htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className={`login-input ${errors.email && touched.email ? 'is-invalid' : null}`}
                  />
                  <ErrorMessage name="email" component="span" className="input-error" />
                </div>

                <div className="mb-8">
                  <label className="input-label-top" htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className={`login-input ${errors.password && touched.password ? 'is-invalid' : null}`}
                  />
                  <ErrorMessage name="password" component="span" className="input-error" />
                </div>

                <div className="mb-4 text-center">
                  <button
                    type="submit"
                    className={`login-button ${!(dirty && isValid) ? 'btn-disabled' : ''}`}
                    disabled={!(dirty && isValid)}>
                    Login
                  </button>
                </div>

                <div className="text-center">
                  <a className="guest-link" href="/forgot-password">Forgot Password?</a>
                </div>

                <hr className="my-4 border-t" />

                <div className="text-center">
                  <Link to="/register" className="guest-link">Create an Account!</Link>
                </div>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

Login.propTypes = {
  history: PropTypes.object
};

export default Login;
