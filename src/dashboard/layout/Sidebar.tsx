import { adminMenu, userMenu } from "./routes";
import { Link } from "react-router";
import Logo from "../../components/shared/Logo";
import { MdFilterListOff } from "react-icons/md";
import { useGlobalContext } from "../../components/GlobalContext/GlobalProvider";
// Sidebar interface
interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const { user } = useGlobalContext();
  console.log({ user });
  return (
    <aside className="w-full h-full flex flex-col gap-y-4 overflow-auto p-4">
      <div className="flex items-center justify-between gap-x-4 mb-3">
        <Link to={"/"}>
          {" "}
          <Logo />
        </Link>

        <button
          type="button"
          onClick={onClose}
          className="md:opacity-50 md:cursor-not-allowed text-2xl"
        >
          <MdFilterListOff />
        </button>
      </div>

      <hr />

      <div className="h-full w-full overflow-y-auto flex flex-col gap-y-4 scrollbar-hide">
        {user?.role === "admin"
          ? adminMenu.map((item, index) => (
              <Link
                className="text-lg font-semibold"
                to={item?.path}
                key={index}
              >
                {item?.label}
              </Link>
            ))
          : userMenu.map((item, index) => (
              <Link
                className="text-lg font-semibold"
                to={item?.path}
                key={index}
              >
                {item?.label}
              </Link>
            ))}
      </div>
    </aside>
  );
};

export default Sidebar;
