"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Sort() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSort = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort", value);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
      <span>Sort By:</span>
      <select
        name="sort"
        id="sort"
        onChange={(e) => handleSort(e.target.value)}
        className="ring-1 ring-gray-300 shadow-md rounded-md px-2 py-1 focus:outline-none focus:border-gray-400"
      >
        <option value="" selected disabled hidden>
          Select Sort
        </option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
}
