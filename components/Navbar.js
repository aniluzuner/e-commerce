"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Navbar () {
  const [Menu, setMenu] = useState(false);
  
  return (
    <header>
      <nav className="bg-white dark:bg-zinc-950 fixed w-full z-20 top-0 start-0 p-5 border-b-4 relative">
        <div className="flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="#" className="flex items-center">
            <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white">LOGO</span>
          </a>
          <button type="button" onClick={() => setMenu(!Menu)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          <div className={Menu ? "flex w-full pt-5" : "w-full md:w-1/4 hidden md:flex"}>
            <input type="search" className="w-full border-1 rounded-l-lg p-2 text-xl text-white bg-zinc-900" placeholder="Search product, category or brand" />
            <button type="button" className="px-4 py-2 rounded-r-lg bg-zinc-900 text-xl"><FaSearch /></button>
          </div>

          <div className={Menu ? "flex w-full pt-5" : "hidden md:flex"}>
            <button type="button" className="w-1/2 md:w-full text-white bg-blue-700 hover:bg-blue-800 font-bold text-lg rounded-lg px-5 py-2 me-4 text-center dark:bg-zinc-900 dark:hover:bg-zinc-700">Cart</button>
            <button type="button" className="w-1/2 md:w-full text-white bg-blue-700 hover:bg-blue-800 font-bold text-lg rounded-lg px-5 py-2 text-center dark:bg-zinc-900 dark:hover:bg-zinc-700">Account</button>  
          </div>
        </div>
      </nav>
    </header>
  
  );
};