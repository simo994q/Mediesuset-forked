import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero/Hero";

export const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Outlet />
    </main>
  );
};
