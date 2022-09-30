import React from "react";
import { Link } from "react-router-dom";
// import Card from "./Card";
// import { GiTwirlCenter } from "react-icons/gi";
export default function NotFound() {
  return (
    <>
      {/* card one */}
      <div className="overflow-hidden h-screen w-full flex flex-col  justify-center items-center bg-[#1A2238] ">
        <h1 className="text-9xl font-extrabold text-white">404</h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded ">Page Not Found</div> 
          <Link
            to="/"
            className="text-white text-3xl underline underline-offset-4 "
          >
            {/* <GiTwirlCenter /> */}
            <span >Go to Home</span>
          </Link>
          <div className="App h-screen flex flex-col items-center justify-center">
   
    </div>
      </div>
     
    </>
  );
}
