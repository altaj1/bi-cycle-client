import { Outlet } from "react-router-dom";
import Navbar from "../header/Navebar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
