// src/components/effects/WaterDrops.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const WaterDrops = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      setClicks((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: e.clientX || e.touches[0].clientX,
          y: e.clientY || e.touches[0].clientY,
        },
      ]);

      setTimeout(() => {
        setClicks((prev) => prev.slice(1));
      }, 1000);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleClick);
    };
  }, []);

  const waterDropVariants = {
    initial: { scale: 0, opacity: 1 },
    animate: { scale: 2, opacity: 0 },
  };

  return (
    <AnimatePresence>
      {clicks.map((click) => (
        <motion.div
          key={click.id}
          className="water-drop"
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
          variants={waterDropVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "fixed",
            left: click.x - 20,
            top: click.y - 20,
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "2px solid #72e0d1",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      ))}
    </AnimatePresence>
  );
};

export default WaterDrops;
