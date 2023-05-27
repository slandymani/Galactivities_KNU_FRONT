import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { ROUTES } from '@shared/constants';

import ActivityDashboard from '@activities/dashboard/components';
import ActivityForm from '@features/activities/form';
import ActivityDetails from '@activities/details';
import ProfilePage from '@features/profiles/components';
import ApproveActivityDashboard from '@activities/approve/components';

import { NotFound, Unauthorized } from '@features/errors';
import App from '@/App';
import RequireAuth from './RequireAuth';

export const routes: RouteObject[] = [
  {
    path: ROUTES.BASE,
    element: <App />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          { path: ROUTES.ACTIVITIES.LIST, element: <ActivityDashboard /> },
          { path: `${ROUTES.ACTIVITIES.LIST}/:id`, element: <ActivityDetails /> },
          { path: ROUTES.ACTIVITIES.CREATE, element: <ActivityForm /> },
          { path: `${ROUTES.ACTIVITIES.EDIT}/:id`, element: <ActivityForm /> },
          { path: `${ROUTES.PROFILE.BASE}/:username`, element: <ProfilePage /> },
          { path: ROUTES.ACTIVITIES.APPROVE, element: <ApproveActivityDashboard /> },
        ],
      },
      { path: ROUTES.ERROR.UNAUTHORIZED, element: <Unauthorized /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
