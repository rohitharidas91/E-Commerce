"use client";

import { useEffect, useState } from "react";

import { ShoppingCart } from "lucide-react";
import useCartStore from "@/stores/cartStore";
export default function ShoppingCartIcon() {
  const { cart } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative">
      <ShoppingCart className="w-6 h-6 text-gray-600" />
      {isMounted && cart.reduce((acc, item) => acc + item.quantity, 0) > 0 && (
        <span className="absolute -top-3 -right-3 w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center text-xs font-medium text-white">
          {cart.reduce((acc, item) => acc + item.quantity, 0)}
        </span>
      )}
    </div>
  );
}
