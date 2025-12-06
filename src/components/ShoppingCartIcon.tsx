"use client";

import { ShoppingCart } from "lucide-react";
export default function ShoppingCartIcon() {
  return (
    <div className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center text-xs font-medium text-white">
        5
      </span>
    </div>
  );
}
