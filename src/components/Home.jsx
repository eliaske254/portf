import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full bg-slate-900 py-16 sm:py-32">
      {/* container */}
      <div className="max-w-7xl mx-auto py-16 sm:py-32 px-8 sm:px-0">
        <p className="text-blue-600 mb-2 text-3xl">Hi, my name is</p>
        <h1 className="text-2xl sm:text-7xl font-bold text-[#ccd6f6]">
          Elias kirui
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Ruby on Rails Engineer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-2xl">
          I specialize in building (and occasionally designing) exceptional
          digital experiences. Currently, I'm focused on building accessible,
          human-centered products
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-indigo-600 hover:border-green-700 rounded-lg">
            View my work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
