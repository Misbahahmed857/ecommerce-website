
"use client"

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import { BreadcrumbDemo } from "@/components/Breadcrumb";
import Reviews from "@/components/AllReviews";



const  star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];

interface Product {
  title: string;
  price: string;
  id: number;
  imgUrl: string;
  img1: string;
  img2: string;
  img3: string;
  rating?: number;
  oldPrice?: string;
}

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    imgUrl: "/image/1.png",
    price: "$120",
    img1: "/image/13.png",
    img2: "/image/14.png",
    img3: "/image/15.png",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    imgUrl: "/image/2.png",
    price: "$260",
    oldPrice: "$320",
    img1: "/image/2.png",
    img2: "/image/13.png",
    img3: "/image/14.png",
    rating: 3.5,
  },
  {
    id: 3,
    title: "Chequered Shirt",
    imgUrl: "/image/3.png",
    price: "$180",
    img1: "/image/3.png",
    img2: "/image/14.png",
    img3: "/image/15.png",
    rating: 4.5,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    imgUrl: "/image/4.png",
    price: "$160",
    oldPrice: "$200",
    img1: "/image/4.png",
    img2: "/image/14.png",
    img3: "/image/13.png",
    rating: 4.5,
  },
  {
    id: 5,
    title: "One Life Graphic T-shirt",
    imgUrl: "/image/5.png",
    price: "$140",
    img1: "/image/5.png",
    img2: "/image/13.png",
    img3: "/image/14.png",
    rating: 4.0,
  },
  {
    id: 6,
    title: "Classic Denim Jacket",
    imgUrl: "/image/6.png",
    price: "$220",
    oldPrice: "$250",
    img1: "/image/6.png",
    img2: "/image/13.png",
    img3: "/image/14.png",
    rating: 4.8,
  },
  {
    id: 7,
    title: "Cotton Casual T-shirt",
    imgUrl: "/image/7.png",
    price: "$80",
    img1: "/image/7.png",
    img2: "/image/13.png",
    img3: "/image/14.png",
    rating: 3.7,
  },
  {
    id: 8,
    title: "Vintage Polo Shirt",
    imgUrl: "/image/8.png",
    price: "$150",
    oldPrice: "$180",
    img1: "/image/8.png",
    img2: "/image/13.png",
    img3: "/image/14.png",
    rating: 4.2,
  },
];

export default function Pro_Detail(){
  const params = useParams();
  const id = params.id //dynamic id ye se milengii
  const item = newArrivalsData.find((item)=> item.id === Number(id))
  if(!item){
      return <h1>Product not found</h1>
  }

  return(
    <>
      <BreadcrumbDemo/>
      <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0  max-w-screen-2xl mx-auto gap-2 ">
          {/* left */}
            <div className=" flex sm:flex-col  justify-between items-center w-full sm:w-[152px] order-2 sm:order-1 space-x-4 ">
              {/* images */}
              <Image src={item.img1} className=" w-[100px] sm:w-full h-[100px] sm:h-[150px]" alt="productdetaile" width={200} height={200}></Image>
              <Image src={item.img2} className=" w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="productdetaile" width={200} height={200}></Image>
              <Image src={item.img3} className=" w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="productdetaile" width={200} height={200}></Image>
            </div>
             {/* mid div */}
             <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2 space-y-4">
             <Image src={item.img3} alt="productdetaile" className="w-full h-[95%]" width={200} height={200}></Image>
             </div>
             {/* right div */}
             <div className=" w-full sm:w-[600px] h-[500px] mt-3 order-3">
                 <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-shirt</h1>
                 <div className="flex text-yellow-400">
                                  {star.map((icon, index) => (
                                      <span key={index}>{icon}</span>
                                  ))}
                              </div>
                 <p className="font-bold mt-1">{item.price} <span>{item.oldPrice}</span> </p>
                 <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                 {/* select color */}
                 <div className=" mt-5">
                  <p className="text-gray-500">Select Colors</p>
                  <div className="flex space-x-3 mt-2">
                  <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full  flex justify-center items-center"><Check className="text-white opacity-0  hover:opacity-100 cursor-pointer"/></div>
                    <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="text-white opacity-0  hover:opacity-100 cursor-pointer"/></div>
                    <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center"><Check className="text-white opacity-0  hover:opacity-100 cursor-pointer"/></div>
                  </div>
                 </div>
                 {/* Choose Size */}
                 <div className="mt-4">
                  <p className="text-gray-500">Choose Size</p>
                  <div className="flex space-x-3 mt-2">  
                  <div className="w-[80px]   h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Small</div>
                    <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Medium</div>
                    <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Large</div>
                    <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">X-Large</div>
                  </div>
                 </div>
                  {/* BTNS */}
                 <div className="flex justify-start items-center mt-7 space-x-4">
                 <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">
                  <Minus/>
                  1
                  <Plus/>
                 </div>
                 <Button className="bg-black text-white w-[300px]">Add to Cart</Button>
             </div>
             </div>
      </div>
        <Reviews />
       {/* <Tshirts/>  */}
      </>
  )
}

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaStar } from "react-icons/fa";
// import { Minus, Plus } from "lucide-react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { BreadcrumbDemo } from "@/components/Breadcrumb";
// import Toastity from "@/components/addtocart";
// import CustomerTestimonials from "@/components/AllReviews";
// import Top_sell from "@/app/product/topSell";
// import { Any } from "next-sanity";


