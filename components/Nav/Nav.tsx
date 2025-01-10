import HomeBtn from "./HomeBtn";
import NavLinks from "./NavLinks";
import NavMenu from "./NavMenu";

const Nav = () => {
  return (
    <nav className="fixed w-full px-[80px] py-[50px] text-white leading-none">
      <main className="w-full flex justify-between items-center relative">
        <HomeBtn />

        <NavLinks />

        <NavMenu />
      </main>
    </nav>
  );
};

export default Nav;
