"use client";

import { m } from "framer-motion";
import Background from "./Background";
import parseEasing from "@/utils/parseEasing";

interface TransitionBackgroundProps {
  animationComplete: boolean;
}

const TransitionBackground = ({
  animationComplete,
}: TransitionBackgroundProps) => {
  return (
    <m.section
      className="sticky w-screen overflow-hidden bg-yellow-400"
      initial={{ height: "100vh" }}
      animate={animationComplete ? { height: 0 } : undefined}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: parseEasing("expo.inOut"),
      }}
    >
      {/* <Background /> */}
    </m.section>
  );
};

export default TransitionBackground;
