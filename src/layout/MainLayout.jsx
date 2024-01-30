import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero/Hero";
import { Footer } from "../components/footer/Footer";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
};
