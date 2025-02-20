import { useContext, useState } from "react";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { IoMdGlobe } from "react-icons/io";
import {
  IoPersonOutline,
  IoHeartOutline,
  IoCartOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import DropdownUser from "./User";
import { useGlobalContext } from "../GlobalContext/GlobalProvider";

const Navbar = () => {
  const [language, setLanguage] = useState("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const { user } = useGlobalContext();

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-black text-white flex justify-between items-center px-6 md:px-16 lg:px-32 py-2 text-sm mx-auto">
        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <span className="flex items-center gap-1">
            <MdLocationOn /> 1200 Main St. Santa Rosa, CA 93541, USA
          </span>
          <span className="flex items-center gap-1">
            <MdPhone /> +123 456 7890
          </span>
        </div>
        <div className="flex items-center gap-4">
          <select
            className="bg-black text-white border-none focus:outline-none cursor-pointer"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="EN">EN</option>
            <option value="ES">ES</option>
          </select>
          <span className="flex items-center gap-2">
            <span>Follow Us:</span>
            <FaFacebookF className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <IoMdGlobe className="cursor-pointer" />
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md flex items-center justify-between px-6 md:px-16 lg:px-32 py-4 relative">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <span className="text-red-500">C</span>ycleCity
        </div>

        <div className="flex items-center justify-center gap-2">
          {/* Search and Icons */}
          <div className="lg:hidden flex justify-center items-center gap-4">
            {user ? (
              <DropdownUser />
            ) : (
              <div className="rounded-full px-4 py-2 font-semibold text-[#333] text-sm border border-gray-300 outline-none hover:bg-gray-100">
                <a href="/auth/login">Login</a>
              </div>
            )}

            <button className="relative text-gray-500">
              <IoHeartOutline size={24} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button className="relative text-gray-500">
              <IoCartOutline size={24} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex items-center z-30 gap-6 text-black font-medium absolute lg:static top-16 right-0  bg-white shadow-md lg:shadow-none lg:w-auto flex-col lg:flex-row transition-transform duration-300 ease-in-out w-30 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          {[
            "HOME",
            "ABOUT US",
            "SERVICES",
            "SHOP",
            "PAGES",
            "NEWS",
            "CONTACT",
          ].map((item, index) => (
            <li
              key={index}
              className="py-2 px-6 lg:py-0 lg:px-4 w-full text-center lg:w-auto"
            >
              <a href="#" className="hover:text-red-500 block">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Search and Icons */}
        <div className="hidden md:hidden lg:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search Bikes, Gear & Accessories"
            className="bg-gray-100 px-4 py-2 rounded-full focus:outline-none w-64 lg:hidden xl:block"
          />
          {user ? (
            <DropdownUser />
          ) : (
            <div className="rounded-full px-4 py-2 font-semibold text-[#333] text-sm border border-gray-300 outline-none hover:bg-gray-100">
              <a href="/auth/login">Login</a>
            </div>
          )}
          <button className="relative text-gray-500">
            <IoHeartOutline size={24} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button className="relative text-gray-500">
            <IoCartOutline size={24} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
