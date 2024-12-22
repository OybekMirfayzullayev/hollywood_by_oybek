import React from "react";
import {Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="container text-gray-600 h-[90px] flex items-center justify-between">
      <div className="flex items-center ">
       <Link to={"/"}>
       <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-[50px] h-[50px] object-cover rounded-full" src="https://avatars.mds.yandex.net/i?id=da96f43e2bffba6515bb9e0c1b5476dc_l-11846204-images-thumbs&n=13" alt="" />
          <span className="ml-2 text-[20px]">OYBEK MIRFAYZULLAYEV</span>
        </a>
       </Link>
       </div>

        <div className="">
          <Link to={"/"} className="mr-5 hover:text-gray-900 cursor-pointer">Asosiy</Link>
          <Link to={"/films"} className="mr-5 hover:text-gray-900 cursor-pointer">Filmlar</Link>
          <Link className="mr-5 hover:text-gray-900 cursor-pointer">FAQ</Link>
          <Link className="mr-5 hover:text-gray-900 cursor-pointer">Service</Link>
        </div>

        <button className=" bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Kirish</button>
    </header>
  );
}
