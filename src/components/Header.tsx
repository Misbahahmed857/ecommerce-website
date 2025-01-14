"use client"
import { SheetSide } from "@/components/sheet";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";

const NotificationBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <main>
      {isVisible && (
        <div className="flex items-center justify-center bg-[#000000] h-[38px] w-full pt-3 pb-3 px-2 sm:px-4 md:px-8 gap-2 sm:gap-4 relative">
          <span className="text-[#FFFFFF] mx-0 px-1 text-[10px] sm:text-sm md:text-base ">
            Sign up and get 20% off on your first order.
            <a
              className="mx-3 sign-button px-1 text-[9px] sm:text-sm md:text-base "
              href="/signup"
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '5px',
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.textDecoration = 'none'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.textDecoration = 'underline'}
            >
              Sign Up Now
            </a>
          </span>
          <button
            className="text-[#dfdbdb] hover:text-white font-bold text-xs sm:text-sm md:text-base ml-auto absolute right-[100px]"
            onClick={() => setIsVisible(false)}
          >
            <RxCross2 className="hidden sm:block" />
          </button>
        </div>
      )}
    </main>
  );
};

export default NotificationBar;


export const Header: React.FC = () => {
  return (
    <header className="text-gray-600 body-font w-full h-[60px] flex justify-between items-center">
      <div className="flex items-center">
        <SheetSide />
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-4 sm:text-2xl">
          <span className=" text-xl  md:text-4xl font-extrabold text-black pl-2 pt-4">
            SHOP.CO
          </span>
        </a>
      </div>
      <nav className="md:ml-10 md:mr-auto flex flex-wrap items-center text-base justify-center">
        <ul className="hidden md:block"> 
          <li>
            <select className="mr-5 bg-[#FFFFFF] hover:text-gray-900">
              <option value="Shop">Shop</option>
            </select>
            <a className="mr-5 hover:text-gray-900" href="">On Sale</a>
            <a className="mr-5 hover:text-gray-900" href="">New Arrivals</a>
            <a className="mr-5 hover:text-gray-900" href="">Brands</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center md:hidden">
        <FiSearch className="text-black mx-2 text-3xl" />
        <PiShoppingCartSimple className="text-black mx-4 text-4xl" />
        <VscAccount className="text-black mx-2 text-3xl" />
      </div>
      <div className="hidden md:flex items-center mr-[100px]">
        <div className="flex justify-start items-center w-[500px] h-[40px] rounded-[62px] bg-[#F0F0F0] border-gray-300 placeholder-gray-400 mr-6">
          <FiSearch className="text-xl ml-2" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full h-full bg-[#F0F0F0] rounded-[62px] outline-none ml-2"
          />
        </div>
        <PiShoppingCartSimple className="text-black mx-2 text-2xl " />
        <VscAccount className="text-black mx-2 text-xl" />
      </div>
    </header>
  );
};