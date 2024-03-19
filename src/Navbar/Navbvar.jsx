import navbarItems from "./navbarItems";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-end items-center gap-8">
        <ul className="flex justify-end items-center gap-8">
          {navbarItems.map(({ id, label }) => (
            <li key={id}>
              <a className="text-sm" href={`#${id}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p>
          <a className="text-sm" href="#resume">
            Resume
          </a>
        </p>
      </nav>
    </header>
  );
};

export default Navbar;
