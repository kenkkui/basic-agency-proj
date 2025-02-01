"use client";

import { m } from "framer-motion";

const StaticBackground = () => {
  return (
    <div className="overflow-hidden relative w-screen h-screen">
      <m.div
        className="bg-[url(/assets/white_noise.jpg)] bg-repeat position absolute inset-[-200%] opacity-[2%]"
        initial={{ translateX: "10%", translateY: "10%" }}
        animate={{ translateX: "-10%", translateY: "-10%" }}
        style={{ scale: 0.3 }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          ease: "linear",
          fill: "both",
        }}
      />
    </div>
  );
};

export default StaticBackground;
