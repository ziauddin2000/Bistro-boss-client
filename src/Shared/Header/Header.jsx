import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { IoCart } from "react-icons/io5";

const Header = () => {
  let { user, signOutUser } = useContext(AuthContext);

  let navigate = useNavigate();

  // Handle Sign Out
  let handleSignOut = () => {
    signOutUser().then(() => {
      navigate("/login");
    });
  };

  let menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order">Order</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <button className="btn">
          <IoCart className="text-xl" />{" "}
          <div className="badge badge-sm badge-secondary">+0</div>
        </button>
      </li>
    </>
  );
  return (
    <div className="shadow-sm">
      <div className="max-w-screen-xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {menu}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
              Bistro Boss
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menu}</ul>
          </div>
          <div className="navbar-end gap-2">
            {user ? (
              <>
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>

                <button className="btn" onClick={handleSignOut}>
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/login" className="btn">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
