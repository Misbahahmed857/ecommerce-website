import React from 'react';
import Stayupdate from './NewsLetter';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <main className="bg-[#F0F0F0] relative p-8 md:px-12 w-full h-full md:h-[400px] flex flex-col justify-start items-center mt-32">
        {/* Stay Updated Section */}
        <span className="absolute top-[-80px] mx-auto w-[90%] md:w-[80%]">
          <Stayupdate />
        </span>

        {/* Footer Main Content */}
        <footer className="text-gray-600 body-font w-full">
          <div className="container px-5 py-12 mx-auto flex flex-wrap justify-between">
            {/* Brand & Description */}
            <div className="w-full md:w-1/4 flex-shrink-0 text-center md:text-left mb-10 md:mb-0">
              <a className="flex title-font font-bold items-center md:justify-start justify-center text-gray-900">
                <span className="ml-3 text-3xl font-extrabold text-black">SHOP.CO</span>
              </a>
              <p className="mt-4 text-sm text-gray-500">
                We have clothes that suit your style and which you’re proud to wear. From women to men.
              </p>
              <div className="mt-4 flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  {/* Facebook Icon */}
                  <svg
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  {/* Twitter Icon */}
                  <svg
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  {/* Instagram Icon */}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="w-full md:w-3/4 flex flex-wrap justify-between">
              <div className="w-1/2 md:w-1/4 mb-8">
                <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                  COMPANY
                </h2>
                <nav className="list-none">
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Features</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Works</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Career</a></li>
                </nav>
              </div>
              <div className="w-1/2 md:w-1/4 mb-8">
                <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                  HELP
                </h2>
                <nav className="list-none">
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Customer Support</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Delivery Details</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
                </nav>
              </div>
              <div className="w-1/2 md:w-1/4 mb-8">
                <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                  FAQ
                </h2>
                <nav className="list-none">
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Account</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Manage Deliveries</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Orders</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Payments</a></li>
                </nav>
              </div>
              <div className="w-1/2 md:w-1/4 mb-8">
                <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
                  RESOURCES
                </h2>
                <nav className="list-none">
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Free eBooks</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">Development Tutorials</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">How to - Blog</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-800">YouTube Playlist</a></li>
                </nav>
              </div>
            </div>
          </div>
           <hr/>
          {/* Bottom Section */}
          <div className=" py-4 w-full">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
              <p className="text-gray-500 text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
              <div className="flex space-x-4">
                <Image src="/icons/Visa_2021.svg.png" width={40} height={40}  className="mr-2 bg-white p-2 rounded-lg shadow-md" alt="Visa" />
                <Image src="/icons/Mastercard.png" width={40} height={40} className= "mr-2 bg-white p-2 rounded-lg shadow-md" alt="Mastercard" />
                <Image src="/icons/Paypal.png" width={40} height={40} className='mr-2 bg-white p-2 rounded-lg shadow-md' alt="Paypal" />
                <Image src="/icons/ Pay.png" width={40} height={40} className='mr-2 bg-white p-2 rounded-lg shadow-md' alt="Apple Pay" />
                <Image src="/icons/G Pay.png" width={40} height={40} className='mr-2 bg-white p-2 rounded-lg shadow-md' alt="Google Pay" />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Footer;
