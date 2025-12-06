import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Home, Bell } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

export default function Navbar() {
  return (
    <nav className="bg-white flex items-center justify-between border-b border-gray-200 pb-4">
      {/**Left/ */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium">PLACEHOLDER NAME</p>
      </Link>
      {/**Right/ */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Link href="/">
          <Bell className="w-4 h-4 text-gray-600" />
        </Link>
        <Link href="/cart">
          <ShoppingCartIcon />
        </Link>
        <Link href="/">Sign in</Link>
      </div>
    </nav>
  );
}
