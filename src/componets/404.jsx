import React from "react";
import { Link } from "react-router-link";
// import Card from "./Card";
import { GiTwirlCenter } from "react-icons/gi";
export default function NotFound() {
  return (
    <section>
      {/* card one */}
      <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238] ">
        <h1 className="text-9xl font-extrabold text-white">404</h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded ">Page Not Found</div>
        <div className="flex flex-row">
          <Link
            to="/"
            className="text-white text-3xl underline underline-offset-4 "
          >
          
            {/* <GiTwirlCenter /> */}
            <span >Go to Home</span>
          </Link>
          
        </div>
      </div>
    </section>
  );
}
