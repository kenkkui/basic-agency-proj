"use client";

import BrandName from "./BrandName";
import TransitionBackground from "../Background/TransitionBackground";
import { useState } from "react";

interface LoadingProps {
  hiddenText: React.ReactNode;
  shownText: React.ReactNode;
}

const Loading = ({ hiddenText, shownText }: LoadingProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <section className="w-screen h-screen">
      <TransitionBackground animationComplete={animationComplete} />

      <BrandName
        hidden={hiddenText}
        animationComplete={animationComplete}
        setAnimationComplete={setAnimationComplete}
      >
        {shownText}
      </BrandName>
    </section>
  );
};

export default Loading;
