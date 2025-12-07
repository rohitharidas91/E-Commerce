"use client";

import Image from "next/image";
import { CartItemType } from "@/types";
import { Trash2Icon } from "lucide-react";
import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";

export default function CartItem({ cartItem }: { cartItem: CartItemType }) {
  const { removeFromCart } = useCartStore();
  const handleRemoveFromCart = () => {
    removeFromCart(cartItem);
    toast.success("Product removed from cart");
  };
  return (
    <div className="flex items-center justify-between gap-8 border-b-2 border-gray-200 pb-4 last:border-b-0">
      {/* Image */}
      <div className="relative w-32 h-32">
        <Image
          src={cartItem.images[cartItem.selectedColor]}
          alt={cartItem.name}
          fill
          className="object-contain"
        />
      </div>
      {/* Details */}
      <div className="flex flex-col w-1/2">
        <p className="font-medium text-lg">{cartItem.name}</p>
        <div className="flex justify-between items-center gap-2 text-sm text-gray-500">
          <span>Quantity: </span>
          <p>{cartItem.quantity}</p>
        </div>
        <div className="flex justify-between items-center gap-2 text-sm text-gray-500">
          <span>Size: </span>
          <p>{cartItem.selectedSize}</p>
        </div>
        <div className="flex justify-between items-center gap-2 text-sm text-gray-500">
          <span>Color: </span>
          <p>{cartItem.selectedColor}</p>
        </div>
        <div className="flex justify-between items-center gap-2 mt-2">
          <span>Amount: </span>
          <p className="font-medium">
            ${(cartItem.quantity * cartItem.price).toFixed(2)}
          </p>
        </div>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleRemoveFromCart()}
          className="p-2 border-2 border-gray-200 bg-red-200 rounded-full text-red-500 hover:bg-red-500 hover:text-red-200 cursor-pointer transition-all duration-300"
        >
          <Trash2Icon size={16} />
        </button>
      </div>
    </div>
  );
}
