import { createBrowserRouter } from 'react-router-dom';
import { navigationMap } from './navigation-map';
import { BaseLayout } from '@/layout';
import { MainPage } from '@/pages';
import { UserPage } from '@/pages';
import { ErrorPage } from '@/pages';

export const router = createBrowserRouter([
  {
    path: navigationMap.home,
    errorElement: <ErrorPage />,
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },

      {
        path: navigationMap.users,
        element: <MainPage />,
      },

      {
        path: navigationMap.userById,
        element: <UserPage />,
      },
    ],
  },
]);
