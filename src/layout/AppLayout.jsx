import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function AppLayout() {
  return (
    <div className="flex min-h-[100dvh] flex-col justify-between">
      <Navbar />
      <main className="h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
