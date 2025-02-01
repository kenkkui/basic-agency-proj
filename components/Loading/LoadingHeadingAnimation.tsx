"use client";

import parseEasing from "@/utils/parseEasing";
import { m } from "framer-motion";
import React from "react";

interface LoadingHeadingAnimationProps {
  children?: React.ReactNode;
  setAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingHeadingAnimation = ({
  children,
  setAnimationComplete,
}: LoadingHeadingAnimationProps) => {
  return (
    <m.div
      className="absolute top-0 left-0 overflow-hidden"
      initial={{ height: "100%" }}
      animate={{ height: 0 }}
      transition={{
        duration: 0.62,
        delay: 0.2,
        ease: parseEasing("expo.inOut"),
      }}
      onAnimationComplete={() => setAnimationComplete(true)}
    >
      {children}
    </m.div>
  );
};

export default LoadingHeadingAnimation;
