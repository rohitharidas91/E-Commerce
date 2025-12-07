"use client";

import { ShippingFormType } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { shippingFormSchema } from "@/types";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ShippingForm({
  setShippingFormData,
}: {
  setShippingFormData: (data: ShippingFormType | null) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormType>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handleShippingForm = (data: ShippingFormType) => {
    setShippingFormData(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <div className="w-full px-4">
      <form action="" onSubmit={handleSubmit(handleShippingForm)}>
        <div className="flex flex-col gap-4 mb-4">
          {/*Name*/}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="text-xs font-medium text-gray-500"
            >
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("fullName")}
              className="border-b border-gray-200 p-2 text-gray-500 text-sm focus:outline-none focus:border-gray-400"
            />
            {errors.fullName && (
              <p className="text-red-400 text-sm">{errors.fullName.message}</p>
            )}
          </div>
          {/*Email*/}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-xs font-medium text-gray-500"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              {...register("email")}
              className="border-b border-gray-200 px-2 py-1 text-gray-500 text-sm focus:outline-none focus:border-gray-400"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>
          {/*Phone*/}
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-xs font-medium text-gray-500"
            >
              Phone
            </label>
            <input
              type="text"
              placeholder="123-456-7890"
              {...register("phone")}
              className="border-b border-gray-200 px-2 py-1 text-gray-500 text-sm focus:outline-none focus:border-gray-400"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm">{errors.phone.message}</p>
            )}
          </div>
          {/*Address*/}
          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="text-xs font-medium text-gray-500"
            >
              Address
            </label>
            <input
              type="text"
              placeholder="123 Main St"
              {...register("address")}
              className="border-b border-gray-200 px-2 py-1 text-gray-500 text-sm focus:outline-none focus:border-gray-400"
            />
            {errors.address && (
              <p className="text-red-400 text-sm">{errors.address.message}</p>
            )}
          </div>
          {/* City */}
          <div className="flex flex-col">
            <label htmlFor="city" className="text-xs font-medium text-gray-500">
              City
            </label>
            <input
              type="text"
              placeholder="Dubai"
              {...register("city")}
              className="border-b border-gray-200 px-2 py-1 text-gray-500 text-sm focus:outline-none focus:border-gray-400"
            />
            {errors.city && (
              <p className="text-red-400 text-sm">{errors.city.message}</p>
            )}
          </div>
          {/* Country */}
          <div className="flex flex-col">
            <label
              htmlFor="country"
              className="text-xs font-medium text-gray-500"
            >
              Country
            </label>
            <input
              type="text"
              placeholder="United Arab Emirates"
              {...register("country")}
              className="border-b border-gray-200 px-2 py-1 text-gray-500 text-sm focus:outline-none focus:border-gray-400"
            />
            {errors.country && (
              <p className="text-red-400 text-sm">{errors.country.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gray-500 text-white rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors transition-duration-300"
        >
          Proceed to payment
          <ArrowRightIcon size={16} />
        </button>
      </form>
    </div>
  );
}
