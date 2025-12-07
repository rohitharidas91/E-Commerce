//Temporary

import ProductInteraction from "@/components/ProductInteraction";
import Image from "next/image";
import Link from "next/link";

const product = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  //Todo: get item details from API
  return {
    title: product.name,
    description: product.shortDescription,
  };
};

export default async function ProductPage({
  searchParams,
}: {
  searchParams: Promise<{ color: string; size: string }>;
}) {
  const { color, size } = await searchParams;
  const selectedSize = size || product.sizes[0];
  const selectedColor = color || product.colors[0];
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* Image */}
      <div className="w-full lg:w-5/12 relative aspect-2/3">
        <Image
          src={product.images[selectedColor as keyof typeof product.images]}
          alt={product.name}
          className="object-contain"
          fill
        />
      </div>
      {/* Details */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        {/* Card Info */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="payment"
            width={50}
            height={25}
            className="rounded-lg"
          />
          <Image
            src="/cards.png"
            alt="payment"
            width={50}
            height={25}
            className="rounded-lg"
          />
          <Image
            src="/stripe.png"
            alt="payment"
            width={50}
            height={25}
            className="rounded-lg"
          />
        </div>
        <p>
          By clicking pay now you agree to our{" "}
          <Link
            href=""
            className="underline hover:text-gray-500 cursor-pointer"
          >
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link
            href=""
            className="underline hover:text-gray-500 cursor-pointer"
          >
            Privacy Policy
          </Link>
          . You authorize us to charge your card for with the selected payment
          method for the total amount shown. All sales are subject to our return
          and refund policy.
        </p>
      </div>
    </div>
  );
}
