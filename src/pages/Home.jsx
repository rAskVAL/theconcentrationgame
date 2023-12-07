import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto px-10">
      <img src="/img/logo.png" alt="logo" />
      <h1 className="mt-10 uppercase text-center">
        Welcome to the concentration game! To start a game please press{" "}
        <Link className="text-primaryGreen" to="/play">
          here
        </Link>
      </h1>
      <img
        src="/picture.gif"
        className="fixed opacity-10 h-[120dvh] overflow-hidden object-cover -z-10"
      ></img>
    </div>
  );
}
