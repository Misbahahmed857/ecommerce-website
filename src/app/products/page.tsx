
import Link from "next/link";  // Correct import for Link component
import Image from "next/image";
import { FaStar } from "react-icons/fa";

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

// Function to render stars dynamically based on rating
const renderStars = (rating: string) => {
  const fullStars = Math.floor(Number(rating)); // Full stars
  const halfStar = Number(rating) % 1 !== 0; // If there's a half star
  const stars = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="text-yellow-400" />);
  }

  // Add half star if the rating has a decimal part
  if (halfStar) {
    stars.push(<FaStar key={fullStars} className="text-yellow-400 opacity-50" />);
  }

  return stars;
};

export default function ProductsPage() {
  return (
    <div className="w-full h-auto mt-10 ">
      {/* New Arrivals Section */}
      <div className="new-arrivals">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">NEW ARRIVALS</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
          {newArrivals.map((data) => (
            <div key={data.id} >
            {/* className="product-card mb-6 md:mb-0"> */}
              <Link href={`/products/${data.id}`}> {/* Corrected Link */}
                 
                  <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px]">
                    <Image
                      src={data.imgUrl}
                      alt={data.title}
                      width={100}
                      height={100}
                      className="w-full h-full rounded-[20px]"
                    />
                  </div>
               
              </Link>
              <h3 className="text-lg mt-2 font-bold">{data.title}</h3>
              <div className="flex">{data.rating && renderStars(data.rating)}</div>
              <p>
                {data.price}{" "}
                {data.old_price && (
                  <span className="text-gray-400 font-bold line-through">{data.old_price}</span>
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-white text-black px-14 py-3 rounded-full border-2 border-black-200 hover:bg-gray-100 transition duration-300">
            View All
          </button>
        </div>
      </div>

      {/* Full-width Line Between New Arrivals and Top Selling */}
      <div className="w-[90%] mx-auto mt-10">
        <hr className="border-t-2 border-gray-300" />
      </div>

      {/* Top Selling Section */}
      <div className="top-selling mt-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">TOP SELLING</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
          {topSelling.map((data) => (
            <div key={data.id} className="product-card mb-6 md:mb-0">
             <Link href={`/products/${data.id}`}>
             <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px]">
                <Image
                  src={data.imgUrl}
                  alt={data.title}
                  width={100}
                  height={100}
                  className="w-full h-full rounded-[20px]"
                />
              </div>
             </Link >
              <h3 className="text-lg mt-2 font-bold">{data.title}</h3>
              <div className="flex">{data.rating && renderStars(data.rating)}</div>
              <p>
                {data.price}{" "}
                {data.old_price && (
                  <span className="text-gray-400 font-bold line-through">{data.old_price}</span>
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-white text-black px-14 py-3 rounded-full border-2 border-black-200 hover:bg-gray-100 transition duration-300">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}