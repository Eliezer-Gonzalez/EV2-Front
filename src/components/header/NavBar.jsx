import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "Municipio", href: "#" },
  { label: "Unidades Municipales", href: "#" },
  { label: "Contactos", href: "#contacto" },
];

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navLink = (label, href, onClick) => (
    <a
      href={href}
      onClick={onClick}
      className="relative inline-block font-bold text-white hover:text-[#0071A9]
        before:absolute before:-inset-3 before:block before:-skew-y-3 before:bg-amber-300
        before:opacity-0 hover:before:opacity-100 before:transition before:duration-300
        px-2 sm:text-lg lg:text-xl text-2xl"
    >
      <span className="relative z-10">{label}</span>
    </a>
  );

  return (
    <>
      {/* Desktop Nav */}
      <ul className="items-center hidden lg:flex space-x-2 lg:space-x-8 md:mt-0 text-base sm:text-lg md:text-xl lg:text-2xl">
        {links.map(link => (
          <li key={link.label}>
            {navLink(link.label, link.href)}
          </li>
        ))}
      </ul>
      {/* Mobile Hamburger */}
      <button
        className="lg:hidden ml-2"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <GiHamburgerMenu className="text-white text-3xl" />
      </button>
      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-25 left-0 w-full bg-cuarto z-50 flex flex-col items-center py-6 shadow-lg lg:hidden animate-fade-in">
          <ul className="flex flex-col space-y-4 w-full text-lg">
            {links.map(link => (
              <li key={link.label} className="w-full text-center">
                {navLink(link.label, link.href, () => setOpen(false))}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}