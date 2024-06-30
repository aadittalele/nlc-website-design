"use client";
import Image from "next/image";
import GalaForm from "./form";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { date } from "@/util/info";
import Timeline from "@/components/Timeline";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

import FAQ from "@/components/FAQ";

export default function Gala() {
  const [donated, setDonated] = useState(false);

  return (
    <div className="overflow-hidden">
      <div className="pb-16 sm:pb-0 sm:h-[100vh] relative">
        <Image
          alt="together nature"
          src="/register.jpg"
          className="brightness-[.4] blur-[5px] scale-[1.02]"
          style={{
            
          }}
          quality={30}
          fill
          priority
        />
        <Navbar />
        <div className="w-full sm:px-8 flex flex-col sm:flex-row">
          <div className="w-full text-[#F6F6F6] pt-0 xs:pt-14 px-10 xs:px-6 sm:px-4 md:pl-24 sm:w-1/2 pr-6">
            <h2 className="my-2 text-3xl xs:text-4xl sm:text-3xl md:text-4xl font-bold">Register for the Greener Tomorrow Gala.</h2>
              <p className="flex text-xl font-bold my-2">
                <Image className="px-2" src="/location.svg" alt="location" width={40} height={40} />
                Universal Blvd, Orlando, FL 32819
              </p>
              <p className="flex text-xl font-bold my-2">
                <Image className="px-2" src="/date.svg" alt="date" width={40} height={40} />
                {date.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "EST",
                })}
              </p>
              <p className="flex text-xl font-bold my-2">
                <Image className="px-2" src="/time.svg" alt="time" width={40} height={40} />
                {date.toLocaleTimeString("en-US", { timeStyle: "short" })}
              </p>
            <p className="text-md xs:text-xl font-light mb-4">
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
      <div className="flex flex-col md:flex-row items-center px-4">
        <div className="w-full md:w-1/2">
          <FAQ />
        </div>
        <div className="w-full pt-6 md:pt-0 md:w-1/2 px-2 md:px-10">
          <p className="text-center text-4xl font-bold mb-4">Explore the Gala's Surroundings!</p>
          <iframe
            loading="lazy"
            className="w-full rounded-xl border-4 border-gray-300"
            height={500}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCTSQRPQtsDwWomHXtOxVqbeOQozI6TBOQ&q=Orange+County+Convention+Center">
          </iframe>
        </div>
      </div>
      <div className="bg-[#F6F6F6] w-full">
        <p className="text-center text-6xl font-bold py-10">Timeline of Events</p>
        <Timeline />
      </div>
    </div>
  );
}
// AIzaSyCTSQRPQtsDwWomHXtOxVqbeOQozI6TBOQ