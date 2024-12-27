import React, { useEffect ,useState } from "react";
import {Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";



export default function Navbar() {
   
  const [is_dark, setIs_dark] = useState(false)

  function darkMode(){
    let html = document.documentElement
    let is_dark = localStorage.getItem('is_dark')


    if(is_dark == null || is_dark === "light"){
      html.classList.add('dark')
      localStorage.setItem('is_dark', 'dark')
      setIs_dark(false)
    }else{
      html.classList.remove('dark')
      localStorage.setItem('is_dark', "light")
      setIs_dark(true)
    }
  }

  useEffect(()=>{
    darkMode()
  },[])


  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <header className="container text-gray-600 h-[90px] flex items-center justify-between dark:text-white">
      <div className="flex items-center ">
       <Link to={"/"}>
       <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-[50px] h-[50px] object-cover rounded-full" src="https://avatars.mds.yandex.net/i?id=da96f43e2bffba6515bb9e0c1b5476dc_l-11846204-images-thumbs&n=13" alt="" />
          <span className="ml-2 text-[20px] dark:text-white">OYBEK MIRFAYZULLAYEV</span>
        </div>
       </Link>
       </div>

        <div className="">
          <Link to={"/"} className="mr-5 cursor-pointer">Asosiy</Link>
          <Link to={"/films"} className="mr-5 cursor-pointer">Filmlar</Link>
          <Link className="mr-5 cursor-pointer">FAQ</Link>
          <Link className="mr-5 cursor-pointer">Service</Link>
        </div>

        <div className="flex gap-3">
            <button className=" bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base dark:bg-white dark:text-black"
            onClick={darkMode}>
              {
                is_dark? <MdDarkMode/> : <IoSunnyOutline/>
              }</button>
            <button className=" bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 dark:bg-white dark:text-black">Kirish</button>
        </div>
    </header>
    </div>
  );
}
