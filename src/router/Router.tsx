import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from '../context';
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

  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
};
