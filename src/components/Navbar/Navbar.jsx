import { Link, NavLink } from "react-router-dom";
import { Navlinks } from "../../constants/Index";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState();
  return (
    <header className="sticky top-0 z-10 w-full border-b-4 border-primaryGreen bg-primaryDark">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="h-11">
          <img className="h-full" src="/img/logo.png" alt="logotype" />
        </Link>
        <ul className="hidden list-none items-center gap-4 text-white md:flex">
          {Navlinks.map((link, index) =>
            link.special ? (
              <NavLink
                to={link.href}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg border-2 border-primaryGreen bg-primaryGreen bg-opacity-10 px-3 py-2 font-semibold text-white transition-all hover:border-opacity-30 hover:text-white"
                    : "rounded-lg border-2 border-primaryGreen border-opacity-0 bg-primaryGreen px-3 py-2 font-semibold text-primaryDark  transition-all hover:border-opacity-100 hover:bg-opacity-10  hover:text-white"
                }
              >
                {link.title}
              </NavLink>
            ) : (
              <NavLink
                to={link.href}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "text-primaryGreen hover:text-primaryGreen"
                    : "hover:text-primaryGreen "
                }
              >
                {link.title}
              </NavLink>
            ),
          )}
        </ul>
        <i
          onClick={() => setIsOpen((curr) => !curr)}
          className="ti ti-menu-2 block text-4xl md:hidden"
        ></i>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100dvh", opacity: 1 }}
            exit={{ paddingTop: 0, height: 0, opacity: 0 }}
            className="absolute z-30 flex h-[100dvh] w-full flex-col overflow-hidden bg-primaryDark p-4 md:hidden"
          >
            <ul className="flex list-none flex-col gap-4 text-white md:hidden">
              {Navlinks.map((link, index) => (
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to={link.href}
                  key={index}
                  className={({ isActive }) =>
                    isActive
                      ? "w-full border-l border-primaryGreen bg-gradient-to-l from-primaryGreen via-primaryDark to-primaryDark p-4 hover:text-primaryGreen"
                      : "w-full border-l border-primaryGreen p-4 hover:text-primaryGreen"
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
