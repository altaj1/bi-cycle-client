import ShopItem from "./ShopItem";
import imga10 from "../../../assets/img10.jpeg";
import imga9 from "../../../assets/img9.jpeg";
import imga7 from "../../../assets/img7.jpeg";
import imga5 from "../../../assets/img5.jpeg";
import imga8 from "../../../assets/img8.jpeg";
import imga3 from "../../../assets/img3.jpeg";

const ShopTheLook = () => {
  const shopItems = [
    { name: "Bikes", image: imga10 },
    { name: "Accessories", image: imga7 },
    { name: "Parts", image: imga9 },
    { name: "Gear", image: imga5 },
    { name: "Electronics", image: imga8 },
    { name: "Equipment", image: imga3 },
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
