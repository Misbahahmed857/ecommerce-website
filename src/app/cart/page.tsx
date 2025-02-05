"use client";
import Link from "next/link"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa"; // Trash bin icon from react-icons

interface Product {
  _id: string;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number; // Add quantity to track the number of products in the cart
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    // Make sure each product has a quantity and price is always a valid number
    const updatedCart = savedCart.map((item: Product) => ({
      ...item,
      price: isNaN(item.price) ? 0 : item.price, // Ensure price is a valid number
      quantity: item.quantity || 1, // Ensure quantity defaults to 1 if not set
    }));
    setCart(updatedCart);
  }, []);

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const incrementQuantity = (productId: string) => {
    const updatedCart = cart.map((item) =>
      item._id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decrementQuantity = (productId: string) => {
    const updatedCart = cart.map((item) =>
      item._id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Ensure the totalPrice calculation uses valid numbers
  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const subtotal = totalPrice;
  const discountPercent = 10; // Sample discount percentage
  const discountAmount = (subtotal * discountPercent) / 100;
  const deliveryFee = 5; // Example fixed delivery fee
  const total = subtotal - discountAmount + deliveryFee;

  const handleCheckout = () => {
    // Handle checkout process here (e.g., redirect to a checkout page)
    alert("Proceeding to checkout...");
  };

  return (
    <div className="p-6">
      <h2 className="text-center font-bold text-[30px] text-slate-800 mt-4 mb-4">Cart Summary</h2>
      <div className="grid grid-row-1 sm:grid-row-2 md:grid-row-3 lg:grid-row-4 gap-6">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={item.imgUrl}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-sm text-blue-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decrementQuantity(item._id)}
                    className="bg-gray-300 text-gray-800 p-2 rounded-full"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item._id)}
                    className="bg-gray-300 text-gray-800 p-2 rounded-full"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-600 p-2 rounded-full"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Order Summary */}
      <div className="mt-4 bg-slate-100 p-6 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Discount ({discountPercent}%):</p>
            <p>-${discountAmount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Fee:</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-6">
        <Link href="/checkout">
        <button
          onClick={handleCheckout}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Checkout
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;