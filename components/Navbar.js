"use client";
import { useState, useEffect } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { useRouter } from 'next/navigation';


export default function Navbar () {
  const [Menu, setMenu] = useState(false);

  const router = useRouter();

  const handleAccount = () =>{
    if (localStorage.session)
      router.push("/Account");
    else
      router.push("/Authentication/Login")
  }

  const handleNavClick = (id) => {
    router.push("/Products?categoryid="+id)
  }

  return (
    <header>
      <nav className="bg-white dark:bg-zinc-950 fixed w-full z-20 top-0 start-0 p-5 border-b-4 relative">
        <div className="flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="/" className="flex items-center">
            <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white">E-COMMERCE</span>
          </a>
          <button type="button" onClick={() => setMenu(!Menu)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          <div className={Menu ? "flex w-full pt-5" : "w-full md:w-1/4 hidden md:flex"}>
            <form action="/Search" method="get" className="flex w-full">
              <input type="search" name="search" className="w-full border-1 rounded-l-lg p-2 text-xl text-white bg-zinc-900" placeholder="Ürün, kategori ya da marka arayın" />
              <button type="submit" className="px-4 py-2 rounded-r-lg bg-zinc-900 text-xl"><FaSearch /></button>
            </form>
          </div>

          <div className={Menu ? "flex w-full pt-5" : "hidden md:flex"}>

            <button type="button" onClick={handleAccount} className="w-1/2 md:w-full text-white text-nowrap bg-blue-700 hover:bg-blue-800 font-bold text-lg rounded-lg px-5 py-2 me-4 text-center dark:bg-zinc-900 dark:hover:bg-zinc-700 flex items-center justify-between" id="menu-button" aria-expanded="true" aria-haspopup="true">
              <FaUser className="me-3" /> Hesabım
            </button>

          </div>
        </div>
      </nav>
      <div className={Menu ? "block" : "hidden md:block"}>
          <ul className="block md:flex justify-evenly py-3 text-lg font-bold">
            <a href="/Products?categoryid=0"><li>Tüm Ürünler</li></a>
            <a href="/Products?categoryid=1"><li>Bilgisayar Parçaları</li></a>
            <a href="/Products?categoryid=2"><li>Çevre Birimleri</li></a>
            <a href="/Products?categoryid=3"><li>Hazır Sistemler</li></a>
            <a href="/Products?categoryid=4"><li>Notebooklar</li></a>
            <a href="/Products?categoryid=5"><li>Konsollar</li></a>
          </ul>
        </div>
    </header>
  
  );
};