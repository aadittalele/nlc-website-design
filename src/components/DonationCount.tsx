import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { useIsClient } from "usehooks-ts";

export default function DonationCount() {
  const [initialMoney, setInitialMoney] = useState(6_044_756 + 0.001 * (Date.now() - 1710974809850));

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.35) {
        setInitialMoney((m) => m + Math.random() ** 5 * 100 + 3);
      }
    }, 700);
    return () => clearInterval(interval);
  }, []);

  const text = Math.round(initialMoney).toLocaleString();

  return (
    <div className="mt-8 bg-white flex flex-col items-center py-6 mx-14 rounded-xl">
      {/* <h3 className="mb-1">$6,044,756</h3> */}

      <h3 className="flex font-black text-3xl">
        $
        {useIsClient() &&
          Array(text.length)
            .fill(0)
            .map((v, i) => (
              <TextTransition key={i} springConfig={presets.default}>
                {text[i]}
              </TextTransition>
            ))}
      </h3>

      <span>raised so far!</span>
    </div>
  );
}