"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

function FadeInView({ fade = false, x = 0, y = 0, delay = 0.4, duration = 0.2, margin = "0px 0px", children }: { fade?: boolean, x?: number, y?: number, delay?: number, duration?: number, margin?: string, children: ReactNode }) {
  // const ref = useRef(null);
  // const isInView = margin == "0px 0px" ? true : useInView(ref, { margin: margin });

  return (
    <motion.div
      initial={{ x: x, y: y, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      // animate={isInView ? "visible" : "hidden"}
      transition={{ delay: delay, duration: duration, ease: "easeInOut", once: true }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
    >
      { children }
    </motion.div>
  );
}

export default FadeInView;