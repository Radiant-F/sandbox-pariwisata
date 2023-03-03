import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const { access } = useSelector((state) => state.auth.token);
  const location = useLocation();

  if (access) return <Outlet />;
  else return <Navigate to={"/"} state={{ from: location }} replace />;
}
