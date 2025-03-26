import { useState } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser } = useGlobalContext();
  console.log({ location });
  const handleLogin = async () => {
    const response = await loginUser({ email, password });
    if (response?.success) {
      toast.success(response?.message || "Login successful");
      const redirectPath =
        location?.state?.from && location.state.from !== "/auth/login"
          ? location.state.from
          : "/";

      navigate(redirectPath);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold">
            <Link to={"/"}>🚴 CycleCity</Link>
          </h1>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-700">
            Enter Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
        <button
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <a href="signup" className="text-red-500">
            Register
          </a>
        </p>
        {/* <button className="w-full flex items-center justify-center mt-4 py-2 border rounded-lg hover:bg-gray-100">
          <span className="mr-2">🔵</span> Login with Google
        </button> */}
      </div>
    </div>
  );
};

export default LoginPage;
