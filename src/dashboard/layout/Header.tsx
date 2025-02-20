import { useNavigate, useLocation, Link } from "react-router";

import OutsideClick from "../../components/shared/OutsideClick";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import Cookies from "js-cookie";
import DropdownUser from "../../components/header/User";

interface NavbarProps {
  onToggleSidebar: () => void;
}

// Notification icon
const Notification = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-6 text-base"
    >
      <path
        fillRule="evenodd"
        d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6ZM8.05 14.943a33.54 33.54 0 0 0 3.9 0 2 2 0 0 1-3.9 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

// Pricing
const Pricing = () => {
  return (
    <button
      type="button"
      className="font-poppins bg-base text-white px-4 py-2 rounded lg:block hidden whitespace-nowrap"
      onClick={() =>
        toast("Pricing coming soon!", {
          id: "pricing",
          icon: "📢",
        })
      }
    >
      Upgrade Plan
    </button>
  );
};

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

// To do
const Todo = () => {
  return (
    <button
      type="button"
      className="lg:flex hidden gap-x-2 items-center font-poppins bg-[#fee6d2] font-bold px-4 py-2 rounded whitespace-nowrap "
      onClick={() =>
        toast("Todo coming soon!", {
          id: "todo",
          icon: "📢",
        })
      }
    >
      <img src="/assets/header/todo-dots.svg" alt="todo-dots" />
      To Do
    </button>
  );
};

// Search bar
const Searchbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative space-y-1">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="🔍 Search here..."
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        aria-label="Search"
        aria-describedby="search"
        aria-controls="search"
        aria-autocomplete="list"
        aria-live="polite"
        aria-activedescendant="search"
        aria-owns="search"
        aria-busy="false"
        aria-disabled="false"
        className="form-input bg-base/5 rounded border-0 focus:ring-0 !w-full lg:block hidden"
        onFocus={() => setIsVisible(true)}
      />

      {isVisible && (
        <OutsideClick
          onOutsideClick={() => setIsVisible(false)}
          className="absolute w-full bg-white rounded p-4 z-50 border overflow-auto max-h-96"
        >
          <p className="overflow-y-auto h-full w-full font-poppins">
            No search found 🐸
          </p>
        </OutsideClick>
      )}
    </div>
  );
};

// Notification
const Notify = () => {
  return (
    <button
      type="button"
      className="flex gap-x-2 items-center font-poppins bg-base/10 font-bold p-2 rounded-circle whitespace-nowrap relative"
      onClick={() =>
        toast("Notification coming soon!", {
          id: "notification",
          icon: "📢",
        })
      }
    >
      {/* <Notification /> */}
      <span className="sr-only">Notification</span>

      <span className="absolute top-2 right-2 bg-red-500 h-2 w-2 rounded-circle">
        <span className="sr-only">Notification count</span>
      </span>
    </button>
  );
};

// Profile
// const Profile = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const { logOutUser, data, loading, error } = useLogout();

//   console.log(data, "logout response");

//   useEffect(() => {
//     if (loading) {
//       toast.loading("Please, wait while loading...", { id: "logOutUser" });
//     }

//     if (!loading && data && data.logOutUser.acknowledgement) {
//       toast.success(data.logOutUser.message, { id: "logOutUser" });

//       Cookies.remove("accessToken");
//       Cookies.remove("refreshToken");
//       window.location.replace("/");
//     }

//     if (!loading && data && !data.logOutUser.acknowledgement) {
//       toast.error(data.logOutUser.message, { id: "logOutUser" });
//     }

//     if (!loading && error) {
//       toast.error(error.message, { id: "logOutUser" });
//     }

//     // Add specific dependencies instead of functions like resetForm and resetState
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [data, loading, error]);

//   const items = [
//     {
//       id: "my-profile",
//       name: "My Profile",
//       icon: "/assets/header/my-profile.svg",
//     },
//     {
//       id: "my-subscription",
//       name: "My Subscription",
//       icon: "/assets/header/my-subscription.svg",
//     },
//     {
//       id: "billing-and-invoice",
//       name: "Billing and Invoice",
//       icon: "/assets/header/billing-and-invoice.svg",
//     },
//   ];

//   return (
//     <button type="button" className="relative">
//       <img
//         src="https://i.pravatar.cc/150"
//         alt="avatar"
//         width={40}
//         height={40}
//         className="rounded-circle"
//         onClick={() => setIsVisible(!isVisible)}
//       />
//       <span className="sr-only">User Avatar</span>

//       {isVisible && (
//         <OutsideClick
//           onOutsideClick={() => setIsVisible(false)}
//           className="absolute top-full right-0 h-fit w-44 p-2 bg-white rounded shadow z-50"
//         >
//           <div className="flex flex-col h-full w-full">
//             {items.map((item) => (
//               <button
//                 type="button"
//                 key={item.id}
//                 className="flex items-center gap-x-2 font-poppins text-sm whitespace-nowrap p-2 w-full hover:bg-base/5"
//                 onClick={() =>
//                   toast(`${item.name} coming soon!`, {
//                     id: item.id,
//                     icon: "📢",
//                   })
//                 }
//               >
//                 <img src={item.icon} alt={item.name} />
//                 {item.name}
//               </button>
//             ))}

//             {/* Mak the logout button */}
//             <button
//               type="button"
//               className="flex items-center gap-x-2 font-poppins text-sm whitespace-nowrap p-2 w-full hover:bg-base/5"
//               onClick={logOutUser}
//             >
//               <img src="/assets/header/logout.svg" alt="logout" />
//               Logout
//             </button>
//           </div>
//         </OutsideClick>
//       )}
//     </button>
//   );
// };

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
          {/* <button variant="ghost" size="icon" onClick={onToggleSidebar}>
            <HiOutlineMenuAlt2 className="h-5 w-5" />
          </button> */}
        </div>

        {/* divider */}
        <span className="border-l border-gray-400 h-4 lg:block hidden" />

        {/* path name */}
        <Breadcrumb />
      </div>

      <div className="flex items-center gap-x-4">
        {/* search bar */}
        <Searchbar />

        {/* Upgrade */}
        <Pricing />

        {/* Notification */}
        <Notify />

        {/* Profile */}
        <DropdownUser />
      </div>
    </header>
  );
};

export default Header;
