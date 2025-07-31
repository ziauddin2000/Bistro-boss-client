import axios from "axios";

const AxiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-psi-three.vercel.app",
});

export default function useAxiosPublic() {
  return AxiosPublic;
}
