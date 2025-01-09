import Link from "next/link";

const navNames = ["work", "about", "news", "thinking", "careers", "contact"];
const menu = "...";

const Nav = () => {
  return (
    <nav className="fixed w-full px-[80px] py-[50px] text-white leading-none">
      <main className="w-full flex justify-between items-center relative">
        <h1 className="font-bold text-[25px] select-none">BASIC/DEPT®</h1>

        <ul className="flex gap-[60px] text-med absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {navNames.map((nav, i) => {
            return (
              <li key={i}>
                <Link href={nav}>{nav.toUpperCase()}</Link>
              </li>
            );
          })}
        </ul>

        <aside className="flex gap-[2px]">
          {menu.split("").map((_, i) => {
            return (
              <div
                className="w-[5.2px] aspect-square rounded bg-white"
                key={i}
              />
            );
          })}
        </aside>
      </main>
    </nav>
  );
};

export default Nav;
