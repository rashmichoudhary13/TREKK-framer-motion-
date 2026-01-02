import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = ({ scale = 1}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]"
      style={{
        backgroundColor: "white",
        mixBlendMode: "difference",
      }}
      animate={{
        x: pos.x - 12,
        y: pos.y - 12,
        scale,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    />
  );
};

export default Cursor;
