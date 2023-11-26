import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { isMobile } from "react-device-detect";
import {
  About,
  Contact,
  Experience,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Loading,
} from "./components";
const Hero = React.lazy(() => import("./components/Hero"));
const MobileHero = React.lazy(() => import("./components/MobileHero"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Suspense fallback={<Loading />}>
          {isMobile ? <MobileHero /> : <Hero />}
        </Suspense>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
