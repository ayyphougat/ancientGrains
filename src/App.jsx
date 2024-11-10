import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/features/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <div className=" sm:min-h-screen flex flex-col bg-[url('https://i.pinimg.com/originals/bb/56/93/bb5693afa3f6613267a6acc99979dcb9.png')] bg-cover bg-center w-full ">
      <div className="flex-grow flex-col flex ">
        <Header />
        <main className="flex-grow min-w-full">
          <Outlet />
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  ) : null;
}

export default App;
