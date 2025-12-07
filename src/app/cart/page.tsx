"use client";

import CartItem from "@/components/CartItem";
import CartSteps from "@/components/CartSteps";
import OrderSummary from "@/components/OrderSummary";
import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { CartItemsType, ShippingFormType } from "@/types";
import { ArrowRightIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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
  const [shippingFormData, setShippingFormData] =
    useState<ShippingFormType | null>(null);
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
  console.log(shippingFormData);
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-8">
      {/* Title */}
      <h1 className="text-2xl font-medium">Ready to checkout?</h1>
      {/* Steps */}
      <CartSteps activeStep={activeStep} />
      {/* Details*/}
      <div className="w-full flex flex-col lg:flex-row justify-between gap-16">
        {/* Cart Details */}
        <div className="w-full lg:w-7/12 border-r-2 border-gray-200 shadow-md p-4 rounded-lg">
          {activeStep === 1 ? (
            <div className="flex flex-col gap-2">
              {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
              ))}
            </div>
          ) : activeStep === 2 ? (
            <ShippingForm setShippingFormData={setShippingFormData} />
          ) : activeStep === 3 && shippingFormData ? (
            <PaymentForm />
          ) : (
            <div>
              <p className="text-red-500 mb-4">
                Error! Please fill in shipping details
              </p>
              <button
                onClick={() => router.push("/cart?step=2", { scroll: false })}
                className="w-full py-2 px-4 bg-gray-500 text-white rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors transition-duration-300"
              >
                Go to shipping details
              </button>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <OrderSummary
          subtotal={subtotal}
          discount={discount}
          shippingFee={shippingFee}
          total={total}
          activeStep={activeStep}
          router={router}
        />
      </div>
    </div>
  );
}
