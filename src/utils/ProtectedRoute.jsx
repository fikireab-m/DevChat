
import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
const ProtectedRoute = () => {
  const { user} = useSelector((state) => state.userAuth);
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/tutee/login" />
  );
};

export default ProtectedRoute;
