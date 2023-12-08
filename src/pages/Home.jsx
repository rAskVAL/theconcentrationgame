import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-10">
      <motion.img
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        src="/img/logo.png"
        alt="logo"
      />
      <h1 className="mt-10 text-center uppercase">
        Welcome to the concentration game! To start a game please press{" "}
        <Link className="text-primaryGreen underline" to="/play">
          here
        </Link>
      </h1>
      <img
        src="/picture.gif"
        className="fixed -z-10 h-[120dvh] overflow-hidden object-cover opacity-10"
      ></img>
    </div>
  );
}
