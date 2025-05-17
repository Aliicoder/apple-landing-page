import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../../utils";
import { useEffect, useState } from "react";
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  useGSAP(() => {
    gsap.to("#cta", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      y: 0,
    });
  });
  const handleResize = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="bg-black">
      <div className="h-[calc(100dvh-60px)] container gap-4 mx-auto p-8 flex items-center justify-center flex-col">
        <div className="w-9/12">
          <video autoPlay muted loop playsInline preload="auto">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center max-md:mt-12  w-9/12 opacity-0 translate-y-50"
        >
          <a
            className=" px-5 py-2 rounded-3xl bg-blue my-5 hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue"
            href="#highlights"
          >
            Buy Now
          </a>
          <p className="text-gray text-sm">From $199/mo. or $2,399</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
