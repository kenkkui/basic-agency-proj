"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";

const CTABtn = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const btnRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    setPosition(() => {
      const newPosition = {
        x: e.clientX,
        y: e.clientY,
      };

      return newPosition;
    });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;

    const w = window.screen.width;
    const h = window.screen.height;

    console.log("w", w, "h", h);

    btnRef.current.animate(
      {
        left: "50%",
        top: "50%",
      },
      {
        duration: 400,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  };

  useEffect(() => {
    if (!btnRef.current || (position.x === 0 && position.y === 0)) return;

    btnRef.current.animate(
      {
        top: `${position.y}px`,
        left: `${position.x}px`,
      },
      {
        duration: 600,
        easing: "ease-out",
        fill: "forwards",
      }
    );
  }, [position]);

  return (
    <section
      className="w-screen h-screen fixed bg-pink-500"
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="aspect-square h-[120px] rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        ref={btnRef}
      >
        <button className="uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-tight tracking-wide cursor-none">
          <div className="font-bold text-med">Watch reel</div>
        </button>
        <div className="absolute bottom-[-10px] translate-y-full left-1/2 -translate-x-1/2 leading-tight text-med font-semibold text-white">
          <p>BASIC/DEPT®</p>
          <p>2010-∞</p>
        </div>
      </div>
    </section>
  );
};

export default CTABtn;
