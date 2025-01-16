"use client";

import { AnimatePresence, m } from "framer-motion";

interface NavLinkAFTER {
  isMouseEnter: number | null;
  id: number;
  keyCounter: number;
}

const NavLinkAFTER = ({ isMouseEnter, id, keyCounter }: NavLinkAFTER) => {
  return (
    <AnimatePresence mode="wait">
      {isMouseEnter === id && (
        <m.div
          key={id + keyCounter}
          className="w-full h-[1px] bg-white absolute left-0 -bottom-[2px]"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.2 }}
        />
      )}
    </AnimatePresence>
  );
};

export default NavLinkAFTER;
