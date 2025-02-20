/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { useGlobalContext } from "../GlobalContext/GlobalProvider";
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useGlobalContext();
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

    let decoded;
    try {
      decoded = jwtDecode<{ secret: string }>(accessToken);
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
