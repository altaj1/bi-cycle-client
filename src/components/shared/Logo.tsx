import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="text-2xl font-bold flex items-center">
      <span className="text-red-500">C</span>ycleCity
    </Link>
  );
};

export default Logo;
