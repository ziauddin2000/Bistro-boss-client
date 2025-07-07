import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ items }) => {
  let { user } = useContext(AuthContext);
  let navigate = useNavigate();

  let handleCart = (item) => {
    // If logout redirect to login page
    if (user?.email === undefined) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Please Login to add items to the cart",
      }).then(() => {
        navigate("/login", { state: "/order" });
      });
      return;
    }
    console.log(item);
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
