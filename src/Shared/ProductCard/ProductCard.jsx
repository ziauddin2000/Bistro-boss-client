import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ProductCard = ({ items }) => {
  let { user } = useContext(AuthContext);
  let AxiosSecure = useAxiosSecure();
  let [, refetch] = useCart();
  let navigate = useNavigate();
  let location = useLocation();

  let handleCart = (item) => {
    // If logout redirect to login page
    if (user?.email === undefined) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Please Login to add items to the cart",
      }).then(() => {
        navigate("/login", { state: location.pathname });
      });
      return;
    }

    // If user is logged in, proceed with adding to cart
    let cartItem = {
      menuId: item._id,
      name: item.name,
      email: user.email,
      image: item.image,
      price: item.price,
    };

    AxiosSecure.post(`/carts`, cartItem).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Item added to cart successfully",
        });

        // load the cart again
        refetch();
      }
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {items.map((item) => (
        <div key={item._id} className="card bg-base-100 shadow-sm">
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.recipe}</p>
            <div className="card-actions items-center justify-between mt-2">
              <h2 className="text-xl font-semibold">${item.price}</h2>
              <button
                onClick={() => handleCart(item)}
                className="btn btn-primary"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
