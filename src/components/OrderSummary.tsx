import { ArrowRightIcon } from "lucide-react";

export default function OrderSummary({
  subtotal,
  discount,
  shippingFee,
  total,
  activeStep,
  router,
}: {
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  activeStep: number;
  router: any;
}) {
  return (
    <div className="w-full lg:w-5/12 border-r-2 border-gray-200 shadow-md p-8 rounded-lg h-max ">
      <h2 className="text-xl font-medium pb-8">Order Summary</h2>
      <div className="flex flex-col text-gray-500 gap-4 pb-8 text-sm">
        <div className="flex items-center justify-between">
          <p>Subtotal:</p>
          <p className="font-medium">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between text-green-700">
          <p>Discount:</p>
          <p className="font-medium">-${discount.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Shipping fee:</p>
          <p className="font-medium">${shippingFee.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between border-t-2 border-gray-200 pt-4">
          <p className="font-medium text-gray-800 text-lg">Total:</p>
          <p className="font-medium text-gray-800 text-lg">
            ${total.toFixed(2)}
          </p>
        </div>
      </div>
      {activeStep === 1 && (
        <button
          onClick={() => router.push("/cart?step=2", { scroll: false })}
          className="w-full py-2 px-4 bg-gray-500 text-white rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors transition-duration-300"
        >
          Continue
          <ArrowRightIcon />
        </button>
      )}
    </div>
  );
}
