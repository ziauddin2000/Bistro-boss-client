import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

export default function UserHome() {
  const { user } = useContext(AuthContext);

  return (
    <div className="py-10 px-5">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-5">
        {" "}
        Welcome Back {user?.displayName ? user.displayName : ""}{" "}
      </h1>
    </div>
  );
}
