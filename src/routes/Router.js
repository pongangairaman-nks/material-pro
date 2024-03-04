import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/loader/Loadable';

/****Layouts*****/
const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/BlankLayout')));

/***** Pages ****/
const LoginPage = Loadable(lazy(() => import('../pages/LoginPage')));

/***** Auth Pages ****/
const NotFoundPage = Loadable(lazy(() => import('../pages/NotFoundPage')));

/*****Routes******/
const ThemeRoutes = [
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/', element: <Navigate to="/login" /> },
      { path: '/login', exact: true, element: <LoginPage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default ThemeRoutes;
