import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

function FadeInView({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: 1, duration: 0.3, ease: "easeInOut" }}
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