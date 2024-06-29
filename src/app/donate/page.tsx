"use client";
import Image from "next/image";
import DonateForm from "./form";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import DonationCount from "@/components/DonationCount";
// const DonationCount = dynamic(() => import("@/components/DonationCount"));

export default function Donate() {
  const [donated, setDonated] = useState(false);

  return (
    <div>
      <div className="pb-16 sm:pb-0 sm:h-[100vh] relative">
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
        <div className="w-full pt-6 sm:px-8 flex flex-col-reverse sm:flex-row">
          <div className="w-full sm:pt-14 sm:w-1/2 xs:px-2 sm:px-8 md:px-24 lg:px-48">
            {donated ?
              <p className="text-white text-2xl font-light">We sent you an email with more information regarding you registration.</p>
            :
              <DonateForm onSubmit={() => setDonated(true)}/>
            }
            <DonationCount />
          </div>
          <div className="w-full text-[#F6F6F6] pl-4 sm:pt-14 px-10 xs:px-6 sm:px-0 md:pr-12 sm:w-1/2">
            <h2 className="my-2 text-3xl xs:text-4xl sm:text-3xl md:text-4xl font-bold">Donate to help our environment.</h2>
            <p className="text-md xs:text-xl font-light mb-4">
              Your generous contributions empower us to tackle pressing environmental challenges, from reforestation
              to plastic waste reduction, and so much more. Every dollar you donate brings us one step closer to a
              sustainable and healthier Earth.
            </p>
            <ul style={{ lineHeight: 1.5 }}>
              <li>
                <span style={{ fontWeight: "bold" }}>Support Environmental Initiatives</span>: Your donations drive reforestation, plastic waste reduction, and more, making a critical impact.
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Create Lasting Change</span>: Your support fuels a more sustainable and healthier Earth.
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Every Dollar Matters</span>: Directly fund essential environmental projects with your donation.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-400 w-full h-64">

      </div>
    </div>
  );
}