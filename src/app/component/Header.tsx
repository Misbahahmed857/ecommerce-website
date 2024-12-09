
"use client";
import { useState} from 'react'
import { FiSearch } from 'react-icons/fi';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { VscAccount } from 'react-icons/vsc';

export default function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (

    <div className='flex items-center justify-center  bg-[#000000] h-[38px] w-full pt-3 pb-3 gap-32'>

      <span className='text-[#FFFFFF]'> Sign up and get 20% off to your first order. 
        <a className='mx-3 underline hover:no-underline ' href="/signup">Sign Up Now</a>
 </span>
<button className= 'text-[#dfdbdb] hover:text-white font-bold text-lg '
onClick={() => setIsVisible(false)}>
    ✕
</button>

    </div>
      )
  );
    }

  
    
    export const Header = () => {
      return (
        <div>
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-3xl font-extrabold text-black ">SHOP.CO</span>
    </a>
    <nav className="md:ml-10 md:mr-auto flex flex-wrap items-center text-base justify-center">
      <select className='mr-5 bg-[#FFFFFF]  hover:text-gray-900'>
        <option value="Shop">Shop</option>
      </select>
      <a className="mr-5 hover:text-gray-900">On Sale</a>
      <a className="mr-5 hover:text-gray-900">New Arrivals</a>
      <a className="mr-5 hover:text-gray-900">Brands</a>
    </nav>
    <div className="relative w-[600px]">
  <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
  <input
    type="text"
    placeholder="Search for products..."
    className="w-full h-[50px] pl-12 rounded-full bg-gray-100 text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
  />
</div>

<PiShoppingCartSimple className="text-black mx-4 font-bold text-3xl "    />
<VscAccount className="text-black mx-2 font-bold text-2xl"    /> 
  </div>
</header>

        </div>
      )
    }