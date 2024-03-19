import navbarItems from "./navbarItems";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-end items-center gap-8 mt-5 mr-12">
        <ul className="flex justify-end items-center gap-8">
          {navbarItems.map(({ id, label, span }) => (
            <li key={id}>
              <a className="text-sm text-color3 font-semibold" href={`#${id}`}>
                <span className="text-color4 font-medium text-xs">{span}</span>{" "}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <p className="p-3 w-24 h-10 flex justify-center items-center border-2 rounded-[0.3rem] border-color3 shadow-xl">
          <a className="text-sm font-semibold text-color4 2" href="#resume">
            Resume
          </a>
        </p>
      </nav>
    </header>
  );
};

export default Navbar;
