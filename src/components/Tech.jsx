import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../style";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          primary area of expertise
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <Card
            key={technology.name}
            name={technology.name}
            icon={technology.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

const Card = ({ name, icon }) => {
  return (
    <div className="shadow-sm bg-[#1d1836] rounded-2xl shadow-[#1d1836]">
      <div className="relative flex items-center justify-center h-56 overflow-hidden duration-500 origin-bottom-right group after:duration-500 before:duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-[#804dee] after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-[#11998e] before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  w-80 bg-primary rounded-2xl outline outline-slate-400 -outline-offset-8">
        <div className="z-10 flex flex-col items-center gap-2">
          <img className="w-16 h-16" src={icon} alt={`icon-${icon}`} />
          <p className="text-gray-50">{name}</p>
        </div>
      </div>
    </div>
  );
};
