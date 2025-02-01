"use client";

import { useState } from "react";
import LoadingHeadingAnimation from "./LoadingHeadingAnimation";

interface BrandNameProps {
  hidden?: React.ReactNode;
  children?: React.ReactNode;
}

const BrandName = ({ children, hidden }: BrandNameProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <>
      {!animationComplete && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[128px] leading-[0.9] uppercase font-black tracking-tight">
          {hidden}

          <LoadingHeadingAnimation setAnimationComplete={setAnimationComplete}>
            {children}
          </LoadingHeadingAnimation>
        </div>
      )}
    </>
  );
};

export default BrandName;
