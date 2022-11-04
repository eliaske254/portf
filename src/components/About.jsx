import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-16 sm:py-32 px-8 sm:px-0">
        <div className="grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-indigo-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Welcome aboard. Please take a look around.</p>
          </div>
          <div>
            <p className="text-3xl">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small businesses all the
              way to large enterprise corporations. What would you do if you had
              a software guru just a phone call away? :)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
