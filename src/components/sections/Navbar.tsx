import { navLists } from "../../constants";
import { appleImg, bagImg, searchImg } from "../../utils";
import cn from "../../utils/cn";
const Navbar = () => {
  return (
    <section className="bg-black">
      <header className="mx-auto p-8 container flex justify-between items-center">
        <img width={20} height={17} src={appleImg} alt="apple-logo" />
        <ul className={cn("flex gap-4", "max-md:hidden")}>
          {navLists.map((list, i) => (
            <li
              key={i}
              className="cursor-pointer text-gray hover:text-white transition-all text-sm"
            >
              {list}
            </li>
          ))}
        </ul>
        <div className="gap-4 flex cursor-pointer items-baseline">
          <img width={20} height={20} src={searchImg} alt="search" />
          <img width={20} height={20} src={bagImg} alt="bag" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
