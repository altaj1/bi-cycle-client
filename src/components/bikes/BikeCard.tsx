import toast from "react-hot-toast";

/* eslint-disable @typescript-eslint/no-explicit-any */
const BikeCard = ({
  bike,
  setProducts,
  products,
}: {
  bike: any;
  setProducts: any;
  products: any;
}) => {
  return (
    <div className="border p-4 relative bg-white shadow-md rounded-lg">
      {bike.isNew && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          New
        </span>
      )}
      <img
        src={bike?.images}
        alt={bike?.name}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-lg font-bold mt-4">{bike?.name}</h3>
      <p className="text-gray-500">{bike?.type}</p>
      <p className="text-red-500 font-semibold">{bike?.price}</p>
      <button
        onClick={() => {
          setProducts([...products, bike]);
          toast.success("add to cart successfully");
        }}
        className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
};
export default BikeCard;
