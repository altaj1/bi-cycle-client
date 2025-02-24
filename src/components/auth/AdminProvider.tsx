/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
interface AdminProviderProps {
  children: ReactNode;
}
const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();
  // const [isLoading, setIsLoading] = useState(true);
  console.log({ user });
  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    console.log({ accessToken });
    if (!accessToken) {
      navigate("/auth/login", {
        state: { from: location.pathname },
        replace: true,
      });
      return;
    }

    let decoded;
    try {
      decoded = jwtDecode<any>(accessToken);
      console.log({ decoded });
      if (decoded.role !== "admin") {
        navigate("/auth/login", {
          state: { from: location.pathname },
          replace: true,
        });
        return;
      }
    } catch (error) {
      console.error("Error decoding access token:", error);
      toast.error("Invalid access token");
      navigate("/auth/login", { replace: true });
      return;
    }
  }, [navigate]);
  return <>{children}</>;
};

export default AdminProvider;
