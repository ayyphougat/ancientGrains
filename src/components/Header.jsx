import React from "react";
import { Container, Logo, LogoutBtn } from "./index";
import { NavLink } from "react-router-dom"; // Import NavLink
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaBoxOpen,
  FaUser,
} from "react-icons/fa"; // Import icons from react-icons
import updatedPost from "./UserProfile";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
      icon: <FaHome size={30} />, // Home icon
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
      icon: <FaSignInAlt size={30} />, // Login icon
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
      icon: <FaUserPlus size={30} />, // Signup icon
    },
    {
      name: "Products",
      slug: "/products",
      active: authStatus,
      icon: <FaBoxOpen size={30} />, // Products icon
    },
    // {
    //   name: "Profile",
    //   slug: `/profileDisplay/${updatedPost.$id}`,
    //   active: authStatus,
    //   icon: <FaUser size={30} />, // Profile icon
    // },
  ];

  return (
    <header className="sm:p-4 mt-2 bg-transparent text-white p-2">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <NavLink to="/">
              <h3 className="text-yellow-500">#BackToRoots</h3>
            </NavLink>
          </div>
          <ul className="flex ml-auto items-center sm:space-x-4 space-x-0">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="relative">
                  <NavLink
                    to={item.slug}
                    className={({ isActive }) =>
                      isActive
                        ? "relative inline-flex items-center justify-center p-1 mb-2 me-2 sm:me-0 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 focus:bg-green-800"
                        : "relative inline-flex items-center justify-center me-2 sm:me-0 p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 focus:bg-green-800"
                    }
                  >
                    <span className="hidden sm:inline relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      {item.name}
                    </span>
                    <span className="inline sm:hidden">{item.icon}</span>
                  </NavLink>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="flex">
                <LogoutBtn />
                {/* <NavLink to="/add-profile">create profile</NavLink> */}
                <NavLink to="/ProfileDisplay/:slug">
                  <img
                    src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
                    alt="logo"
                    className="sm:h-20 sm:w-20 h-18 w-16"
                  />
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
