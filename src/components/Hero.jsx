import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { styles } from "../style";
import { ParticleRing } from "./canvas";

const Hero = () => {
  useEffect(() => {
    const isFirstTime = localStorage.getItem("isFirstTime") || "true";

    if (isFirstTime === "true") {
      driverObj.drive();
      localStorage.setItem("isFirstTime", "false");
    }
  }, [driverObj]);

  return (
    <section className="relative w-full h-full mt-16">
      <ParticleRing />
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <div
          className={`${styles.paddingX}  mt-32 max-w-7xl mx-auto flex flex-row items-start gap-5 `}
        >
          <div className="select-none">
            <h1 className={`${styles.heroHeadText} text-white select-none`}>
              Hi, I'm <span className="text-[#915eff]">Mohsin</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 select-none `}
            >
              I develop attractive websites with a focus on making user
              interfaces dynamic and engaging.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center w-full xs:bottom-20 bottom-32">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
            id="scroll-bottom"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

const driverObj = driver({
  popoverClass: "driverjs-theme",
  showButtons: ["next"],
  nextBtnText: "Close",
  onNextClick: () => {
    driverObj.destroy();
  },
  onPopoverRender: (popover, { config, state }) => {
    const guideButton = document.createElement("button");
    guideButton.innerText = "Guide Me";
    popover.footerButtons.appendChild(guideButton);

    guideButton.addEventListener("click", () => {
      driverObj.moveNext();

      config.onPopoverRender = (popover, { config, state }) => {
        const nextButton = document.createElement("button");
        nextButton.innerText = "Next";
        popover.footerButtons.appendChild(nextButton);

        nextButton.addEventListener("click", () => {
          driverObj.moveNext();
          config.onPopoverRender = (popover, { config, state }) => {
            if (config.steps.length >= state.activeElement) {
              const nextButton = document.createElement("button");
              nextButton.innerText = "Next";
              popover.footerButtons.appendChild(nextButton);

              nextButton.addEventListener("click", () => {
                driverObj.moveNext();
              });
            }
          };
        });
      };
    });
  },
  steps: [
    {
      element: "code .line:nth-child(18)",
      popover: {
        title: "Welcome to my portfolio!",
        description: "Would you like a quick tour?",
      },
    },

    {
      element: "#menu",
      popover: {
        title: "Navigation",
        description: "Explore different sections using the menu.",
        side: "left",
        align: "start",
      },
    },
    {
      element: "#scroll-bottom",
      popover: {
        title: "Scroll",
        description: "Click the scroll button to navigate down.",
        side: "top",
        align: "center",
      },
    },
  ],
});

export default Hero;
