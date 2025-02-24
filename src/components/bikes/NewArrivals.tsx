/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import useGetAllBike from "../../hook/useGetAllBike";
import BikeCard from "./BikeCard";
import { useGlobalContext } from "../GlobalContext/GlobalProvider";

const NewArrivals = () => {
  const { bikes } = useGetAllBike();
  const { setProducts, products } = useGlobalContext();

  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">NEW ARRIVALS</h2>
          <Link
            to={"/all-bicycle"}
            className="border border-black px-4 py-2 rounded hover:bg-gray-200"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes?.data?.map((bike: any, index: any) => (
            <BikeCard
              key={index}
              bike={bike}
              setProducts={setProducts}
              products={products}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
