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
      <div className="pb-44 md:pb-16 sm:pb-0 sm:h-[100vh] relative overflow-hidden">
        <Image
          alt="together nature"
          src="/register.jpg"
          className="brightness-[.4] blur-[5px] scale-[1.02] z-[-10]"
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
      <div className="relative flex flex-col md:flex-row mx-4 sm:mx-24 rounded-2xl shadow-xl text-white mt-10 md:mt-0 md:top-[-120px]">
        <div className="w-full md:w-1/2 p-8 bg-blue-900 rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-1">About the Event</h3>
          <p className="text-md md:text-lg">
            Our gala is a signature event that helps raise crucial funds to support our mission of conserving nature. We
            invite you to join us for an unforgettable evening of celebration, inspiration, and philanthropy. By attending
            the gala, you are not only treating yourself to a memorable night but also playing a pivotal role in advancing
            the causes we hold dear.
          </p>
        </div>
        <div className="w-[1px] h-64 bg-white hidden md:block"/>
        <div className="w-full md:w-1/2 p-8 bg-green-900 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-1">How to Purchase Tickets</h3>
          <p className="text-md md:text-lg">
            Tickets are <span className="font-bold">free</span>. To secure your spot at the gala, please use our registration form. Limited tickets are available, so we
            encourage you to reserve your spot early. If you have any questions regarding your tickets or wish to cancel, please reach out to us using the contact 
          </p>
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row items-center px-4 md:top-[-100px]">
        <div className="w-full lg:w-1/2">
          <FAQ />
        </div>
        <div className="w-full pt-6 md:pt-0 lg:w-1/2 px-2 md:px-24">
          <p className="bg-gradient-to-r from-red-700 via-red-500 to-red-400 text-transparent bg-clip-text text-center text-4xl font-bold mb-4">Explore the Gala's Surroundings!</p>
          <iframe
            loading="lazy"
            className="w-full rounded-xl border-4 border-gray-300"
            height={600}
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