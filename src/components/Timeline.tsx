// components/ResizableDiv.js
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import FadeInView from './FadeInView';
import Image from 'next/image';

function Timeline() {
  return (
    <div className="bg-[#F6F6F6] mx-4 sm:mx-auto">
      <div className="relative overflow-hidden py-10 md:px-4">
        <div className="border-2 absolute border-opacity-20 border-blue-700 h-full border left-1/2"></div>
        <FadeInView y={45} margin="0px 0px">
          <div className="mb-8 flex justify-between items-center w-full">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 w-5/12 px-2 sm:px-14 py-4">
              <h3 className="mb-2 font-bold text-gray-800 text-2xl sm:text-3xl">Welcome Reception</h3>
              <p className="text-xl mb-2">6:30 PM</p>
              <p className="hidden sm:block text-sm leading-snug tracking-wide text-gray-900">Guests are greeted with eco-friendly welcome drinks and appetizers. Attendees can mingle, network, and learn about the organization's mission through interactive displays.</p>
            </div>
          </div>
        </FadeInView>
        <FadeInView y={45} margin="-30% 0px">
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 w-5/12 px-2 sm:px-14 py-4 text-end">
              <h3 className="mb-2 font-bold text-gray-800 text-2xl sm:text-3xl">Opening Remarks</h3>
              <p className="text-xl mb-2">7:15 PM</p>
              <p className="hidden sm:block text-sm font-medium leading-snug tracking-wide text-gray-800">The event officially begins with a speech from the organization's president, highlighting the achievements of the past year and outlining goals for the future.</p>
            </div>
          </div>
        </FadeInView>
        <FadeInView y={45} margin="-30% 0px">
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 w-5/12 px-2 sm:px-14 py-4">
              <h3 className="mb-2 font-bold text-gray-800 text-2xl sm:text-3xl">Dinner Service</h3>
              <p className="text-xl mb-2">7:45 PM</p>
              <p className="hidden sm:block text-sm font-medium leading-snug tracking-wide text-gray-800">A sustainable, locally-sourced dinner is served. During the meal, guests will have the opportunity to bid on silent auction items that support various environmental projects.</p>
            </div>
          </div>
        </FadeInView>
        <FadeInView y={45} margin="-30% 0px">
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 w-5/12 px-2 sm:px-14 py-4 text-end">
              <h3 className="mb-2 font-bold text-gray-800 text-2xl sm:text-3xl">Keynote Speaker</h3>
              <p className="text-xl mb-2">8:15 PM</p>
              <p className="hidden sm:block text-sm leading-snug tracking-wide text-gray-900"> renowned environmentalist gives an inspiring talk about the importance of conservation and the role each individual can play in protecting the planet.</p>
            </div>
          </div>
        </FadeInView>
        <FadeInView y={45} margin="-30% 0px">
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
            </div>
            <div className="order-1 w-5/12 px-2 sm:px-14 py-4">
              <h3 className="mb-2 font-bold text-gray-800 text-2xl sm:text-3xl">Awards Ceremony</h3>
              <p className="text-xl mb-2">8:45 PM</p>
              <p className="hidden sm:block text-sm font-medium leading-snug tracking-wide text-gray-800">The organization recognizes key donors, volunteers, and partners with awards for their outstanding contributions to environmental causes.</p>
            </div>
          </div>
        </FadeInView>
        <FadeInView y={45} margin="-30% 0px">
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">6</h1>
            </div>
            <div className="order-1 w-5/12 px-2 sm:px-14 py-4 text-end">
              <h3 className="mb-2 font-bold text-gray-800 text-2xl sm:text-3xl">Closing and Networking</h3>
              <p className="text-xl mb-2">9:30 PM</p>
              <p className="hidden sm:block text-sm leading-snug tracking-wide text-gray-900">The gala concludes with a final thank you to all attendees. Guests are encouraged to stay for additional networking and to enjoy eco-friendly desserts and coffee.</p>
            </div>
          </div>
        </FadeInView>
      </div>
    </div>
  );
};

export default Timeline;
