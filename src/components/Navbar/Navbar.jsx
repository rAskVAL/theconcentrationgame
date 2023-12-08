import { Link, NavLink } from "react-router-dom";
import { Navlinks } from "../../constants/Index";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState();
  return (
    <header className="bg-primaryDark sticky top-0 w-full border-b-4 border-primaryGreen z-10">
      <nav className="p-4 container mx-auto flex justify-between items-center">
        <Link to="/" className="h-11">
          <img className="h-full" src="/img/logo.png" alt="logotype" />
        </Link>
        <ul className="md:flex hidden list-none gap-4 text-white items-center">
          {Navlinks.map((link, index) =>
            link.special ? (
              <NavLink
                to={link.href}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "bg-opacity-10 hover:text-white text-white bg-primaryGreen py-2 px-3 rounded-lg transition-all border-2 border-primaryGreen font-semibold hover:border-opacity-30"
                    : "hover:bg-opacity-10 hover:border-opacity-100 hover:text-white bg-primaryGreen py-2 px-3 rounded-lg text-primaryDark border-2  font-semibold border-primaryGreen border-opacity-0  transition-all"
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
                    ? "hover:text-primaryGreen text-primaryGreen"
                    : "hover:text-primaryGreen "
                }
              >
                {link.title}
              </NavLink>
            )
          )}
        </ul>
        <i
          onClick={() => setIsOpen((curr) => !curr)}
          className="ti ti-menu-2 md:hidden block text-4xl"
        ></i>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100dvh", opacity: 1 }}
            exit={{ paddingTop: 0, height: 0, opacity: 0 }}
            className="flex flex-col overflow-hidden md:hidden absolute bg-primaryDark w-full h-[100dvh] p-4 z-30"
          >
            <ul className="flex flex-col md:hidden list-none gap-4 text-white">
              {Navlinks.map((link, index) => (
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to={link.href}
                  key={index}
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-primaryGreen w-full p-4 border-l bg-gradient-to-l from-primaryGreen via-primaryDark to-primaryDark border-primaryGreen"
                      : "hover:text-primaryGreen w-full p-4 border-l border-primaryGreen"
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
