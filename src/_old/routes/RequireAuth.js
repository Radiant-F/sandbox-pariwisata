import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

function RequireAuth() {
  const { access } = useSelector((state) => state.auth.token);
  const location = useLocation();
  return access ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
}

export default RequireAuth;
