import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentFormSchema, PaymentFormType } from "@/types";
import { ArrowRightIcon } from "lucide-react";

export default function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormType>({
    resolver: zodResolver(paymentFormSchema),
  });
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="flex flex-col gap-4 mb-4">
          {/* Card Holder Name */}
          <div className="flex flex-col">
            <label
              htmlFor="cardHolderName"
              className="text-xs font-medium text-gray-500"
            >
              Name on card
            </label>
            <input
              type="text"
              placeholder="Cardholder's Name"
              {...register("cardHolderName")}
              className="border-b border-gray-200 p-2 text-gray-500 text-sm focus:outline-none focus:border-gray-400"
            />
            {errors.cardHolderName && (
              <p className="text-red-400 text-sm">
                {errors.cardHolderName.message}
              </p>
            )}
          </div>
          {/* Card Number */}
          <div className="flex flex-col">
            <label
              htmlFor="cardNumber"
              className="text-xs font-medium text-gray-500"
            >
              Card Number
            </label>
            <input
              type="text"
              {...register("cardNumber")}
              className="border-b border-gray-200 p-2 text-gray-500 text-sm focus:outline-none focus:border-gray-400"
            />
            {errors.cardNumber && (
              <p className="text-red-400 text-sm">
                {errors.cardNumber.message}
              </p>
            )}
          </div>
          <div className="flex gap-4">
            {/* Expiration Date */}
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="expirayDate"
                className="text-xs font-medium text-gray-500"
              >
                Expiration Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                {...register("expirayDate")}
                className="border-b border-gray-200 p-2 text-gray-500 text-sm focus:outline-none focus:border-gray-400"
              />
              {errors.expirayDate && (
                <p className="text-red-400 text-sm">
                  {errors.expirayDate.message}
                </p>
              )}
            </div>
            {/* CVV */}
            <div className="flex flex-col w-1/3">
              <label
                htmlFor="cvv"
                className="text-xs font-medium text-gray-500"
              >
                CVV
              </label>
              <input
                type="text"
                {...register("cvv")}
                className="border-b border-gray-200 p-2 text-gray-500 text-sm focus:outline-none focus:border-gray-400"
              />
              {errors.cvv && (
                <p className="text-red-400 text-sm">{errors.cvv.message}</p>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gray-500 text-white rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors transition-duration-300"
        >
          Confirm Payment
          <ArrowRightIcon size={16} />
        </button>
      </form>
    </div>
  );
}
