import { useEffect, useState } from "react";

import clsx from "clsx";

import { navLink } from "../../data/nav-link";
import Container from "../ui/Container";
import CustomButton from "../ui/CustomButton";
import IcClose from "/icons/ic_close.svg";
import IcMenu from "/icons/ic_menu.svg";
import Logo from "/logo_txt.svg";

const Navbar = () => {
  const sectionDefault = navLink[0].href.replace("#", "");

  const [active, setActive] = useState(sectionDefault);
  const [showMenu, setShowMenu] = useState(false);
  const [colorNavbar, setColorNavbar] = useState(false);

  useEffect(() => {
    const setActiveWhenScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = sectionDefault;

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
          currentSection = section.id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", setActiveWhenScroll);
    return () => window.removeEventListener("scroll", setActiveWhenScroll);
  }, [sectionDefault]);

  useEffect(() => {
    const changeBackgroundColorNavbar = () => {
      if (window.scrollY >= 64) {
        setColorNavbar(true);
      } else {
        setColorNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackgroundColorNavbar);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColorNavbar);
    };
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    setActive(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={clsx("sticky top-0 z-50 mt-6 py-4 lg:mt-16", {
        "bg-white shadow": colorNavbar,
      })}
    >
      <Container className="flex items-center justify-between">
        <a href="/">
          <img
            src={Logo}
            alt="Logo Al-Nasr"
            className="w-20 md:w-24 lg:w-28 xl:w-auto"
            width={143}
            height={71}
          />
        </a>
        <div className="hidden lg:block">
          <ul className="flex flex-1 items-center gap-7 xl:gap-11">
            {navLink.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href.replace("#", ""))}
                  className={clsx(
                    "font-medium leading-[0.64] text-black-nav-menu transition-colors duration-300 hover:text-orange xl:text-xl",
                    {
                      "text-orange": link.href.replace("#", "") === active,
                    },
                  )}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <CustomButton className="hidden lg:block">Contact us</CustomButton>
        <button
          aria-label="Show Menu Navigation"
          className="lg:hidden"
          onClick={() => setShowMenu((showMenu) => !showMenu)}
        >
          <img
            src={IcMenu}
            className="sm:w-8"
            alt="Menu Icon"
            width={24}
            height={24}
          />
        </button>
      </Container>

      {/* Div ini digunakan sebagai overlay pada sebuah navbar */}
      <div
        className={clsx("fixed inset-0 z-10 bg-black bg-opacity-50", {
          hidden: !showMenu,
          block: showMenu,
        })}
        onClick={() => setShowMenu((showMenu) => !showMenu)}
      />
      <div
        className={clsx(
          "fixed right-0 top-0 z-20 flex h-dvh w-4/5 transform flex-col items-end gap-8 bg-white p-6 transition-transform duration-300 ease-in-out sm:px-16",
          {
            "translate-x-full": !showMenu,
            "translate-x-0": showMenu,
          },
        )}
      >
        <button
          aria-label="Close Menu"
          onClick={() => setShowMenu((showMenu) => !showMenu)}
        >
          <img
            src={IcClose}
            className="sm:w-8"
            alt="Close Icon"
            width={24}
            height={24}
          />
        </button>
        <div className="w-full overflow-y-auto">
          <ul className="mb-4 flex w-full flex-col gap-4">
            {navLink.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setShowMenu((showMenu) => !showMenu)}
                  className={clsx(
                    "block w-full rounded-lg bg-green px-4 py-4 text-green-dark",
                    { "text-orange": link.href.replace("#", "") === active },
                  )}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <CustomButton>Contact us</CustomButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
