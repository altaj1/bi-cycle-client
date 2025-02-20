import { useState } from "react";
import useGetAllBike from "../../hook/useGetAllBike";
import { FaRegCircle } from "react-icons/fa6";
import BikeCard from "./BikeCard";

const AllBicycles = () => {
  const { bikes, loading, error } = useGetAllBike();
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    price: "",
    model: "",
    brand: "",
    category: "",
    availability: "",
  });

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredBikes = bikes?.data?.filter((bike) => {
    return (
      (!filters.price || bike.price <= filters.price) &&
      (!filters.model ||
        bike.model.toLowerCase().includes(filters.model.toLowerCase())) &&
      (!filters.brand ||
        bike.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
      (!filters.category ||
        bike.category.toLowerCase().includes(filters.category.toLowerCase())) &&
      (!filters.availability ||
        bike.availability.toLowerCase() === filters.availability.toLowerCase())
    );
  });

  if (loading) return <p>Loading bicycles...</p>;
  if (error) return <p>Error fetching bicycles.</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Bicycles</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by brand, name, or category"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 border rounded mb-4"
      />

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
        <div className="relative   border">
          <span className="flex justify-center items-center">
            {filters.price}
          </span>
          <div className="flex gap-1 justify-center  items-end">
            <span className="mb-1">
              <FaRegCircle className="text-[#063354] text-[12px] font-bold  bg-white" />
            </span>
            <div className=" relative w-full ">
              <input
                type="range"
                min="0"
                max="2000"
                name="price"
                value={filters.price}
                onChange={handleFilterChange}
                className="h-2 w-full rounded-lg border-2  appearance-none cursor-pointer  bg-black"
              />
            </div>
          </div>
        </div>
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={filters.model}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={filters.brand}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={filters.category}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        />
        <select
          name="availability"
          value={filters.availability}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">Availability</option>
          <option value="in stock">In Stock</option>
          <option value="out of stock">Out of Stock</option>
        </select>
      </div>

      {/* Bicycle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBikes?.map((bike: any) => (
          <BikeCard key={bike?._id} bike={bike} />
        ))}
      </div>
    </div>
  );
};

export default AllBicycles;
