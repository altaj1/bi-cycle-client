/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";
import React, {
  createContext,
  ReactNode,
  use,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

// Define a custom type for user state
interface UserPayload extends JwtPayload {
  email: string;
  role: string;
  _id: string;
  name: string;
}
// Define the type for the context
interface GlobalContextType {
  user: UserPayload | null;
  setUser: React.Dispatch<React.SetStateAction<UserPayload | null>>; // Update this line
  registerUser: (data: {
    email: string;
    password: string;
    name: string;
  }) => Promise<any>;
  loginUser: (data: { email: string; password: string }) => Promise<any>;
}
// Create context
const GlobalContext = createContext<GlobalContextType | any>(null);

// Create provider
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const registerUser = async (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setLoading(false);
      return result.data;
    } catch (_error) {
      console.error("Error:");
    }
  };

  const loginUser = async (data: { email: string; password: string }) => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (result.data?.data?.token) {
        // Decode JWT token
        const decodedUser: UserPayload = jwtDecode(result.data?.data?.token);
        // Update state with user info
        setUser({
          email: decodedUser?.email,
          role: decodedUser?.role,
          _id: decodedUser?._id,
          name: decodedUser?.name,
        });
      }
      setLoading(false);
      return result.data;
    } catch (error) {
      console.error("Error:");
    }
  };
  const logOutUser = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      // Reset user state
      setUser(null);
      setLoading(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const data = {
    user,
    setUser,
    registerUser,
    loginUser,
    loading,
    logOutUser,
    setProducts,
    products,
  };
  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      try {
        const decodedUser: UserPayload = jwtDecode(token);
        setUser({
          email: decodedUser?.email,
          role: decodedUser?.role,
          _id: decodedUser?._id,
          name: decodedUser?.name,
        });
      } catch (error) {
        console.error("JWT Decode Error:", error);
      }
    }
    setLoading(false);
  }, []);
  console.log({ user });
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

// Custom hook to use context
export const useGlobalContext = () => useContext(GlobalContext);
