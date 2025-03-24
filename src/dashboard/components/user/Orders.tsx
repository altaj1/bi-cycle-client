/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "../../../components/GlobalContext/GlobalProvider";
import toast from "react-hot-toast";

const Orders = () => {
  const [_loading, setLoading] = useState(true);
  const [_error, setError] = useState(null);
  const [orders, setOrders] = useState<any[]>([]);
  const { user } = useGlobalContext();

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/orders/my/${user.email}`
      );
      setOrders(data?.data || []);
    } catch (err) {
      setError(err as any);
      toast.error("Failed to fetch orders.");
    } finally {
      setLoading(false);
    }
  }, [user.email]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <div className="font-[sans-serif] overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-sm font-medium text-white">
              Email
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Product ID
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Quantity
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Total Price
            </th>
            <th className="p-4 text-left text-sm font-medium text-white">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {orders?.map((order: any, index: number) => (
            <tr key={index} className="even:bg-blue-50">
              <td className="p-4 text-sm text-black">{order.email}</td>
              <td className="p-4 text-sm text-black">{order.product}</td>
              <td className="p-4 text-sm text-black">{order.quantity}</td>
              <td className="p-4 text-sm text-black">${order.totalPrice}</td>
              <td className="p-4 text-sm text-black">
                {new Date(order.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {orders.length === 0 && !_loading && (
        <p className="text-center mt-4 text-gray-500">No orders found.</p>
      )}
    </div>
  );
};

export default Orders;
