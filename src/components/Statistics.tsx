"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Statistics({ target }: { target: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [stat, setStat] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      if (isInView) {
        const increment = Math.trunc(target / 23);
        const interval = setInterval(() => {
          setStat((curStat) => {
            var newStat = curStat + increment;
            if (newStat > target) {
              clearInterval(interval);
              return target;
            }
            return newStat;
          });
        }, 50);
        return () => clearInterval(interval); 
      }
    }, 500);
  }, [isInView]);
      
  return (
    <span ref={ref}>
      {Array(stat.toLocaleString().length)
      .fill(0)
      .map((v, i) => (
        <span key={i}>
          {stat.toLocaleString()[i]}
        </span> 
      ))}
    </span>
  ) 
}