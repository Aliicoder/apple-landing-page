import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { explore1Img, explore2Img, exploreVideo } from "../../utils";
import { animateWithGsap } from "../../utils/animations";
import cn from "../../utils/cn";

const Features = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current?.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 }, {});
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 },
      "restart reverse restart reverse"
    );
    animateWithGsap(
      ".g_text",
      { y: 0, opacity: 1, ease: "power2.inOut", duration: 1 },
      {},
      "restart reverse restart reverse"
    );
  }, []);

  return (
    <section className=" bg-zinc overflow-x-hidden">
      <div className="px-8 py-16 gap-4 mx-auto container flex flex-col">
        <h1
          id="features_title"
          className={cn(
            "text-gray text-4xl font-medium opacity-0 translate-y-20",
            "max-md:text-2xl"
          )}
        >
          Explore the full story.
        </h1>

        <div className="flex flex-col justify-center items-center">
          <div className="mt-8 p-24 max-md:p-10">
            <h2
              className={cn(
                "text-4xl text-gray font-semibold",
                "max-md:text-2xl"
              )}
            >
              iPhone.
            </h2>
            <h2 className={cn("text-6xl font-semibold", "max-md:text-4xl")}>
              Forged in titanium.
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div
                className={cn(
                  "w-full flex flex-col gap-5 items-center",
                  "md:flex-row"
                )}
              >
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    loading="lazy"
                    className="g_grow w-full h-full object-cover object-center scale-150 opacity-0"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    loading="lazy"
                    className="g_grow w-full h-full object-cover object-center scale-150 opacity-0"
                  />
                </div>
              </div>

              <div
                className={cn(
                  "flex w-full flex-col mt-10 gap-5",
                  "md:mt-16 md:flex-row "
                )}
              >
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
