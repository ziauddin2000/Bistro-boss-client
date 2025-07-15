import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrash, FaUser, FaUserGraduate } from "react-icons/fa";
import Swal from "sweetalert2";

export default function AllUsers() {
  let AxiosSecure = useAxiosSecure();

  // get user with tanstack query
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      AxiosSecure.get("/users", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => res.data),
  });

  // delete user
  let handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosSecure.delete(`/users/${id}`).then(() => {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  // Make Admin
  let handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user an admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosSecure.patch(`/users/admin/${id}`).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: "User has been made an admin.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="py-10 px-6">
      <div className="mb-5">
        <h1 className="text-2xl md:text-4xl font-semibold mb-5">
          Manage Users
        </h1>
        <div>
          <h1 className="font-semibold text-xl uppercase">
            Total Users: {data?.length}
          </h1>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    {item.role === "admin" ? (
                      <>
                        <button
                          onClick={() => handleMakeAdmin(item._id)}
                          className="btn btn-primary text-white"
                        >
                          <FaUserGraduate />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleMakeAdmin(item._id)}
                          className="btn  btn-soft "
                        >
                          <FaUser></FaUser>
                        </button>
                      </>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error text-white"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
