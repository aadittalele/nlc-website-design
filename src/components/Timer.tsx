"use client";
import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { useIsClient } from "usehooks-ts";

const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

const Timer = ({ date }: { date: Date }) => {
  const end = date.getTime();
  const [timeLeft, setTimeLeft] = useState(recalculate(new Date().getTime(), end));

  function recalculate(start: number, end: number) {
    const difference = end - start;

    return {
      d: Math.floor(difference / days),
      h: Math.floor((difference % days) / hours),
      m: Math.floor((difference % hours) / minutes),
      s: Math.floor((difference % minutes) / seconds),
    };
  }

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = recalculate(now, end);
      setTimeLeft(timeLeft);
    }, 10);

    return () => {
      clearInterval(countdownTimer);
    };
  }, [end, date]);
useIsClient
  const preset = presets.wobbly;

  return (
    <div className="flex">
      {useIsClient() && (<>
        <div className="text-sm xs:text-md bg-[#115f8a] border-2 border-[#094566] rounded-xl p-2 mx-1 xs:mx-2 w-18 xs:w-24">
          <p className="text-2xl xs:text-3xl font-semibold" suppressHydrationWarning>
            <TextTransition springConfig={preset} style={{ display: "flex", justifyContent: "center" }}>{timeLeft.d}</TextTransition>
          </p>
          Days
        </div>
        <div className="text-sm xs:text-md bg-[#115f8a] border-2 border-[#094566] rounded-xl p-2 mx-1 xs:mx-2 w-18 xs:w-24">
          <p className="text-2xl xs:text-3xl font-semibold" suppressHydrationWarning>
            <TextTransition springConfig={preset} style={{ display: "flex", justifyContent: "center" }}>{timeLeft.h}</TextTransition>
          </p>
          Hours
        </div>
        <div className="text-sm xs:text-md bg-[#115f8a] border-2 border-[#094566] rounded-xl p-2 mx-1 xs:mx-2 w-18 xs:w-24">
          <p className="text-2xl xs:text-3xl font-semibold" suppressHydrationWarning>
            <TextTransition springConfig={preset} style={{ display: "flex", justifyContent: "center" }}>{timeLeft.m}</TextTransition>
          </p>
          Minutes
        </div>
        <div className="text-sm xs:text-md bg-[#115f8a] border-2 border-[#094566] rounded-xl p-2 mx-1 xs:mx-2 w-18 xs:w-24">
          <p className="text-2xl xs:text-3xl font-semibold" suppressHydrationWarning>
            <TextTransition springConfig={preset} style={{ display: "flex", justifyContent: "center" }}>{timeLeft.s}</TextTransition>
          </p>
          Seconds
        </div>
      </>)}
    </div>
  );
};

export default Timer;