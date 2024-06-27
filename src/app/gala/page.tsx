"use client";
import Image from "next/image";
import GalaForm from "./form";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { date } from "@/util/info";
import dynamic from "next/dynamic";
import Timeline from "@/components/Timeline";

export default function Gala() {
  const [donated, setDonated] = useState(false);

  return (
    <div>
      <div className="h-[100vh] relative">
        <Image
          alt="together nature"
          src="/register.jpg"
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
        <div className="w-full sm:px-8 flex flex-col sm:flex-row">
          <div className="w-full text-[#F6F6F6] pt-0 xs:pt-14 px-10 xs:px-6 sm:px-4 md:pl-24 sm:w-1/2 pr-6">
            <h2 className="my-2 text-3xl xs:text-4xl sm:text-3xl md:text-4xl font-bold">Register for the Greener Tomorrow Gala.</h2>
              <p className="flex text-xl lead font-bold my-2">
                <Image className="px-2" src="/location.svg" alt="location" width={40} height={40} />
                9801 International Dr, Orlando, FL 32819
              </p>
              <p className="flex text-xl lead font-bold my-2">
                <Image className="px-2" src="/date.svg" alt="date" width={40} height={40} />
                {date.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "EST",
                })}
              </p>
              <p className="flex text-xl lead font-bold my-2">
                <Image className="px-2" src="/time.svg" alt="time" width={40} height={40} />
                {date.toLocaleTimeString("en-US", { timeStyle: "short" })}
              </p>
            <p className="lead text-md xs:text-xl font-light mb-4">
              Join us for our Gala for a Greener Tomorrow, where we unite in support of our environmental initiatives.
              Your attendance and contributions will directly fund our mission for a cleaner, healthier, and more sustainable planet.
            </p>
            <p className="font-semibold">Make sure to register for each person attending.</p>
          </div>
          <div className="w-full pt-0 xs:pt-14 sm:w-1/2 xs:px-2 sm:px-8 md:px-18 lg:px-48">
            {donated ?
              <p className="text-white text-2xl font-light">We sent you an email with more information regarding you registration.</p>
            :
              <GalaForm onSubmit={() => setDonated(true)}/>
            }
          </div>
        </div>
      </div>
      <div className="bg-blue-300 w-full h-64"></div>
      <div className="bg-[#F6F6F6] w-full">
        <p className="text-center text-6xl font-bold py-6">Timeline of Events</p>
        <Timeline />
      </div>
      <div className="bg-blue-300 w-full h-64"></div>
    </div>
  );
}