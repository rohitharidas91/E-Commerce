import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg shadow-gray-500 shadow-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md font-medium text-white">
            PLACEHOLDER NAME
          </p>
        </Link>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Blackheart Inc</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start text-sm text-gray-400"> 
        <p className="font-medium text-white">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start text-sm text-gray-400"> 
        <p className="font-medium text-white">Products</p>
        <Link href="/">All products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Brands</Link>
        <Link href="/">Gift Cards</Link>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start text-sm text-gray-400"> 
        <p className="font-medium text-white">Company</p>
        <Link href="/">About Us</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Careers</Link>
        <Link href="/">Affiliate Program</Link>
      </div>
    </div>
  );
}
