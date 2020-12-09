import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

export default [
  {
    component: Login,
    path: '/login',
    public: true
  },
  {
    component: Register,
    path: '/register',
    public: true
  },
  {
    component: ForgotPassword,
    path: '/forgot-password',
    public: true
  },
  {
    component: ResetPassword,
    path: '/reset-password',
    public: true
  }
];
