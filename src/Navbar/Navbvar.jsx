function Navbar() {
  const navbarItems = [
    "01. About",
    "02. Experience",
    "03. Projects",
    "04. Contact",
  ];

  return (
    <header>
      <nav>
        <ul>
          {navbarItems.map((section, index) => {
            const sectionName = section.slice(4).trim();
            return (
              <li key={index}>
                <a href={`#${sectionName.toLowerCase()}`}>{section}</a>
              </li>
            );
          })}
        </ul>
        <p>
          <a href="#resume">Resume</a>
        </p>
      </nav>
    </header>
  );
}

export default Navbar;
