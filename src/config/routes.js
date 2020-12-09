import NotFound from '../modules/auth/components/NotFound';
import authRoutes from '../modules/auth/routes';
import appRoutes from '../modules/app/routes';
import userRoutes from '../modules/user/routes';

/**
 * All the routes are considered private unless public: true is specified for them
 */
const routes = [
  ...authRoutes,
  ...appRoutes,
  ...userRoutes,
  { component: NotFound }
];

export default routes;
