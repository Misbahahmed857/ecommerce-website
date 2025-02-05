"use client";

import React, { useEffect, useState } from "react";
import createClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

// Configure the Sanity client
const sanity = createClient({
  projectId: "mz8zifxl",
  dataset: "production",
  useCdn: true,
  token:
    "skZ4ARy6ssCxPiIHdf0tplaYlvsidj8JugFGrjjoqDfYtJ6OjTXAUZVJO5tMVW2VowcwS1XwvoaLNHKAvPEwAFr6ZQJN67AEpPHOBz64w5Ha0AI8EYai1L89csItOL9OCVTVM897CU7PCkz7EjtCs2Pmvr1mJuyg4Wz3I1X5T9uPxDQupvRh",
});

// Define the Product interface with a slug property
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercent: number;
  imgUrl: string;
  slug: { current: string }; // Added slug property for routing
  colors?: string[];
  sizes?: string[];
  tags?: string[];
}

// Simple addToCart function that saves the product to localStorage
const addToCart = (product: Product) => {
  const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
  savedCart.push(product);
  localStorage.setItem("cart", JSON.stringify(savedCart));
  alert(`${product.name} has been added to the cart!`);
};

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "products"] {
          _id,
          name,
          price,
          description,
          discountPercent,
          "imgUrl": image.asset->url,
          slug,        // Fetch slug for routing
          colors,
          sizes,
          tags
        }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const truncateDescription = (text: string, length = 100) => {
    return text.length > length ? `${text.substring(0, length)}... ` : text;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">
        Products From API Data
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-lg shadow-md p-4"
          >
            {/* Wrap the product image with Link */}
            <Link href={`/product/${product.slug.current}`}>
              <Image
                src={product.imgUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
            </Link>
            <h2 className="text-lg font-semibold mb-2 mt-2">
              {product.name}
            </h2>
            <p className="text-slate-800 mt-2 text-sm">
              {truncateDescription(product.description)}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-slate-600 font-bold">
                  ${product.price}
                </p>
                {product.discountPercent > 0 && (
                  <p className="text-red-500 font-semibold text-sm">
                    {product.discountPercent}% Off
                  </p>
                )}
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {(product.tags || []).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-slate-400 text-black rounded-full px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      <Link href="/cart">
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
          Go to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductCards;
