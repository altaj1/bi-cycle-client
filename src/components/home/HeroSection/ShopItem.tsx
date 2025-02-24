/* eslint-disable @typescript-eslint/no-explicit-any */
const ShopItem = ({ item }: { item: any }) => {
  return (
    <div className="border p-4 bg-white shadow-md rounded-lg text-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <button className="mt-2 border border-black px-4 py-2 rounded hover:bg-gray-200">
        {item.name}
      </button>
    </div>
  );
};

export default ShopItem;
