"use client";

import { CartItemsType } from "@/types";
import { ArrowRightIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Details",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

//Temporary
const cartItems: CartItemsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedSize: "s",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 2,
    selectedSize: "m",
    selectedColor: "green",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "blue",
  },
];

export default function CartPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1");
  const discount = 20;
  const shippingFee = 10;
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal - discount + shippingFee;
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-8">
      {/* Title */}
      <h1 className="text-2xl font-medium">Ready to checkout?</h1>
      {/* Steps */}
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex items-center justify-center gap-4 border-b-2 pb-4 w-full md:w-1/3${
                activeStep === step.id ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-medium ${
                  activeStep === step.id
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step.id}
              </div>
              <p
                className={`text-sm ${
                  activeStep === step.id
                    ? "text-gray-800 font-medium"
                    : "text-gray-500"
                }`}
              >
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Steps and details*/}
      <div className="w-full flex flex-col lg:flex-row justify-between gap-16">
        {/* Steps */}
        <div className="w-full lg:w-7/12 border-r-2 border-gray-200 shadow-md p-8 rounded-lg">
          1
        </div>
        {/* Details */}
        <div className="w-full lg:w-5/12 border-r-2 border-gray-200 shadow-md p-8 rounded-lg">
          <h2 className="text-xl font-medium pb-8">Cart Details</h2>
          <div className="flex flex-col text-gray-500 gap-4 pb-8 text-sm">
            <div className="flex items-center justify-between">
              <p>Subtotal:</p>
              <p className="font-medium">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between text-green-700">
              <p>Discount:</p>
              <p className="font-medium">-${discount.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Shipping fee:</p>
              <p className="font-medium">${shippingFee.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between border-t-2 border-gray-200 pt-4">
              <p className="font-medium text-gray-800 text-lg">Total:</p>
              <p className="font-medium text-gray-800 text-lg">
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="w-full py-2 px-4 bg-gray-500 text-white rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors transition-duration-300"
            >
              Continue
              <ArrowRightIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
