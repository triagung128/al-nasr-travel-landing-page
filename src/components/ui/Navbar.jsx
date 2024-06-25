import { useEffect, useState } from "react";

import clsx from "clsx";
import PropTypes from "prop-types";

import icClose from "../../assets/icons/ic_close.svg";
import icMenu from "../../assets/icons/ic_menu.svg";
import logo from "../../assets/logo_text.svg";
import Button from "./Button";
import Container from "./Container";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [colorNavbar, setColorNavbar] = useState(false);

  const changeBackgroundColorNavbar = () => {
    if (window.scrollY >= 64) {
      setColorNavbar(true);
    } else {
      setColorNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColorNavbar);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColorNavbar);
    };
  }, []);

  return (
    <nav
      className={clsx("sticky top-0 z-50 mt-6 py-4 lg:mt-16", {
        "bg-white shadow": colorNavbar,
      })}
    >
      <Container className="flex items-center justify-between">
        <img src={logo} alt="Logo Al-Nasr" className="w-20 lg:w-24 xl:w-auto" />
        <div className="hidden lg:block">
          <ul className="flex flex-1 items-center gap-11 text-base font-medium leading-[0.64] text-black-nav-menu xl:text-xl">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Package</a>
            </li>
            <li>
              <a href="">Facilities</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
          </ul>
        </div>
        <Button className="hidden lg:block">Contact us</Button>
        <button
          className="lg:hidden"
          onClick={() => setShowMenu((showMenu) => !showMenu)}
        >
          <img src={icMenu} />
        </button>
      </Container>
      <div
        className={clsx(
          "fixed inset-0 z-10 flex h-lvh justify-end bg-black/50",
          {
            hidden: !showMenu,
            block: showMenu,
          },
        )}
      >
        <div
          className={clsx(
            "flex h-full w-4/5 flex-col items-end gap-8 bg-white p-6 sm:w-3/5",
          )}
        >
          <button onClick={() => setShowMenu((showMenu) => !showMenu)}>
            <img src={icClose} />
          </button>
          <ul className="flex w-full flex-col gap-4">
            <NavbarMenuMobile href="" text="Home" />
            <NavbarMenuMobile href="" text="About Us" />
            <NavbarMenuMobile href="" text="Package" />
            <NavbarMenuMobile href="" text="Facilities" />
            <NavbarMenuMobile href="" text="Gallery" />
          </ul>
          <Button>Contact us</Button>
        </div>
      </div>
    </nav>
  );
};

const NavbarMenuMobile = ({ text, href }) => (
  <li>
    <a
      href={href}
      className="block w-full rounded-lg bg-green px-4 py-4 text-green-dark"
    >
      {text}
    </a>
  </li>
);

NavbarMenuMobile.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};

export default Navbar;
