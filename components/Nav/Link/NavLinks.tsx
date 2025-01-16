"use client";

import Link from "next/link";
import { useState } from "react";
import NavLinkAFTER from "./NavLinkAFTER";

const navNames = ["work", "about", "news", "thinking", "careers", "contact"];

const NavLinks = () => {
  const [isMouseEnter, setIsMouseEnter] = useState<number | null>(null);
  const [keyCounter, setKeyCounter] = useState(0);

  const handleMouseOver = (value: number | null) => {
    setIsMouseEnter(value);
    updateKeyCounter();
  };

  const updateKeyCounter = () => {
    setKeyCounter((prev) => {
      return (prev + 1) % 4;
    });
  };

  return (
    <ul className="flex gap-[60px] text-med absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-wide">
      {navNames.map((nav, i) => {
        return (
          <li
            className="overflow-x-clip relative"
            key={i}
            onMouseEnter={() => handleMouseOver(i)}
            onMouseLeave={() => setIsMouseEnter(null)}
          >
            <Link href={nav} className="leading-none">
              {nav.toUpperCase()}
            </Link>
            <NavLinkAFTER
              isMouseEnter={isMouseEnter}
              keyCounter={keyCounter}
              id={i}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
