import axios from "axios";

const AxiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

export default function useAxiosSecure() {
  return AxiosSecure;
}
