import logo from "../assets/logo-gry.png";

const links = [
  { label: "About Me", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Experiences", href: "#experiences" },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-brand-blue">
      <div className="mx-auto flex h-[140px] max-w-[1440px] items-center justify-between px-[90px]">
        <a href="#hero">
          <img src={logo} alt="gry. logo" className="h-[33px] w-auto" />
        </a>
        <div className="flex items-center gap-[21px]">
          <ul className="flex items-center gap-[50px] p-[10px] text-xl font-bold text-brand-light">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-brand-yellow">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="block rounded-[5px] bg-brand-cream p-[2px]"
          >
            <span className="flex h-[52px] w-[147px] items-center justify-center rounded-[4px] bg-brand-blue text-xl font-bold text-brand-cream">
              Contact Me
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
