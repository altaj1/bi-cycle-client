import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 relative">
          <img
            src="/electric-bike-rider.jpg"
            alt="Electric Bike Rider"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="absolute top-0 right-0 bg-white p-2 rounded-full shadow-md">
            <span className="text-lg font-bold">☀</span>
          </div>
        </div>

        <div className="lg:w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-4">
            Advancing Electric Biking with Innovation, Performance, and
            Sustainability.
          </h2>
          <p className="text-gray-600 mb-6">
            At Ryz, we revolutionized electric success and wrote down the curve
            of electric bikes. Our innovative design combines energy-efficient
            technology with enhanced performance, offering a seamless and
            exhilarating ride for every cyclist. Join us on this electrifying
            journey.
          </p>
          <div className="flex gap-4">
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
              Shop Bikes →
            </button>
            <button className="text-gray-700 underline hover:text-gray-900">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-green-100 p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-6xl">🚲</span>
          <p className="font-semibold">
            Limited lifetime warranty on all bikes.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-6xl">🚚</span>
          <p className="font-semibold">
            Free ground shipping and easy returns.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-6xl">📦</span>
          <p className="font-semibold">
            Designed, engineered & assembled in the USA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
