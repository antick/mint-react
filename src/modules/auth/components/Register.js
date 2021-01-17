import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Formik, Form, Field, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import Motion from '../../shared/components/Motion';
import userActions from '../../user/actions/userAction';
import useAlert from '../../shared/hooks/useAlert';

const initialValues = {
  name: '',
  email: '',
  password: ''
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name is too short'),

  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short - should be at least 6 characters long.')
});

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  function handleSignUp(inputs) {
    const { name, email, password } = inputs;

    if (name && email && password) {
      dispatch(userActions.register(history, inputs));
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={inputs => handleSignUp(inputs)}
    >
      {formik => {
        const {
          errors, touched, isValid, dirty
        } = formik;

        return (
          <div className="guest-container">
            <Motion type="5" className="guest-block">
              <h3 className="guest-title">Sign Up</h3>
              {alert}
              <Form className="auth-form">
                <div className="mb-8">
                  <label className="input-label-top" htmlFor="name">Full Name</label>
                  <Field
                    type="text"
                    name="name"
                    className={`form-input ${errors.name && touched.name ? 'is-invalid' : null}`}
                  />
                  <ErrorMessage name="name" component="span" className="input-error" />
                </div>

                <div className="mb-8">
                  <label className="input-label-top" htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className={`form-input ${errors.email && touched.email ? 'is-invalid' : null}`}
                  />
                  <ErrorMessage name="email" component="span" className="input-error" />
                </div>

                <div className="mb-8">
                  <label className="input-label-top" htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className={`form-input ${errors.password && touched.password ? 'is-invalid' : null}`}
                  />
                  <ErrorMessage name="password" component="span" className="input-error" />
                </div>

                <div className="mb-4 text-center">
                  <button
                    type="submit"
                    className={`btn-submit ${!(dirty && isValid) ? 'btn-disabled' : ''}`}
                    disabled={!(dirty && isValid)}>
                      Sign Up
                  </button>
                </div>

                <hr className="my-4 border-t" />

                <div className="text-center mb-8">
                  <Link to="/login" className="guest-link">Already have an account? Login now!</Link>
                </div>
              </Form>
            </Motion>
          </div>
        );
      }}
    </Formik>
  );
};

Register.propTypes = {
  history: PropTypes.object
};

export default Register;
