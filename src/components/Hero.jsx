import React from "react";
import { styles } from "../style";
import Lottie from "lottie-react";
import programmerAnimation from "../assets/animation/programmer.json";

const Hero = () => {
  return (
    <section className="flex flex-col w-full h-screen">
      <div
        className={`${styles.paddingX} mt-32 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Mohsin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            I develop attractive websites with a focus on making user interfaces
            dynamic and engaging.
          </p>
        </div>
      </div>
      <Programmer />
    </section>
  );
};

const Programmer = () => {
  return (
    <div className="flex justify-center w-full sm:mt-[-72px]">
      <Lottie animationData={programmerAnimation} />
    </div>
  );
};

export default Hero;
