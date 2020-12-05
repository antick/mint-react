import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import {
  Formik, Form, Field, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import userActions from '../../actions/user.action';

/**
 * Initial form values
 *
 * @type {{password: string, name: string, email: string}}
 */
const initialValues = {
  name: '',
  email: '',
  password: ''
};

/**
 * Sign up form validation schema
 */
const signUpSchema = Yup.object().shape({
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

/**
 * Sign up component
 *
 * @param history
 * @returns {JSX.Element}
 * @constructor
 */
const Register = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alert);

  function handleSignUp(inputs) {
    const { name, email, password } = inputs;

    if (name && email && password) {
      dispatch(userActions.register(history, inputs));
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={inputs => handleSignUp(inputs)}
    >
      {formik => {
        const {
          errors, touched, isValid, dirty
        } = formik;

        return (
          <div className="guest-container">
            <AnimatePresence>
              <motion.div
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                exit={{ x: 0 }}
                className="guest-block"
              >
                <h3 className="guest-title">Sign Up</h3>

                {alert.message && <div className={alert.type}>{alert.message}</div>}

                <Form className="guest-form">
                  <div className="mb-8">
                    <label className="input-label-top" htmlFor="name">Full Name</label>
                    <Field
                      type="text"
                      name="name"
                      className={`login-input ${errors.name && touched.name ? 'is-invalid' : null}`}
                    />
                    <ErrorMessage name="name" component="span" className="input-error" />
                  </div>

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
                      Sign Up
                    </button>
                  </div>

                  <hr className="my-4 border-t" />

                  <div className="text-center mb-8">
                    <Link to="/login" className="guest-link">Already have an account? Login now!</Link>
                  </div>
                </Form>
              </motion.div>
            </AnimatePresence>
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
