import { useNavigate, useLocation, Link } from "react-router";

import { HiOutlineMenuAlt2 } from "react-icons/hi";

import DropdownUser from "../../components/header/User";

interface NavbarProps {
  onToggleSidebar: () => void;
}

// Previous icon
const Previous = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-5"
    >
      <path
        fillRule="evenodd"
        d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

// Next icon
const Next = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-5"
    >
      <path
        fillRule="evenodd"
        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

// History
const History: React.FC = () => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate(-1); // Navigate to the previous route
  };

  const handleNext = () => {
    navigate(1); // Navigate to the next route
  };

  return (
    <div className=" items-center gap-x-1 lg:flex hidden">
      <button
        type="button"
        onClick={handlePrevious}
        className="border rounded-circle bg-white"
      >
        <Previous />
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="border rounded-circle bg-white"
      >
        <Next />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

// Breadcrumb
const Breadcrumb = () => {
  const location = useLocation();

  let currentLocation = "";

  return (
    <p className="lg:flex items-center gap-x-1 hidden">
      {location.pathname
        .split("/")
        .filter((crumb) => crumb !== "")
        .map((crumb, index, array) => {
          currentLocation += `/${crumb}`;
          return (
            <span className="flex items-center">
              <Link
                key={crumb}
                to={currentLocation}
                className="tracking-wider font-poppins text-sm capitalize hover:underline"
              >
                {crumb
                  .replace(/^\//, "")
                  .split("/")
                  .map((segment) => segment.replace(/-/g, " "))
                  .join("/")}
              </Link>

              {index < array.length - 1 && <span className="ml-1">/</span>}
            </span>
          );
        })}
    </p>
  );
};

const Header: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <header className="border-b flex justify-between items-center gap-x-4 p-4">
      <div className="flex items-center gap-x-2.5">
        {/* history */}
        <History />

        <div className="flex items-center justify-between px-4 py-2 lg:hidden">
          <button onClick={onToggleSidebar}>
            <HiOutlineMenuAlt2 className="h-5 w-5" />
          </button>
        </div>

        {/* divider */}
        <span className="border-l border-gray-400 h-4 lg:block hidden" />

        {/* path name */}
        <Breadcrumb />
      </div>

      <div className="flex items-center gap-x-4">
        {/* Profile */}
        <DropdownUser />
      </div>
    </header>
  );
};

export default Header;
