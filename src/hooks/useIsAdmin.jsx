import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

export default function useIsAdmin() {
  const { user, loading } = useContext(AuthContext);
  const AxiosSecure = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      let res = await AxiosSecure.get(`/users/${user.email}`);
      return res?.data;
    },
  });

  return { isAdmin, isAdminLoading };
}
