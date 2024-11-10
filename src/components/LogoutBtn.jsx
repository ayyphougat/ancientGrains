import React from "react";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../store/features/authSlice";
import { Button } from "flowbite-react";
import { FiLogOut } from "react-icons/fi";

function Logoutbtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <Button
      color="failure"
      className="sm:mt-4 sm:mr-3 sm:h-fit h-10 w-10 mt-2 sm:w-auto"
      onClick={logoutHandler}
    >
      <span className="sm:inline hidden"> Logout </span>
      <span><FiLogOut size={24} className="sm:hidden inline"/></span>
    </Button>
  );
}

export default Logoutbtn;
