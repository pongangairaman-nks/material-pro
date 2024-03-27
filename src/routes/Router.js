import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/loader/Loadable';
/****Layouts*****/

const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/BlankLayout')));
/***** Pages ****/

const Dashboard4 = Loadable(lazy(() => import('../views/dashboards/Dashboard4')));
const Assets = Loadable(lazy(() => import('../views/assets/Assets')));
const Devices = Loadable(lazy(() => import('../views/devices/Devices')));
const Controllers = Loadable(lazy(() => import('../views/controllers/Controllers')));

/***** Auth Pages ****/
const Error = Loadable(lazy(() => import('../views/auth/Error')));
const RegisterFormik = Loadable(lazy(() => import('../views/auth/RegisterFormik')));
const LoginFormik = Loadable(lazy(() => import('../views/auth/LoginFormik')));
const Maintanance = Loadable(lazy(() => import('../views/auth/Maintanance')));
const LockScreen = Loadable(lazy(() => import('../views/auth/LockScreen')));
const RecoverPassword = Loadable(lazy(() => import('../views/auth/RecoverPassword')));

/*****Routes******/

const ThemeRoutes = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', name: 'Login', element: <Navigate to="/auth/login" /> },
      { path: '/dashboard', name: 'Dashboard 4', exact: true, element: <Dashboard4 /> },
      { path: '/assets', name: 'about', exact: true, element: <Assets /> },
      { path: '/devices', name: 'about', exact: true, element: <Devices /> },
      { path: '/controllers', name: 'about', exact: true, element: <Controllers /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
      { path: 'register', element: <RegisterFormik /> },
      { path: 'login', element: <LoginFormik /> },
      { path: 'maintanance', element: <Maintanance /> },
      { path: 'lockscreen', element: <LockScreen /> },
      { path: 'recover-password', element: <RecoverPassword /> },
    ],
  },
];

export default ThemeRoutes;
