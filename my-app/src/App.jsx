import React, { useEffect } from "react";
import "./App.css";

// Locomotive Scroll
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// PAGES
import Page1 from "./Pages/Page1";
// import Page2 from "./Pages/Page2";
// import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Mainpage from "./Pages/Mainpage";

const App = () => {
  useEffect(() => {
    // Delay required for Vite + React so DOM is fully rendered
    setTimeout(() => {
      const scrollEl = document.querySelector("[data-scroll-container]");
      if (!scrollEl) return;

      const locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        lerp: 0.08,
      });

      // Connect Locomotive → ScrollTrigger
      locoScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollEl.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    }, 300);

  }, []);

  return (
    <div data-scroll-container>
      <Mainpage />
      {/* <Page1 /
      <Page2 />
      <Page3 /> */}
      <Page4/>
    </div>
  );
};

export default App;
