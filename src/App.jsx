import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Themeroutes from './routes/Router';
import Loader from './layouts/loader/Loader';

function App() {
  const routing = useRoutes(Themeroutes);
  return (
    <Suspense fallback={<Loader />}>
      <div>{routing}</div>
    </Suspense>
  );
}

export default App;
