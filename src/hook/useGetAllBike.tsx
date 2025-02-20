/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useGetAllBike = () => {
  const [bikes, setBikes] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch bikes function with useCallback to prevent unnecessary re-renders
  const fetchBikes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/products`
      );
      setBikes(data);
    } catch (err) {
      setError(err as any);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch bikes on component mount
  useEffect(() => {
    fetchBikes();
  }, [fetchBikes]);

  // Return bikes, loading, error, and refetch function
  return { bikes, loading, error, refetch: fetchBikes };
};

export default useGetAllBike;
