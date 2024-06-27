// components/ResizableDiv.js
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import FadeInView from './FadeInView';
import Image from 'next/image';

function Timeline() {
  const [heightRatio, setHeight] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHeight(Math.max(latest * 1400 - 350, 0));
  });

  return (
    <div className="flex justify-center w-full h-[1400px] bg-[#F6F6F6]" ref={ref}>
      <div className="w-1/2">
        <FadeInView>
          <div className="mb-80 px-28">
            <p className="text-5xl font-semibold">Event Name</p>
            <div>
              <p className="text-3xl my-2">6:00 PM</p>
              <div className="right-1/2 absolute">
                  <Image src="/triangle.svg" alt="triangle" width={40} height={40}/>
              </div>
            </div>
            <p>Enjoy an fantastic introduction to our ceremony. Meet our founder, Aadit Talele and delve into our organization's mission.</p>
          </div>
        </FadeInView>
      </div>
      <motion.div className='bg-blue-300 w-2 origin-top rounded-xl' style={{ height: heightRatio + "px" }}></motion.div>
      <div className="w-1/2">
        <div className="mb-80"/>
        <FadeInView>
          <div className="mb-80 px-28">
            <p className="text-5xl font-semibold">Event Name</p>
            <div>
              <p className="text-3xl my-2">6:00 PM</p>
              <div className="left-1/2 absolute">
                  <Image src="/triangle.svg" alt="triangle" className="scale-x-[-1]" width={40} height={40}/>
              </div>
            </div>
            <p>Enjoy an fantastic introduction to our ceremony. Meet our founder, Aadit Talele and delve into our organization's mission.</p>
          </div>
        </FadeInView>
      </div>
      
    </div>
  );
};

export default Timeline;
