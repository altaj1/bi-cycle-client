import HeroSlider from "../header/HeroSlider";
import NewArrivals from "../bikes/NewArrivals";
import HeroSection from "./HeroSection/HeroSection";
import ShopTheLook from "./HeroSection/ShopTheLook";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSlider />
      <NewArrivals />
      <HeroSection />
      <ShopTheLook />
    </div>
  );
};

export default Home;
