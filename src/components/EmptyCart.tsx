import { Squirrel } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EmptyCart() {
  const router = useRouter();
  return (
    <div className="text-gray-500 flex flex-col items-center justify-center gap-4 h-full">
      <Squirrel size={128} />
      <p className="mb-4 text-lg font-medium">Your cart is empty!</p>
      <button
        onClick={() => router.push("/", { scroll: false })}
        className="px-4 py-2 bg-gray-500 text-white rounded-lg cursor-pointer hover:bg-gray-900 transition-colors transition-duration-300"
      >
        Continue Shopping
      </button>
    </div>
  );
}
