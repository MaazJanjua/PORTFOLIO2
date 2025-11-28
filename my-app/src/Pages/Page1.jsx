import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
    useGSAP(()=>{
        gsap.from("h1",{
            y:100,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:"h1",
                scroller:"[data-scroll-container]",
                start:"top 80%",
            }
        })
    })

  
  return (
    <section data-scroll data-scroll-section >
        <div
         data-scroll data-scroll-speed="-4"
         className="h-screen bg-gray-900 flex items-center justify-center">
      <h1 
      className="text-5xl font-bold text-white uppercase font-[anzo2]
      ">
        Page 1 Animation 🎯
      </h1>
      </div>
    </section>
  );
};

export default Page1;
