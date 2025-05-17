import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../../utils/animations";
import { chipImg, frameImg, frameVideo } from "../../utils";
import { ScrollTrigger } from "gsap/all";
import cn from "../../utils/cn";
gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(
      ".fadeIn_animation",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      {}
    );
  }, []);

  return (
    <section className="bg-black">
      <div className="px-8 py-16 gap-4 mx-auto container flex flex-col">
        <div
          id="chip"
          className="flex justify-center items-center w-full my-20"
        >
          <img
            src={chipImg}
            alt="chip"
            width={180}
            height={180}
            loading="lazy"
          />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-7xl font-semibold text-center">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="text-gray font-semibold text-xl md:text-2xl py-10 text-center">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className=" h-full flex-center">
            <div className="relative overflow-hidden ">
              <img
                src={frameImg}
                loading="lazy"
                alt="frame"
                className="w-full h-full bg-transparent relative z-10"
              />
              <div className="absolute p-2 top-0 left-0 w-full h-full  ">
                <video
                  className="w-full h-full object-cover object-center pointer-events-none"
                  playsInline
                  preload="none"
                  muted
                  autoPlay
                  ref={videoRef}
                >
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-start gap-24">
          <div className="flex flex-1 justify-center flex-col">
            <p
              className={cn(
                "text-gray text-xl font-normal md:font-semibold ",
                "fadeIn_animation opacity-0 translate-y-[100px]"
              )}
            >
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far
              </span>
              .
            </p>

            <p
              className={cn(
                "text-gray text-xl font-normal md:font-semibold",
                "fadeIn_animation opacity-0 translate-y-[100px]"
              )}
            >
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters.
            </p>
          </div>

          <div
            className={cn(
              "flex-1 flex justify-center flex-col ",
              "fadeIn_animation opacity-0 translate-y-[100px]"
            )}
          >
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
