import imga1 from "../../assets/img1.jpeg";
import imga2 from "../../assets/img2.jpeg";
import imga3 from "../../assets/img3.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

const DemoCarousel = () => {
  const onChange = (index: number) => {
    console.log("Slide changed to", index);
  };

  const onClickItem = (index: number) => {
    console.log("Clicked item", index);
  };

  const onClickThumb = (index: number) => {
    console.log("Clicked thumbnail", index);
  };

  return (
    <div className="demo-carousel">
      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        infiniteLoop
        useKeyboardArrows
        dynamicHeight
        emulateTouch
        swipeable
      >
        <div>
          <div
            className="w-full h-screen flex flex-col items-center justify-center text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imga1})` }}
          >
            <h1 className="text-5xl font-bold">FREEDOM RIDE</h1>
            <p className="text-lg mt-4">
              Your personal electric bike with insurance from{" "}
              <span className="text-red-500">€88</span>/month.
            </p>
            <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg">
              Shop Bikes →
            </button>
          </div>
        </div>
        <div>
          <div
            className="w-full h-screen flex flex-col items-center justify-center text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imga2})` }}
          >
            <h1 className="text-5xl font-bold">ELECTRIC POWER</h1>
            <p className="text-lg mt-4">
              Experience the thrill of effortless riding with high-speed
              electric bikes.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
              Discover More →
            </button>
          </div>
        </div>
        <div>
          <div
            className="w-full h-screen flex flex-col items-center justify-center text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imga3})` }}
          >
            <h1 className="text-5xl font-bold">SUSTAINABLE TRAVEL</h1>
            <p className="text-lg mt-4">
              Ride green, save fuel, and reduce carbon emissions with our
              eco-friendly bikes.
            </p>
            <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg">
              Go Green →
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
