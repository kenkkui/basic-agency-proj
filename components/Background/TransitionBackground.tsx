"use client";

import { m } from "framer-motion";
import Background from "./Background";
import parseEasing from "@/utils/parseEasing";

const TransitionBackground = () => {
  return (
    <m.section
      className="fixed w-screen overflow-hidden"
      initial={{ height: "100vh" }}
      animate={{ height: "0vh" }}
      transition={{
        duration: 0.62,
        delay: 0.2,
        ease: parseEasing("expo.inOut"),
      }}
    >
      <Background />
    </m.section>
  );
};

export default TransitionBackground;
