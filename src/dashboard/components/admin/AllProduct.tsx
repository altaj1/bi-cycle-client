import { Link } from "react-router-dom";
import BicycleTable from "./BicycleTable";

const AllProduct = () => {
  return (
    <div>
      <div className="bg-[#1E2939] px-5 w-36 text-center py-3 rounded-md font-medium m-5 text-white">
        <Link to={`add-product`}>Add Product</Link>
      </div>
      <BicycleTable />
    </div>
  );
};

export default AllProduct;
