
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegStarHalf, FaStar } from "react-icons/fa";

export const topSellingData = [
    {
      id: 5,
      title: "Vertical Striped Shirt",
      imgUrl: "/image/5.png",
      price: 232,
      discount: { amount: 0, percentage: 20 },
      rating: 5.0,
    },
    {
      id: 6,
      title: "Courage Graphic T-shirt",
      imgUrl: "/image/6.png",
      price: 145,
      discount: { amount: 0, percentage: 0 },
      rating: 4.0,
    },
    {
      id: 7,
      title: "Loose Fit Bermuda Shorts",
      imgUrl: "/image/7.png",
      price: 80,
      discount: { amount: 0, percentage: 0 },
      rating: 3.0,
    },
    {
      id: 8,
      title: "Faded Skinny Jeans",
      imgUrl: "/image/8.png",
      price: 210,
      discount: { amount: 0, percentage: 0 },
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



const TopSelling = () => {
  return (
    <div className="top-selling">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-20 mt-16">TOP SELLING</h1>
      <div className="flex flex-wrap justify-center space-x-4">
        {topSellingData.map((product) => (
          <div key={product.id} className="product-card mb-6">
            <Link href={`/product/${product.id}`}>
              <div className="w-[290px] h-[298px] bg-[#F0EEED] rounded-[20px]">
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
    </div>
  );
};

export default TopSelling;

  