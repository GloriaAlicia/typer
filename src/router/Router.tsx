import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import { TyperApp } from '../pages/TyperApp';

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <TyperApp />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/some',
      element: <div>hi!</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};