// // Create a star array for ratings (you could later adjust this dynamically)
// const starIcons = [
//   <FaStar key={1} />,
//   <FaStar key={2} />,
//   <FaStar key={3} />,
//   <FaStar key={4} />,
//   <FaStar key={5} />,
// ];

// interface Product {
//   image: string[]; // Ensure that your GROQ query returns an array of image URLs
//   discountPercent: number;
//   isNew: boolean;
//   name: string;
//   description: string;
//   price: number;
//   _id: string;
//   colors: string[];
//   sizes: string[];
//   slug: { current: string };
// }

// export default function SlugPage({ params }: { params: { slug: string } }) {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [cartItem, setCartItem] = useState<Any  | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         // Query product by slug
//         const query = `*[_type == 'products' && slug.current == $slug][0]{
//           image,
//           discountPercent,
//           isNew,
//           name,
//           description,
//           price,
//           _id,
//           colors,
//           sizes,
//           slug
//         }`;
//         const data: Product = await client.fetch(query, { slug: params.slug });

//         if (!data) {
//           setError(true);
//         } else {
//           setProduct(data);
//           setCartItem({
//             id: data._id,
//             name: data.name,
//             image: data.image,
//             price: data.price,
//             size: data.sizes[0],
//             color: data.colors[0],
//             qty: 1,
//             discount: data.discountPercent,
//           });
//         }
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [params.slug]);

//   if (loading) {
//     return <h1 className="text-center mt-36 font-bold">Loading...</h1>;
//   }

//   if (error || !product) {
//     return (
//       <div className="mt-36 text-red-500 text-center font-bold">
//         <BreadcrumbDemo />
//         Product not found
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="mt-28 md:mt-36 relative">
//         <BreadcrumbDemo />
//         <div
//           key={product._id}
//           className="flex h-full items-center flex-col md:flex-row justify-center sm:justify-evenly sm:p-0 max-w-screen-2xl mx-auto"
//         >
//           {/* Left Section: Thumbnails */}
//           <div className="flex space-x-4 md:space-x-0 md:space-y-3 p-5 md:flex-col justify-between items-center md:w-[200px] order-2 md:order-1">
//             {product.image.map((img, index) => (
//               <Link key={index} href={`/product/${product.slug.current}`}>
//                 <Image
//                   src={urlFor(img).url()}
//                   alt={product.name}
//                   width={100}
//                   height={100}
//                   className="w-[100px] h-[100px] md:h-[150px] lg:mt-3 rounded-[20px]"
//                 />
//               </Link>
//             ))}
//           </div>

//           {/* Mid Section: Main Image */}
//           <div className="w-[90%] pb-3 h-[260px] lg:w-[500px] md:h-[500px] mt-5 lg:mt-0 order-1 md:order-2">
//             {product.image.length > 0 && (
//               <Image
//                 src={urlFor(product.image[0]).url()} // Show the first image as the main image
//                 alt={product.name}
//                 width={500}
//                 height={500}
//                 className="w-full h-full sm:mt-3 rounded-[20px]"
//               />
//             )}
//           </div>

//           {/* Right Section: Product Details */}
//           <div className="w-full p-5 lg:w-[500px] lg:h-[500px] order-3">
//             <h1 className="text-2xl lg:text-3xl font-bold">{product.name}</h1>
//             <div className="flex text-yellow-400">{starIcons}</div>
//             <div className="flex items-center space-x-2 mt-4">
//               <p className="font-bold">${cartItem.price * cartItem.qty}</p>
//               {cartItem.discount > 0 && (
//                 <span className="text-gray-400 line-through">
//                   ${((cartItem.price * cartItem.qty) - (cartItem.price * cartItem.discount) / 100).toFixed(2)}
//                 </span>
//               )}
//               {cartItem.discount > 0 && (
//                 <span className="bg-red-400 rounded-[10px] text-white px-1">{`-${cartItem.discount}%`}</span>
//               )}
//             </div>
//             <p className="text-sm mt-4">{product.description}</p>

//             {/* Select Color */}
//             <div className="mt-5">
//               <p className="text-gray-500">Select Colors</p>
//               <div className="flex space-x-3 mt-2">
//                 {product.colors.map((color, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setCartItem({ ...cartItem, color })}
//                     className="w-[37px] h-[37px] border border-black rounded-full flex justify-center items-center"
//                     style={{ backgroundColor: color }}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Choose Size */}
//             <div className="mt-4">
//               <p className="text-gray-500">Choose Size</p>
//               <div className="flex space-x-3 mt-2">
//                 {product.sizes.map((size, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setCartItem({ ...cartItem, size })}
//                     className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400"
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity and Add to Cart */}
//             <div className="flex justify-start items-center mt-7 space-x-4">
//               <button
//                 onClick={() =>
//                   setCartItem({
//                     ...cartItem,
//                     qty: cartItem.qty <= 1 ? 1 : cartItem.qty - 1,
//                   })
//                 }
//               >
//                 <Minus />
//               </button>
//               <span>{cartItem.qty}</span>
//               <button
//                 onClick={() =>
//                   setCartItem({ ...cartItem, qty: cartItem.qty + 1 })
//                 }
//               >
//                 <Plus />
//               </button>
//               <Toastity cartItem={cartItem} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <CustomerTestimonials />
//       <Top_sell />
//     </>
//   );
// }
