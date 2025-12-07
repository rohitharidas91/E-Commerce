"use client";

import CartItem from "@/components/CartItem";
import CartSteps from "@/components/CartSteps";
import OrderSummary from "@/components/OrderSummary";
import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { ShippingFormType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import useCartStore from "@/stores/cartStore";
import EmptyCart from "@/components/EmptyCart";

export default function CartPage() {
  const { cart } = useCartStore();
  const [shippingFormData, setShippingFormData] =
    useState<ShippingFormType | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1");
  const discount = 20;
  const shippingFee = 10;
  const subtotal = cart.reduce(
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
        <div className="w-full lg:w-7/12 border-r-2 border-gray-200 shadow-md p-4 rounded-lg overflow-y-auto scrollbar h-[calc(100vh-36rem)]">
          {activeStep === 1 ? (
            cart.length === 0 ? (
              <EmptyCart />
            ) : (
              <div className="flex flex-col gap-2">
                {cart.map((item) => (
                  <CartItem
                    key={item.id + item.selectedColor + item.selectedSize}
                    cartItem={item}
                  />
                ))}
              </div>
            )
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
