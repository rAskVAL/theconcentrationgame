import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function AppLayout() {
  return (
    <div className="flex flex-col justify-between min-h-[100dvh]">
      <Navbar />
      <main className="h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
