import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Formik, Form, Field, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Motion from '../shared/Motion';
import userActions from '../../../actions/user.action';

const initialValues = {
  email: '',
  password: ''
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short - should be at least 6 characters long.')
});

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
      validationSchema={validationSchema}
      onSubmit={inputs => handleLogin(inputs)}
    >
      {formik => {
        const {
          errors, touched, isValid, dirty
        } = formik;

        return (
          <div className="guest-container">
            <Motion type="5" className="guest-block">
              <h3 className="guest-title">Login</h3>

              {alert.message && <div className={alert.type}>{alert.message}</div>}

              <Form className="guest-form">
                <div className="mb-8">
                  <label className="input-label-top" htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="email@domain.com"
                    className={`form-input ${errors.email && touched.email ? 'is-invalid' : null}`}
                  />
                  <ErrorMessage name="email" component="span" className="input-error" />
                </div>

                <div className="mb-8">
                  <label className="input-label-top" htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="********"
                    className={`form-input ${errors.password && touched.password ? 'is-invalid' : null}`}
                  />
                  <ErrorMessage name="password" component="span" className="input-error" />
                </div>

                <div className="mb-4 text-center">
                  <button
                    type="submit"
                    className={`btn-submit ${!(dirty && isValid) ? 'btn-disabled' : ''}`}
                    disabled={!(dirty && isValid)}>
                    Login
                  </button>
                </div>

                <div className="text-center">
                  <Link to="/forgot-password" className="guest-link">Forgot Password?</Link>
                </div>

                <hr className="my-4 border-t" />

                <div className="text-center">
                  <Link to="/register" className="guest-link">Create an Account!</Link>
                </div>
              </Form>
            </Motion>
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
