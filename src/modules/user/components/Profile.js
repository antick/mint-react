import React, {
  useEffect, useRef, useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ErrorMessage, Field, Form, Formik
} from 'formik';
import ImageUploader from 'react-images-upload';
import * as Yup from 'yup';
import { last } from 'lodash';
import userActions from '../actions/userAction';
import Breadcrumb from '../../shared/components/Breadcrumb';
import Motion from '../../shared/components/Motion';
import useAlert from '../../shared/hooks/useAlert';
import SubmitButton from '../../shared/components/Form/SubmitButton';
import { action } from '../../shared/utilities/actionUtility';
import { SET_AVATAR, CLEAR_AVATAR } from '../actions/types/avatarType';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required'),

  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),

  password: Yup.string()
    .min(6, 'Password is too short - should be at least 6 characters long.')
});

const Profile = () => {
  const title = 'Profile';

  const initialValues = useRef({
    name: '',
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const alert = useAlert();
  const userSelector = useSelector(state => state.userReducer);
  const avatarSelector = useSelector(state => state.avatarReducer);

  const [avatarFile, setAvatarFile] = useState(false);

  useEffect(() => {
    dispatch(userActions.getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (userSelector.profile) {
      initialValues.current = {
        ...userSelector.profile,
        password: ''
      };
    }
  }, [userSelector.profile]);

  const clearAvatarPreview = () => {
    dispatch(action(CLEAR_AVATAR));
  };

  const onDrop = (picture, pictureDataURLs) => {
    dispatch(action(SET_AVATAR, pictureDataURLs[0]));
    setAvatarFile(picture[0]);
  };

  const saveProfile = input => {
    const formData = new FormData();

    if (avatarSelector.avatar && avatarFile) {
      formData.append(
        'avatar',
        avatarFile,
        avatarFile.name
      );
    } else if (avatarSelector.avatar && !avatarFile) {
      formData.append('avatar', last(avatarSelector.avatar.split('http://localhost:3002/uploads/')));
    } else {
      formData.append('avatar', '');
    }

    formData.append('name', input.name);
    formData.append('email', input.email);
    formData.append('password', input.password);

    if (!userSelector.submitting) {
      dispatch(userActions.updateProfile(formData));
    }
  };

  return (
    <main className="main-content">
      <Breadcrumb title={title} />

      <section className="mx-auto pt-6">
        {alert}
        <Motion type="5" className="shadow sm:rounded-md bg-white">
          <Formik
            initialValues={initialValues.current}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={inputs => saveProfile(inputs)}
          >
            {formik => {
              const { errors, touched } = formik;

              return (
                <Form className="flex flex-wrap -mx-4 overflow-hidden sm:-mx-4 md:-mx-4 lg:-mx-3 xl:-mx-4">
                  <div className="my-4 px-4 w-1/2 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-3
                  lg:px-3 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div className="mt-2 flex justify-center items-center">
                        {avatarSelector.avatar
                          ? <div className="relative">
                            <div className="-right-2 -top-2 absolute">
                              <span
                                onClick={clearAvatarPreview}
                                className="cursor-pointer bg-red-500 rounded-full w-6 h-6 block text-center text-white">
                                X
                              </span>
                            </div>
                            <img
                              className="max-w-xs max-h-52"
                              src={avatarSelector.avatar}
                              alt="Profile"
                            />
                          </div>
                          : <ImageUploader
                            className={avatarSelector.avatar ? 'hidden' : 'block'}
                            withIcon={true}
                            buttonText='Upload avatar'
                            onChange={onDrop}
                            singleImage={true}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                          />
                        }
                      </div>
                    </div>
                  </div>

                  <div className="my-4 px-4 w-1/2 overflow-hidden sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-3
                    lg:px-3 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/2">
                    <div className="p-8 bg-white">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="col-span-6">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                          <Field
                            data-testid="name"
                            type="text"
                            name="name"
                            autoComplete="off"
                            className={`mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm
                            border-gray-300 rounded-md form-input${errors.name && touched.name ? ' is-invalid' : ''}`}
                          />
                          <ErrorMessage name="name" component="span" className="input-error" />
                        </div>

                        <div className="col-span-6">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                          <Field
                            type="text"
                            data-testid="email"
                            name="email"
                            autoComplete="off"
                            className={`mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm
                            border-gray-300 rounded-md form-input${errors.name && touched.name ? ' is-invalid' : ''}`}
                          />
                          <ErrorMessage name="email" component="span" className="input-error" />
                        </div>

                        <div className="col-span-6">
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                          <Field
                            data-testid="password"
                            type="password"
                            name="password"
                            autoComplete="off"
                            className={`mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm
                            border-gray-300 rounded-md form-input${errors.password && touched.password ? ' is-invalid' : ''}`}
                          />
                          <ErrorMessage name="password" component="span" className="input-error" />
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="flex justify-end w-full p-8 pt-0">
                    <div className="mr-4">
                      <SubmitButton
                        text="Update Profile"
                        submitting={userSelector.submitting || false}
                        state={formik}
                      />
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>

        </Motion>
      </section>
    </main>
  );
};

export default Profile;
