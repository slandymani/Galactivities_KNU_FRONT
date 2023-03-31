import { useMobXStore } from '@store/index';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function RequireAuth() {
  const location = useLocation();
  const {
    userStore: { isLoggedIn },
  } = useMobXStore();

  return !isLoggedIn ? <Navigate to="/" state={{ from: location }} /> : <Outlet />;
}

export default RequireAuth;
