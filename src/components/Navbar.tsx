"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar({ bgColor }: { bgColor: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-5 text-white" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center mr-6">
              <Link href="/">
                <Image src="/ecosta.png" width={200} height={70} alt="logo"/>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-4">
                <div>
                  <Link className="mx-2 px-2 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/">Home</Link>
                </div>
                <div>
                  <Link className="mx-2 px-2 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/enroll">Enroll</Link>
                </div>
                <div>
                  <Link className="mx-2 px-2 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/coaching">Coaching</Link>
                </div>
                <div>
                  <Link className="mx-2 px-2 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/team">Our Team</Link>
                </div>
                <div>
                  <Link className="mx-2 px-2 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/contact">Contact</Link>
                </div>
              </div>
            </div>
          </div>
          <Image className="mr-8 md:hidden" onClick={toggle} width={30} height={30} src="menuButton.svg" alt="toggle menu" />
        </div>
      </div>
      <div className={isOpen ? "block" : "hidden"} style={{ backgroundColor: bgColor }}>
        <div className="px-4 py-2 sm:px-3">
          <div className="m-4">
            <Link className="px-3 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/">Home</Link>
          </div>
          <div className="m-4">
            <Link className="px-3 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/enroll">Enroll</Link>
          </div>
          <div className="m-4">
            <Link className="px-3 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/coaching">Coaching</Link>
          </div>
          <div className="m-4">
            <Link className="px-3 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/team">Our Team</Link>
          </div>
          <div className="m-4">
            <Link className="px-3 py-2 border-white hover:border-b-2 transition-all rounded-sm" href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}