import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function useCart() {
  let { user } = useContext(AuthContext);

  let AxiosSecure = useAxiosSecure();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      let result = await AxiosSecure.get(`/carts?email=${user.email}`);
      return result.data;
    },
  });

  return [cart, refetch];
}
