/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalProvider";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser } = useGlobalContext();
  const handleRegister = async () => {
    const response = await registerUser({ name, email, password });
    if (response?.success) {
      toast(response?.message || "Registering successful");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold">🚴 CycleCity</h1>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
          onClick={handleRegister}
        >
          Register
        </button>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="login" className="text-red-500">
            Login
          </a>
        </p>
        {/* <button className="w-full flex items-center justify-center mt-4 py-2 border rounded-lg hover:bg-gray-100">
          <span className="mr-2">🔵</span> Register with Google
        </button> */}
      </div>
    </div>
  );
};

export default RegisterPage;
