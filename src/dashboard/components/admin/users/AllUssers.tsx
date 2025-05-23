/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AllUssers = () => {
  const [users, setUsers] = useState<any>(null);
  const [_loading, setLoading] = useState(true);
  const [_error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch Users function with useCallback to prevent unnecessary re-renders
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/user`);
      setUsers(data);
    } catch (err) {
      setError(err as any);
    } finally {
      setLoading(false);
    }
  }, []);

  // Handle block/unblock user
  const handleToggleBlockUser = async (id: string) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/user/block/${id}`
      );
      console.log({ response });
      if (response?.data?.success) {
        toast.success(response?.data?.message);
      }
      fetchUsers();
    } catch (error) {
      console.error("Error toggling block status:", error);
    }
  };
  // Handle delete user
  const handleDeleteUser = async (id: string) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/user/${id}`
      );
      console.log({ response });
      if (response?.data?.success) {
        toast.success(response?.data?.message);
      }
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  // Fetch Users on component mount
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  console.log(users);
  return (
    <div className="font-[sans-serif] overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-sm font-medium text-white">
              Name
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Email
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              role
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Block
            </th>

            <th className="p-4 text-left text-sm font-medium text-white">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="whitespace-nowrap">
          {users?.data?.map((user: any, index: number) => (
            <tr key={index} className="even:bg-blue-50">
              <td className="p-4 text-sm text-black">{user.name}</td>
              <td className="p-4 text-sm text-black">{user.email}</td>
              <td className="p-4 text-sm text-black">${user.role}</td>
              <td className="p-4 text-sm text-black">
                <button
                  onClick={() => handleToggleBlockUser(user._id)}
                  className={`w-8 h-4 flex items-center rounded-full p-1 transition-all duration-300 ${
                    user?.isBlocked ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
                  <div
                    className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                      user?.isBlocked ? "translate-x-3" : "translate-x-0"
                    }`}
                  />
                </button>
              </td>

              <td className="p-4">
                <button
                  className="mr-4"
                  title="Edit"
                  onClick={() => navigate(`edit-user/${user._id}`)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 fill-blue-500 hover:fill-blue-700"
                    viewBox="0 0 348.882 348.882"
                  >
                    <path d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z" />
                  </svg>
                </button>
                <button
                  className="mr-4"
                  title="Delete"
                  onClick={() => handleDeleteUser(user?._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 fill-red-500 hover:fill-red-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUssers;
