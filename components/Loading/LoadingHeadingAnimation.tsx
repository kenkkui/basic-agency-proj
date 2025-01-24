"use client";

import parseEasing from "@/utils/parseEasing";
import { m } from "framer-motion";

interface LoadingHeadingAnimationProps {
  children?: React.ReactNode;
}

const LoadingHeadingAnimation = ({
  children,
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
    >
      {children}
    </m.div>
  );
};

export default LoadingHeadingAnimation;
