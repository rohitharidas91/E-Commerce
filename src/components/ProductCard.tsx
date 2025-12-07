"use client";

import { ProductType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";

export default function ProductCard({ product }: { product: ProductType }) {
  const [productTypes, setProductTypes] = useState({
    size: "",
    color: product.colors[0],
  });

  const handleProductTypeChange = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes({ ...productTypes, [type]: value });
  };
  const { addToCart } = useCartStore();
  const handleAddToCart = () => {
    if (!productTypes.size || !productTypes.color) {
      toast.error("Please select a size and a color");
      return;
    }
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: productTypes.size,
      selectedColor: productTypes.color,
    });
    toast.success("Product added to cart");
  };
  return (
    <div className="shadow-gray-200 shadow-lg rounded-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-2/3">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            className="object-cover hover:scale-105 transition-all duration-300"
            fill
          />
        </div>
      </Link>
      {/*product details*/}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/*Sizes*/}
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-center">Size</span>
            <select
              name="size"
              id="size"
              defaultValue={productTypes.size || ""}
              className="px-2 py-1 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-500 outline-none text-xs ring ring-gray-300"
              onChange={(e) =>
                handleProductTypeChange({ type: "size", value: e.target.value })
              }
            >
              <option value="" disabled hidden>
                Select Size
              </option>
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/*Colors*/}
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-center">Color</span>
            <div className="flex gap-2 justify-center items-center">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 border border-gray-300 ${
                    productTypes.color === color && "ring-3 ring-gray-400"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() =>
                    handleProductTypeChange({ type: "color", value: color })
                  }
                ></div>
              ))}
            </div>
          </div>
        </div>
        {/*Price and add to cart*/}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between ">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <button
            onClick={() => handleAddToCart()}
            className="flex flex-row ring-2 ring-gray-200 items-center gap-4 px-4 py-1 rounded-lg hover:ring-green-200 hover:bg-gray-700 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <ShoppingCartIcon className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
