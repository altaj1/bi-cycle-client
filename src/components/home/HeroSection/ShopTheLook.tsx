import ShopItem from "./ShopItem";

const ShopTheLook = () => {
  const shopItems = [
    { name: "Bikes", image: "/bike.png" },
    { name: "Accessories", image: "/helmet.png" },
    { name: "Parts", image: "/glasses.png" },
    { name: "Gear", image: "/bike-seat.png" },
    { name: "Electronics", image: "/water-bottle.png" },
    { name: "Equipment", image: "/gloves.png" },
  ];
  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">SHOP THE LOOK</h2>
        <p className="text-gray-600 mb-6">
          Our latest adventure-focused designs from around the world with
          materials so comfortable you won't want to wear anything else ever
          again.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopItems.map((item, index) => (
            <ShopItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopTheLook;
