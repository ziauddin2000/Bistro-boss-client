import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { IoMdHome } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../hooks/useCart";

export default function UserLayout() {
  let [cart] = useCart();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[280px] min-h-screen bg-[#D1A054] text-white py-10 px-8">
        <Link>
          <img src={Logo} alt="Logo" className="w-[150px]" />
        </Link>
        <ul className="mt-10 space-y-2">
          <li>
            <NavLink
              to="/"
              className="flex items-center gap-2 text-base font-medium uppercase hover:bg-[#00000080] px-2 py-2 rounded-sm"
            >
              <FaCartArrowDown className="text-[25px]" />
              <span>User Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/cart"
              className="flex items-center gap-2 text-base font-medium uppercase bg-[#3498db] px-2 py-2 rounded-sm"
            >
              <FaCartArrowDown className="text-[25px]" />
              <span>
                Cart <div className="badge badge-info">{cart.length}</div>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
