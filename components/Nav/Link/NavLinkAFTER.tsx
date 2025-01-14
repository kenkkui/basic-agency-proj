"use client";

import { AnimatePresence, m } from "framer-motion";

interface NavLinkAFTER {
  isMouseEnter: number | null;
  id: number;
}

const NavLinkAFTER = ({ isMouseEnter, id }: NavLinkAFTER) => {
  return (
    <AnimatePresence>
      {isMouseEnter === id && (
        <m.div
          className="w-full h-[1px] bg-white"
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
