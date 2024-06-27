"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="pt-5 text-white bg-gradient-to-b from-black/30 via-black/30 via-70% to-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center mr-10">
              <Link href="/">
                <Image src="/ecosta.png" width={200} height={70} alt="logo"/>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-4 text-xl">
                <div>
                  <Link className="mx-2 px-2 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/about-us">About Us</Link>
                </div>
                <div>
                  <Link className="mx-2 px-2 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/gala">Gala</Link>
                </div>
                <div>
                  <Link className="mx-2 px-2 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/donate">Donate</Link>
                </div>
                <div>
                  <Link className="mx-2 px-2 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/shop">Shop</Link>
                </div>
              </div>
            </div>
          </div>
          <Image className="mr-8 md:hidden" onClick={toggle} width={30} height={30} src="menuButton.svg" alt="toggle menu" />
        </div>
      </div>
      <div className={isOpen ? "block" : "hidden"}>
        <div className="px-4 py-2 sm:px-3 text-xl">
          <div className="my-2">
            <Link className="mx-2 px-2 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/about-us">About Us</Link>
          </div>
          <div className="my-2">
            <Link className="mx-2 px-2 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/gala">Gala</Link>
          </div>
          <div className="my-2">
            <Link className="mx-2 px-2 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/donate">Donate</Link>
          </div>
          <div className="my-2">
            <Link className="mx-2 px-2 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/shop">Shop</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}