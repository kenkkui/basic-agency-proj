import Link from "next/link";

const navNames = ["work", "about", "news", "thinking", "careers", "contact"];

const NavLinks = () => {
  return (
    <ul className="flex gap-[60px] text-med absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-wide">
      {navNames.map((nav, i) => {
        return (
          <li key={i}>
            <Link href={nav}>{nav.toUpperCase()}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
