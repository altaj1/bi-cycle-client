/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

// Define the TbiCycle type
export type TbiCycle = {
  name: string;
  brand: string;
  price: number;
  type: ETcycletype;
  description: string;
  quantity: number;
  inStock: boolean;
  model: string;
  category: string;
};

// Enum for cycle type
export enum ETcycletype {
  Mountain = "Mountain",
  Road = "Road",
  Hybrid = "Hybrid",
  Electric = "Electric",
}

const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState<TbiCycle>({
    name: "",
    brand: "",
    price: 0,
    type: ETcycletype.Mountain,
    description: "",
    quantity: 1,
    inStock: true,
    model: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Handle input changes
  // const handleChange = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  //   >
  // ) => {
  //   const { name, value, type, checked } = e.target;
  //   let newValue: any;

  //   // Convert to number if the field is price or quantity
  //   if (name === "price" || name === "quantity") {
  //     newValue = value ? Number(value) : 0;
  //   } else {
  //     newValue = type === "checkbox" ? checked : value;
  //   }

  //   setFormData({ ...formData, [name]: newValue });
  // };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    let newValue: any;

    // Check if it's a checkbox
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      newValue = e.target.checked;
    } else if (
      (name === "price" || name === "quantity") &&
      e.target instanceof HTMLInputElement
    ) {
      newValue = value ? Number(value) : 0;
    } else {
      newValue = value;
    }

    setFormData({ ...formData, [name]: newValue });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/products`,
        formData
      );
      if (response?.data?.success) {
        toast.success(response?.data?.message);
      }
      setFormData({
        name: "",
        brand: "",
        price: 0,
        type: ETcycletype.Mountain,
        description: "",
        quantity: 1,
        inStock: true,
        model: "",
        category: "",
      });
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Failed to add cycle. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  // console.log(formData);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add New Cycle</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={Number(formData.price)}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              {Object.values(ETcycletype).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={Number(formData.quantity)}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="inStock"
              checked={formData.inStock}
              onChange={handleChange}
              className="h-5 w-5 mr-2"
            />
            <label className="text-sm font-medium">In Stock</label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {loading ? "Adding..." : "Add Cycle"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
