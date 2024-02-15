import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './routes/error-page';
import Index from './routes/index';
import Root from './routes/root';
import PageOne from './routes/page-one';
import PageTwo from './routes/page-two';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          { path: 'page-one', element: <PageOne /> },
          { path: 'page-two', element: <PageTwo /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
