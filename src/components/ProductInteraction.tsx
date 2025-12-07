"use client";

import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types";
import {
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  Wallet,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ProductInteraction({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [quantity, setQuantity] = useState(1);

  const handleChange = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(param, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const { addToCart } = useCartStore();
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and a color");
      return;
    }
    addToCart({
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    });
    toast.success("Product added to cart");
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Sizes */}
      <div className="flex flex-col gap-4 mt-2">
        <h2>Size</h2>
        <div className="flex flex-row gap-2">
          {product.sizes.map((size) => (
            <div
              className={`flex items-center justify-center border-2 border-gray-400 rounded-lg h-12 w-12 cursor-pointer ${
                size === selectedSize ? "bg-gray-800 border-none" : ""
              }`}
            >
              <button
                key={size}
                onClick={() => {
                  handleChange("size", size);
                }}
                className={`rounded-lg h-11 w-11 cursor-pointer ${
                  size === selectedSize
                    ? "bg-gray-800 text-white border-2 border-white"
                    : ""
                }`}
              >
                {size.toLocaleUpperCase()}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Colors */}
      <div className="flex flex-col gap-2 mt-2"></div>
      <h2>Color</h2>
      <div className="flex flex-row gap-4">
        {product.colors.map((color) => (
          <div
            key={color}
            className={`flex border border-gray-300 rounded-full h-8 w-8 cursor-pointer ${
              color === selectedColor ? "ring-4 ring-gray-600" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => {
              handleChange("color", color);
            }}
          ></div>
        ))}
      </div>
      {/* Quantity */}
      <div className="flex flex-col gap-2 mt-2">
        <h2>Quantity</h2>
        <div className="flex flex-row gap-4 items-center">
          <button
            onClick={() =>
              setQuantity(quantity === 1 ? quantity : quantity - 1)
            }
            className="text-white bg-gray-800 p-1 rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          >
            <MinusIcon size={20} />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-white bg-gray-800 p-1 rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          >
            <PlusIcon size={20} />
          </button>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-2">
        <button
          onClick={() => {
            handleAddToCart();
          }}
          className="flex w-full justify-center gap-6 p-2 rounded-lg border-2 border-gray-800 bg-gray-800 hover:bg-gray-600 hover:text-white text-white transition-all duration-300 cursor-pointer"
        >
          <ShoppingCartIcon size={20} />
          Add to Cart
        </button>
        {/* Buy this item */}
        <button className="flex w-full justify-center gap-6 p-2 rounded-lg border-2 border-gray-800 bg-white hover:bg-gray-600 hover:text-white text-gray-800 transition-all duration-300 cursor-pointer">
          <Wallet size={20} />
          Buy this item
        </button>
      </div>
    </div>
  );
}
