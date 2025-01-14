import HomeBtn from "./HomeBtn";
import NavLinks from "./Link/NavLinks";
import NavMenu from "./NavMenu";

const Nav = () => {
  return (
    <nav className="fixed z-[40] w-full px-[80px] py-[50px] text-white leading-none bg-yellow-500">
      <main className="w-full flex justify-between items-center relative">
        <HomeBtn />

        <NavLinks />

        <NavMenu />
      </main>
    </nav>
  );
};

export default Nav;
