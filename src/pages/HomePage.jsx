import React, { useEffect } from "react";
import {  Container, ProductList } from "../components";
import { NavLink } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { useSelector } from "react-redux";

const HomePage = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  return (
    <Container>
      {/* {authStatus ? <Button><NavLink to="/add-profile">complete my profile</NavLink></Button>: null} */}
      <div
        id="page1"
        className="scroll-smooth w-full flex sm:flex-row flex-col sm:justify-center sm:min-h-[calc(100vh-80px)] flex-grow text-gray-900"
      >
        <div className="sm:w-4/5 flex flex-col justify-center items-start px-5">
          <h1 className="sm:text-5xl text-xl font-devanagari text-white">
            प्रस्तुत है
          </h1>
          <NavLink to="/products/">
          <h1 className="sm:font-outline font-bebas sm:text-9xl font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-t from-slate-950 to-violet-500 leading-10">
            The Ancient Grains Co.
          </h1>
          </NavLink>
        </div>
        <div className="sm:w-1/5 max-w-full flex items-center justify-end">
          <img
            src="https://trumillets.in/wp-content/uploads/2019/11/about-banner-image-560x560.png"
            alt="Ancient Grains"
            className="w-96 h-80"
          />
        </div>
      </div>
      <div
        id="page2"
        className="sm:min-h-screen w-full text-white sm:grid sm:grid-flow-row"
      >
          <Slide direction="up">
        <h1 className="sm:row-span-1/5 font-bona text-6xl text-center mt-4 text-transparent bg-clip-text bg-gradient-to-t from-white to-yellow-500">

          Why Chose Millets??
        </h1>
          </Slide>
        <div className="sm:row-span-4/5 grid sm:grid-cols-[70%,30%] gap-4">
          <div className="flex flex-wrap">
            <Fade>
              <h2 className="text-center text-xl">Fits a gluten-free diet</h2>
              <img
                src="/ss1.png"
                alt="ss1"
                className="sm:h-96 sm:w-auto rounded-3xl"
              />
            </Fade>
          </div>
          <div className="flex flex-wrap">
            <Fade>
              <h2 className="text-center text-xl">Nutritional Value</h2>
              <img
                src="/Screenshot (19).png"
                alt="ss"
                className="sm:w-80 sm:h-96 rounded-3xl"
              />
            </Fade>
          </div>
        </div>
      </div>
      <div id="page3" className="sm:min-h-screen w-full grid sm:grid-cols-2">
        <span>
          <img
            src="/—Pngtree—cartoon characters of indian farmers_6839628.png"
            alt="farmer"
            className="h-[100%] w-[100%]"
          />
        </span>
        <div className="flex flex-col justify-evenly">
          <Slide cascade damping={0.5} direction="right">
            <div className="text-white border-white border-4 h-24 flex justify-center items-center mt-10 mr-10 transition ease-in-out hover:bg-slate-50 hover:text-black">
              <h1 className="text-2xl">
                Its easy to grow and maintain for us.
              </h1>
            </div>
            <div className="text-white border-white border-4 h-24 flex justify-center items-center mt-10 mr-10 transition ease-in-out hover:bg-slate-50 hover:text-black">
              <h1 className="text-2xl">
                India is the largest producer of millets in the world.
              </h1>
            </div>
            <div className="text-white border-white border-4 h-24 flex justify-center items-center mt-10 mr-10 transition ease-in-out hover:bg-slate-50 hover:text-black">
              <h1 className="text-2xl">
                Has been most popular with our DADIS and NANIS
              </h1>
            </div>
          </Slide>
        </div>
      </div>
      <div
        id="page4"
        className="sm:h-screen w-full sm:flex sm:justify-center sm:items-center sm:gap-28 my-8"
      >
        <div className="h-56 sm:h-96 sm:w-96 xl:h-80 2xl:h-96 w-full mb-8 sm:mb-0">
          <Carousel slideInterval={3000}>
            <img
              src="https://pbs.twimg.com/media/E2NWtE1UUAIebqm?format=jpg&name=900x900"
              alt="..."
              className="sm:h-96 sm:w-96 brightness-75"
              />
            <img
              src="https://pbs.twimg.com/media/E0hQkWMXMAAZrKM?format=jpg&name=900x900"
              alt="..."
              className="sm:h-96 sm:w-96 brightness-75"
              />
            <img
              src="https://pbs.twimg.com/media/E1QTDYOXIAAWy_c?format=jpg&name=900x900"
              alt="..."
              className="sm:h-96 sm:w-96 brightness-75"
              />
            <img
              src="https://pbs.twimg.com/media/E1FNz1CVoAcUM7S?format=jpg&name=900x900"
              alt="..."
              className="sm:h-96 sm:w-96 brightness-75"
            />
            <img
              src="https://pbs.twimg.com/media/E0rqFd8VgAECklw?format=jpg&name=900x900"
              alt="..."
              className="sm:h-96 sm:w-96 brightness-75"
            />
          </Carousel>
        </div>
        <div className="text-white sm:text-2xl font-tiny5 text-lg flex flex-col items-center">
          <Slide direction="up">
          <h1 className="mb-4">
            Get 100% original and completely organic millet based products.
          </h1>
          <h1 className="mb-4">Our products are made from the finest quality millet grains.</h1>
          <h1 className="mb-4">No third Party Interferance and direct demand and supply.</h1>
          <h1 className="mb-4">We take good care of our farmers.</h1>
          </Slide>

          <Slide>
          <Button gradientDuoTone="purpleToPink" className="font-bebas mt-10 p-2 w-40" onClick={() => navigate("/products")}>
            Let's get started
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </Slide>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
