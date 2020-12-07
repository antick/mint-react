import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  Formik, Form, Field, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Motion from '../shared/Motion';
import userActions from '../../../store/actions/userAction';
import SubmitButton from '../shared/Form/SubmitButton';
import alertActions from '../../../store/actions/alertAction';

const initialValues = {
  password: '',
  confirmPassword: ''
};

const validationSchema = Yup.object().shape({
  password: Yup
    .string()
    .required('Password is required')
    .min(6, 'Password is too short - should be at least 6 characters long'),

  confirmPassword: Yup
    .string()
    .required('Confirmation password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords should match')
});

const ResetPassword = ({ history }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const alert = useSelector(state => state.alert);
  const passwordSelector = useSelector(state => state.password);

  const handleChangePassword = values => {
    const { password, confirmPassword } = values;

    if (password && confirmPassword && !passwordSelector.submitting) {
      const token = location.search.replace('?token=', '');

      if (token) {
        dispatch(userActions.resetPasswordByToken(history, token, password));
      } else {
        dispatch(alertActions.error('Your token is missing!'));
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => handleChangePassword(values)}
    >
      {formik => {
        const { errors, touched } = formik;

        return (
          <div className="guest-container">
            <Motion type="5" className="guest-block">
              <h3 className="guest-title">Reset Password</h3>

              {alert.message && <div className={alert.type}>{alert.message}</div>}

              <Form className="guest-form">
                <div className="mb-8">
                  <label className="input-label-top" htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className={`form-input ${errors.password && touched.password ? 'is-invalid' : null}`}
                  />
                  <ErrorMessage name="password" component="span" className="input-error" />
                </div>

                <div className="mb-8">
                  <label className="input-label-top" htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className={`form-input ${errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : null}`}
                  />
                  <ErrorMessage name="confirmPassword" component="span" className="input-error" />
                </div>

                <div className="flex justify-around mb-9">
                  <div className="inline-flex rounded-md shadow-sm">
                    <SubmitButton
                      text="Change Password"
                      submitting={passwordSelector.submitting}
                      state={formik}
                    />
                  </div>
                </div>
              </Form>
            </Motion>
          </div>
        );
      }}
    </Formik>
  );
};

ResetPassword.propTypes = {
  history: PropTypes.object
};

export default ResetPassword;
