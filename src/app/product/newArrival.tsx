import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegStarHalf, FaStar } from "react-icons/fa";

export const newArrivalsData = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    imgUrl: "/image/1.png",
    price: 120,
    discount: { amount: 0, percentage: 0 },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    imgUrl: "/image/2.png",
    price: 260,
    discount: { amount: 0, percentage: 20 },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Chequered Shirt",
    imgUrl: "/image/3.png",
    price: 180,
    discount: { amount: 0, percentage: 0 },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    imgUrl: "/image/4.png",
    price: 160,
    discount: { amount: 0, percentage: 30 },
    rating: 4.5,
  },
];

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 !== 0; // If there's a half star

  const stars = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="text-yellow-400" />);
  }

  // Add half star if there's a fractional part
  if (halfStar) {
    stars.push(<FaRegStarHalf key={fullStars} className="text-yellow-400" />);
  }

  return stars;
};

const NewArrival = () => {
  return (
    <div className="new-arrival">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-20 mt-16">NEW ARRIVALS</h1>
      <div className="flex flex-wrap justify-center space-x-4">
        {newArrivalsData.map((product) => (
          <div key={product.id} className="product-card mb-6">
            
            <Link href={`/product/${product.id}`}>
              <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px]">
                <Image
                  src={product.imgUrl}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="w-full h-full rounded-[20px]"
                />
              </div>
            </Link>
            <h3 className="text-lg mt-2 font-bold">{product.title}</h3>
            <div className="flex">{renderStars(product.rating)}</div>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-white text-black px-14 py-3 rounded-full border-2 border-black-200 hover:bg-gray-100 transition duration-300">
          View All
        </button>
        
      </div>
      <hr className="mt-8 border-gray-300 w-[60%] mx-auto border-t-[1px]" />
 
    </div>
  );
};

export default NewArrival;
