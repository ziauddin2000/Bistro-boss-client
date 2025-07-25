import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useIsAdmin from "../hooks/useIsAdmin";
import { Navigate, useLocation } from "react-router-dom";

export default function AdminRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const { isAdmin, isAdminLoading } = useIsAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
}
