import { Navigate } from 'react-router-dom';
import { ROUTES_CONFIG, WILDCARD_ROUTES } from '../Shared/Constants';
import Dashboard from '../Views/Dashboard/index';
import { CustomRouter } from './RootRoutes';
import { default as Login } from '../Views/Auth/SignIn/SignIn';
import { default as Register } from '../Views/Auth/SignUp/index'
import ForgotPassword from '../Views/Auth/forgot-password';
// eslint-disable-next-line import/prefer-default-export
export const PUBLIC_ROUTES: Array<CustomRouter> = [
  {
    path: ROUTES_CONFIG.HOMEPAGE.path,
    element: <Dashboard />,
    title: ROUTES_CONFIG.HOMEPAGE.title,
  },
  {
    path: `${ROUTES_CONFIG.LOGIN.path}`,
    title: ROUTES_CONFIG.LOGIN.title,
    element: <Login />,
  },

  {
    path:ROUTES_CONFIG.REGISTER.path,
    title: ROUTES_CONFIG.REGISTER.title,
    element: <Register />
  },

  {
    path:ROUTES_CONFIG.RESET_PASSWORD.path,
    title: ROUTES_CONFIG.RESET_PASSWORD.title,
    element: <ForgotPassword />
  },

  {
    path: '*',
    element: <Navigate to={WILDCARD_ROUTES.PUBLIC} />,
    title: 'Rendering wildcard',
  },
];
