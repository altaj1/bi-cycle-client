import { Outlet } from "react-router-dom";
import Navbar from "../header/Navebar";
import Footer from "../shared/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
