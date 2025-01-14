"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import NavLinkAFTER from "./NavLinkAFTER";

const navNames = ["work", "about", "news", "thinking", "careers", "contact"];

const NavLinks = () => {
  const [isMouseEnter, setIsMouseEnter] = useState<number | null>(null);
  return (
    <ul className="flex gap-[60px] text-med absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-wide">
      {navNames.map((nav, i) => {
        return (
          <li
            className="overflow-hidden"
            key={i}
            onMouseEnter={() => setIsMouseEnter(i)}
            onMouseLeave={() => setIsMouseEnter(null)}
          >
            <Link href={nav} className="leading-none">
              {nav.toUpperCase()}
            </Link>
            <NavLinkAFTER isMouseEnter={isMouseEnter} id={i} />
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
