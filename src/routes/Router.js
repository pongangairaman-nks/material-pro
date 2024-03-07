import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/loader/Loadable';
/****Layouts*****/

const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/BlankLayout')));
/***** Pages ****/

const Dashboard4 = Loadable(lazy(() => import('../views/dashboards/Dashboard4')));
const About = Loadable(lazy(() => import('../views/About')));

/***** Apps ****/
const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')));

/***** Ui Elements ****/
const Alerts = Loadable(lazy(() => import('../views/ui/Alerts')));

/***** Form Layout Pages ****/
const FormBasic = Loadable(lazy(() => import('../views/form-layouts/FormBasic')));

const ChartJs = Loadable(lazy(() => import('../views/charts/ChartJs')));

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
      { path: '/about', name: 'about', exact: true, element: <About /> },
      { path: '/apps/notes', name: 'notes', exact: true, element: <Notes /> },
      { path: '/ui/alerts', name: 'alerts', exact: true, element: <Alerts /> },
      { path: '/form-layout/form-basic', name: 'form-basic', exact: true, element: <FormBasic /> },
      { path: '/charts/chartjs', name: 'chartjs', exact: true, element: <ChartJs /> },
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
