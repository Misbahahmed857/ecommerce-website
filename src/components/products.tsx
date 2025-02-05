import Link from "next/link"; // Correct import for Link component
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ProductCards from "./productlisting/page";

// Define the structure for the products
export interface Products {
  title: string;
  price: string | number;
  id: number;
  rating?: string;
  old_price?: string | number;
  imgUrl: string;
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
    gallery: ["/image/8.png"],
    price: "$210",
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: "4.5",
  },
];

// Adding key prop in star array
const star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];

export default function T_shirts() {
  const allProducts = [...newArrivals, ...topSelling]; // Combine both new arrivals and top selling products

  return (
    <div className="w-full h-full md:h-[500px] mt-10 max-w-screen-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center">You might also like</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 pl-3 md:pl-0 mt-5 md:place-items-center">
        {allProducts.map((data, index) => {
          return (
            <div key={index}>
              <Link href={`/product/${data.id}`}>
                <div className="w-[160px] h-[160px] md:w-[290px] mt-5 md:mt-0 md:h-[290px] bg-[#F0EEED] rounded-[20px]">
                  <Image
                    src={data.imgUrl}
                    alt={data.title}
                    className="w-full h-full rounded-[20px]"
                    width={100}
                    height={100}
                  />
                </div>
              </Link>
              <div>
                <p className="text-lg mt-2 font-bold">{data.title}</p>
                <div className="flex text-yellow-400">
                  {/* Map stars correctly */}
                  {star.map((icon, index) => (
                    <span key={index}>{icon}</span>
                  ))}
                </div>
                <p className="font-bold mt-1">
                  {data.price} <span className="text-gray-400 font-bold line-through"> {data.old_price} </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
 <ProductCards />
