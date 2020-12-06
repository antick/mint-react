import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Formik, Form, Field, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Motion from '../shared/Motion';
import userActions from '../../actions/user.action';
import SubmitButton from '../shared/Form/SubmitButton';

/**
 * Initial form values
 *
 * @type {{ email: string }}
 */
const initialValues = {
  email: ''
};

/**
 * Form validation schema
 */
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required')
});

/**
 * Forgot Password Component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alert);
  const password = useSelector(state => state.password);

  const handlePasswordRequestSubmission = inputs => {
    const { email } = inputs;

    if (email && !password.submitting) {
      dispatch(userActions.forgotPassword(email));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={inputs => handlePasswordRequestSubmission(inputs)}
    >
      {formik => {
        const { errors, touched } = formik;

        return (
          <div className="guest-container">
            <Motion type="5" className="guest-block">
              <h3 className="guest-title">Forgot Password</h3>

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

                <div className="mb-4 text-center">
                  <div className="flex justify-around">
                    <span className="inline-flex rounded-md shadow-sm">
                      <SubmitButton
                        text="Recover Password"
                        submitting={password.submitting}
                        state={formik}
                      />
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <Link to="/login" className="guest-link">Remember your password? Login now!</Link>
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

ForgotPassword.propTypes = {
  history: PropTypes.object
};

export default ForgotPassword;
