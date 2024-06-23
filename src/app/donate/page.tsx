"use client";
import Image from "next/image";
import DonateForm from "./form";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
// const DonationCount = dynamic(() => import("@/components/DonationCount"));

export default function Donate() {
  const [donated, setDonated] = useState(false);

  return (
    <div>
      <div className="h-[100vh] relative">
        <Image
          alt="planet sign advocacy"
          src="/planet_sign.webp"
          className="brightness-[.4] blur-[5px]"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            zIndex: -1
          }}
          quality={30}
          fill
          priority
        />
        <Navbar />
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 px-2 sm:px-8 md:px-24 lg:px-48">
            {donated ?
              <p className="text-white text-2xl font-light">We sent you an email with more information regarding you registration.</p>
            :
              <DonateForm onSubmit={() => setDonated(true)}/>
            }
          </div>
        </div>
      </div>
      <div className="bg-blue-400 w-full h-64">

      </div>
    </div>
  );
}