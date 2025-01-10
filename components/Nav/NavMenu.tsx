const menu = "...";

const NavMenu = () => {
  return (
    <aside className="flex gap-[3px]">
      {menu.split("").map((_, i) => {
        return (
          <div className="w-[5.24px] aspect-square rounded bg-white" key={i} />
        );
      })}
    </aside>
  );
};

export default NavMenu;
