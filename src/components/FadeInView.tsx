import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

function FadeInView({ fade = false, x = 0, y = 0, delay = 0.4, duration = 0.2, margin = "0px 0px", children }: { fade?: boolean, x?: number, y?: number, delay?: number, duration?: number, margin?: string, children: ReactNode }) {
  const ref = useRef(null);
  const isInView = margin == "0px 0px" ? true : useInView(ref, { margin: margin });

  return (
    <motion.div
      initial={{ x: x, y: y }}
      whileInView={{ x: 0, y: 0 }}
      // animate={isInView ? "visible" : "hidden"}
      transition={{ delay: delay, duration: duration, ease: "easeInOut", once: true }}
      variants={{
        visible: { opacity: fade ? 1 : 0},
        hidden: { opacity: fade ? 0 : 1 }
      }}
      ref={ref}
    >
      { children }
    </motion.div>
  );
}

export default FadeInView;