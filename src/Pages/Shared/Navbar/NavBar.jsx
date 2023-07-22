import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  const navMenu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/colleges"
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "font-bold"
          }
        >
          Colleges
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/admission"
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "font-bold"
          }
        >
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCollege"
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "font-bold"
          }
        >
          My College
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar my-container max-w-screen-xl bg-orange-500 relative z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center gap-2">
              <img
                className="h-12 rounded-full"
                src="../../../../public/logo.png"
                alt=""
              />
              <p className="font-bold">LensMasters</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex font-bold">
          <ul className="menu menu-horizontal text-black">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <div>
                <Link to="/userDetails" className="text-xl font-bold">
                  {user.displayName}
                </Link>
              </div>
              <Link onClick={handleLogOut} className="btn btn-sm btn-primary">
                Logout
              </Link>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm btn-primary mr-2">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
