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
      <video
        autoPlay
        muted
        loop
        className="fixed opacity-10 h-[120dvh] overflow-hidden md:block hidden -z-10"
      >
        <source src="/public/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
