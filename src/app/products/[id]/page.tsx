'use client';
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import { BreadcrumbCollapsed } from "@/components/Breadcrumb";
 import CustomerTestimonials from "@/components/AllReviews";
import T_shirt from "@/components/T-shirt";
// import T_shirts from "@/components/products";


const star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];

// Define the structure for the products
export interface Products {
  title: string;
  price: string | number;
  id: number;
  rating?: string;
  old_price?: string | number;
  imgUrl: string;
  img1: string,
  img2: string,
  img3: string,
  gallery: string[];
  discount?: {
    amount: number;
    percentage: number;
  };
}

// New Arrivals Products
 const newArrivals: Products[] = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    imgUrl: "/image/1.png",
    img1: "/image/13.png",
    img2: "/image/14.png",
    img3: "/image/15.png",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: "$120",
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: "4.5",
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    imgUrl: "/image/2.png",
    img1: "/image/2.png",
    img2: "/image/14.png",
    img3: "/image/15.png",
    gallery: ["/images/pic2.png"],
    price: "$260",
    old_price: "$230",
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: "3.5",
  },
  {
    id: 3,
    title: "Chechered Shirt",
    imgUrl: "/image/3.png",
    img1: "/image/3.png",
    img2: "/image/14.png",
    img3: "/image/15.png",
    gallery: ["/images/pic3.png"],
    price: "$180",
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: "4.5",
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    imgUrl: "/image/4.png",
    img1: "/image/4.png",
    img2: "/image/14.png",
    img3: "/image/15.png",
    gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
    rating: "4.5",
    price: "$160",
    old_price: "$160",
    discount: {
      amount: 0,
      percentage: 30,
    },
  },
];

// Top Selling Products
const topSelling: Products[] = [
  {
    id: 5,
    title: "Vertical Striped Shirt",
    imgUrl: "/image/5.png",
    img1: "/image/5.png",
    img2: "/image/14.png",
    img3: "/image/15.png",
    gallery: ["/images/pic5.png", "/images/pic10.png", "/images/pic11.png"],
    price: "$232",
    old_price: "$232",
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: "5.0",
  },
  {
    id: 6,
    title: "Courage Graphic T-shirt",
    imgUrl: "/image/6.png",
    img1: "/image/6.png",
    img2: "/image/14.png",
    img3: "/image/15.png",
    gallery: ["/images/pic6.png", "/images/pic10.png", "/images/pic11.png"],
    price: "$145",
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: "4.0",
  },
  {
    id: 7,
    title: "Loose Fit Bermuda Shorts",
    imgUrl: "/image/7.png",
    img1: "/image/7.png",
    img2: "/image/14.png",
    img3: "/image/15.png",
    gallery: ["/images/pic7.png"],
    price: "$80",
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: "3.0",
  },
  {
    id: 8,
    title: "Faded Skinny Jeans",
    imgUrl: "/image/8.png",
    img1: "/image/8.png",
    img2: "/image/14.png",
    img3: "/image/15.png",
    gallery: ["/image/8.png"],
    price: "$210",
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: "4.5",
  },
];

// Function to render stars dynamically based on rating
// const renderStars = (rating: string) => {
//   const fullStars = Math.floor(Number(rating)); // Full stars
//   const halfStar = Number(rating) % 1 !== 0; // If there's a half star
//   const stars = [];

//   // Add full stars
//   for (let i = 0; i < fullStars; i++) {
//     stars.push(<FaStar key={i} className="text-yellow-400" />);
//   }

//   // Add half star if the rating has a decimal part
//   if (halfStar) {
//     stars.push(<FaStar key={fullStars} className="text-yellow-400 opacity-50" />);
//   }

//   return stars;
// };
export default function Pro_Detail() {
  const params = useParams();
  const id = params.id; 
  const allProducts = [...newArrivals, ...topSelling];
  const item = allProducts.find((item) => item.id === Number(id));
  if (!item) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
    <BreadcrumbCollapsed />
    <div className="flex flex-col md:flex-row justify-center  sm:justify-evenly sm:mt-10 p-5  sm:p-0 max-w-screen-2xl  mx-auto">
      {/* left */}
      <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
        {/* images */}
        <Image
          src={item.img1}
          className="w-[100px] sm:w-full h-[100px] sm:h-[150px]  rounded-[20px]"
          alt="productdetaile"
          width={100}
          height={100}
        ></Image>
        <Image
          src={item.img2}
          className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3  rounded-[20px]"
          alt="productdetaile"
          width={100}
          height={100}
        ></Image>
        <Image
          src={item.img3}
          className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3 rounded-[20px]"
          alt="productdetaile"
          width={100}
          height={100}
        ></Image>
      </div>
      {/* mid div */}
      <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
        <Image
          src={item.img3}
          alt="productdetaile"
          className="w-full h-[95%] rounded-[20px]"
          width={100}
          height={100}
        ></Image>
      </div>
      {/* right div */}
      <div className="w-full sm:w-[500px] h-[500px] mt-3 order-3">
        <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-shirt</h1>
        {/* <div className="flex text-yellow-400">{star}</div> */}
        <div className="flex text-yellow-400">
                               {/* Map stars correctly */}
                               {star.map((icon, index) => (
                                 <span key={index}>{icon}</span>
                               ))}
                             </div>
        <p className="font-bold mt-1">
          {item.price} <span className="text-gray-500 line-through ml-1">{item.old_price}</span>{" "}
        </p>
        <p>
          This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable
          fabric, it offers superior comfort and style.
        </p>
        {/* select color */}
        <div className="mt-5">
          <p className="text-gray-500">Select Colors</p>
          <div className="flex space-x-3 mt-2">
            <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full  flex justify-center items-center">
              <Check className="text-white opacity-0  hover:opacity-100 cursor-pointer" />
            </div>
            <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center">
              <Check className="text-white opacity-0  hover:opacity-100 cursor-pointer" />
            </div>
            <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center">
              <Check className="text-white opacity-0  hover:opacity-100 cursor-pointer" />
            </div>
          </div>
        </div>
        {/* Choose Size */}
        <div className="mt-4">
          <p className="text-gray-500">Choose Size</p>
          <div className="flex space-x-3 mt-2">
            <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
              Small
            </div>
            <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
              Medium
            </div>
            <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
              Large
            </div>
            <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
              X-Large
            </div>
          </div>
        </div>
        {/* BTNS */}
        <div className="flex justify-start items-center mt-7 space-x-4">
          <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
            <Minus />
            1
            <Plus      />
          </div>
          <Button className="bg-black text-white w-[300px]">Add to Cart</Button>
        </div>
      </div>
    </div>
    <CustomerTestimonials />
    <T_shirt />
  </div>
);
}