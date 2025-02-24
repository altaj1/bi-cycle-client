import NewArrivals from "../bikes/NewArrivals";
import HeroSection from "./HeroSection/HeroSection";
import ShopTheLook from "./HeroSection/ShopTheLook";
import DemoCarousel from "../header/HeroSlider";

const Home = () => {
  return (
    <div className="w-full">
      <DemoCarousel />
      <NewArrivals />
      <HeroSection />
      <ShopTheLook />
    </div>
  );
};

export default Home;
