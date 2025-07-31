import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AxiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-psi-three.vercel.app",
});

export default function useAxiosSecure() {
  let navigate = useNavigate();
  let { signOutUser } = useContext(AuthContext);

  // to send authorization token to backend
  AxiosSecure.interceptors.request.use(
    function (config) {
      let token = localStorage.getItem("token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  AxiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      let status = error.response.status;

      // If status 401 or 403 logout the user
      if (status == 401 || status == 403) {
        //await signOutUser();
        //navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return AxiosSecure;
}
