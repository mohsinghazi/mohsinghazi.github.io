import { motion } from "framer-motion";
import { styles } from "../style";

const MobileHero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center`}
    >
      <div
        className={`absolute inset-0 top-[280px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Mohsin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop attractive websites with a focus on making user
            <br className="hidden sm:block" />
            interfaces dynamic and engaging.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;
