import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeInView({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px 350px 0px" });

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 1, ease: "easeInOut" }}
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