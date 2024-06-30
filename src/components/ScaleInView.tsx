"use client";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

function ScaleInView({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: isInView ? 1 : 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      ref={ref}
    >
      { children }
    </motion.div>
  );
}

export default ScaleInView;