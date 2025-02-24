/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGlobalContext } from "../GlobalContext/GlobalProvider";
import BuyModal from "./BuyModal";

const Cards = () => {
  const { products } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="grid container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.length > 0 ? (
        products.map((product: any) => (
          <div key={product._id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={product.images}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={openModal}
              className="mt-2 w-full bg-blue-500 text-white py-1 rounded-lg hover:bg-blue-600"
            >
              Buy Now{" "}
            </button>
            <BuyModal
              isOpen={isOpen}
              product={product}
              isEditModalOpen={isEditModalOpen}
              closeModal={closeModal}
            />
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No products available.
        </p>
      )}
    </div>
  );
};

export default Cards;
