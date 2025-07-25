import { MdDelete } from "react-icons/md";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Cart() {
  let [cart, refetch] = useCart();
  let AxiosSecure = useAxiosSecure();

  let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  //   Delete item from cart
  const handleDelete = (id) => {
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
        AxiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="py-10 px-5">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-5">Cart</h1>
      <div className="overflow-x-auto">
        <div className="flex justify-evenly items-center my-5 gap-2">
          <h1 className="font-semibold text-xl uppercase">
            Total Order: {cart.length}
          </h1>
          <h1 className="font-semibold text-xl uppercase">
            Total Price: ${totalPrice}
          </h1>

          {cart.length ? (
            <Link to="/dashboard/payment">
              <button className="btn btn-warning">Pay</button>
            </Link>
          ) : (
            <button disabled className="btn btn-warning">
              Pay
            </button>
          )}
        </div>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#SL</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              return (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-16 w-16">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error text-white"
                    >
                      <MdDelete className="text-base" />
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
