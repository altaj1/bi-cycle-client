/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [isLoading, setIsLoading] = useState(true);

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

    try {
      const _decoded = jwtDecode<{ secret: string }>(accessToken);
      console.log({ _decoded });
    } catch (error) {
      console.error("Error decoding access token:", error);
      toast.error("Invalid access token");
      navigate("/auth/login", { replace: true });
      return;
    }
  }, [navigate]);
  return <>{children}</>;
};
export default AuthProvider;
