import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/logo.svg";
import {
  FaBars,
  FaCalendar,
  FaCartArrowDown,
  FaEnvelope,
  FaHome,
  FaList,
  FaWallet,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import { FaBagShopping, FaCodeFork } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { GoCodeReview } from "react-icons/go";

export default function UserLayout() {
  let [cart] = useCart();

  let isAdmin = true;

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[280px] min-h-screen bg-[#D1A054] text-white py-10 px-8">
        <Link>
          <img src={Logo} alt="Logo" className="w-[150px]" />
        </Link>

        <ul className="mt-10 space-y-2">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
                >
                  <FaHome className="text-[25px]" />
                  <span>Admin Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
                >
                  <ImSpoonKnife className="text-[25px]" />
                  <span>Add Items</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
                >
                  <FaList className="text-[25px]" />
                  <span>Add Items</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageBookings"
                  className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
                >
                  <FaList className="text-[25px]" />
                  <span>Man. Bookings</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allUsers"
                  className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
                >
                  <FaList className="text-[25px]" />
                  <span>All Users</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
                >
                  <FaHome className="text-[25px]" />
                  <span>User Home</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/reservation"
                  className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
                >
                  <FaCalendar className="text-[25px]" />
                  <span>Reservation</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
                >
                  <FaWallet className="text-[25px]" />
                  <span>Payment History</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/cart"
                  className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
                >
                  <FaCartArrowDown className="text-[25px]" />
                  <span>
                    Cart <div className="badge badge-info">{cart.length}</div>
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/addReview"
                  className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
                >
                  <GoCodeReview className="text-[25px]" />
                  <span>Add Review</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/myBookings"
                  className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
                >
                  <FaCalendar className="text-[25px]" />
                  <span>My Bookings</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>

        <div className="divider"></div>

        {/* Shared Link */}
        <ul className="mt-4 space-y-2">
          <li>
            <NavLink
              to="/"
              className="flex items-center gap-2 text-base font-medium uppercase hover:bg-[#00000080] px-2 py-2 rounded-sm"
            >
              <FaHome className="text-[25px]" />
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu"
              className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
            >
              <FaBars className="text-[25px]" />
              <span>Menu</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu"
              className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
            >
              <FaBagShopping className="text-[25px]" />
              <span>Shop</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu"
              className="flex items-center gap-2 text-base font-medium uppercase px-2 py-2 rounded-sm"
            >
              <FaEnvelope className="text-[25px]" />
              <span>Contact</span>
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
