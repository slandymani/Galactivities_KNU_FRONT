import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { ROUTES } from 'app/shared/contants';

import App from 'app/layout/app-component/App.component';
import ActivityDashboard from 'features/activities/dashboard/components/ActivityDashboard.component';
import ActivityDetails from 'features/activities/details/ActivityDetails.component';
import ActivityForm from 'features/activities/form/ActivityForm.component';
import ProfilePage from 'features/profiles/components/ProfilePage.component';
import { NotFound, Unauthorized } from 'features/errors';
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
        ],
      },
      { path: ROUTES.ERROR.UNAUTHORIZED, element: <Unauthorized /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
