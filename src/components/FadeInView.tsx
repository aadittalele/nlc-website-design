"use client";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

function FadeInView({ fade = false, x = 0, y = 0, delay = 0.4, duration = 0.2, margin = "0px 0px", children }: { fade?: boolean, x?: number, y?: number, delay?: number, duration?: number, margin?: string, children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <motion.div
      initial={{ x: x, y: y, opacity: 0 }}
      whileInView={isInView ? { x: 0, y: 0, opacity: 1 } : { x: x, y: y, opacity: 0 }}
      // animate={isInView ? "visible" : "hidden"}
      transition={{ delay: delay, duration: duration, ease: "easeInOut", once: true }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      ref={ref}
    >
      { children }
    </motion.div>
  );
}

export default FadeInView;