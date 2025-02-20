import React, { useEffect, useRef, useState } from "react";
import { adminMenu, menu, MenuItems } from "./routes";
import { Link, useLocation } from "react-router";

// Sidebar interface
interface SidebarProps {
  onClose: () => void;
}

// Expand icon
const Plus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
  </svg>
);

// Collapse icon
const Minus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
  </svg>
);

function MenuDropDown({ menu }: { menu: MenuItems }) {
  const location = useLocation();
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);
  const [isCollapse, setIsCollapse] = useState<boolean>(() => {
    return (
      menu?.children?.some((child) => location.pathname.includes(child.path)) ??
      false
    );
  });

  useEffect(() => {
    const isActive = menu?.children?.some((child) =>
      location.pathname.includes(child.path)
    );
    if (isActive) setIsCollapse(true);
  }, [location.pathname, menu]);

  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [location.pathname]);

  return (
    <section className="w-full">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-x-4 text-gray-400 font-poppins p-2"
        onClick={() => setIsCollapse(!isCollapse)}
        aria-expanded={isCollapse}
      >
        <p aria-label={menu.title} className="truncate">
          {menu.title}
        </p>
        <span aria-label="expand-or-collapse">
          {isCollapse ? <Minus /> : <Plus />}
        </span>
      </button>

      {isCollapse && (
        <nav className="flex flex-col gap-y-2 w-full" aria-label={menu.title}>
          {menu?.children?.map((child, idx) => (
            <Link
              key={idx}
              to={`${
                menu.title === "SMS Campaigns" || menu.title === "Appointments"
                  ? "/"
                  : ""
              }${child.path}`}
              ref={
                location.pathname.includes(child.path) ? activeLinkRef : null
              }
              className={`flex items-center gap-x-2 px-2 py-1 border-l-2 font-poppins truncate w-full xl:text-[16px] text-sm ${
                location.pathname.includes(child.path)
                  ? "border-l-base text-base"
                  : "border-l-transparent"
              }`}
            >
              {child.icon && (
                <img src={child.icon} alt={`${child.title} icon`} />
              )}
              <p className="truncate">{child.title}</p>
            </Link>
          ))}
        </nav>
      )}
    </section>
  );
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <aside className="w-full h-full flex flex-col gap-y-4 overflow-auto p-4">
      <div className="flex items-center justify-between gap-x-4">
        {/* <Link to="/">
          <img src="/logo.svg" alt="exkoo-logo" id="logo" />
        </Link> */}

        <button
          type="button"
          onClick={onClose}
          className="md:opacity-50 md:cursor-not-allowed"
        >
          <img
            src="/sidebar-collapse.svg"
            alt="sidebar-collapse"
            id="sidebar-collapse"
          />
        </button>
      </div>

      <hr />

      <div className="h-full w-full overflow-y-auto flex flex-col gap-y-4 scrollbar-hide">
        {adminMenu.map((item, index) => (
          <Link to={item?.label} key={index}>
            {item?.label}
          </Link>
          // <MenuDropDown key={index} menu={item} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
