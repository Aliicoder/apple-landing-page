import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import cn from "../../utils/cn";
import { rightImg, watchImg } from "../../utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Higlights = () => {
  useGSAP(() => {
    gsap.to("#highlights-title", {
      opacity: 1,
      duration: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#highlights-title",
        start: "top 80%",
        toggleActions: "play pause none none",
      },
    });
    gsap.to("#highlights-link", {
      opacity: 1,
      duration: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#highlights-link",
        start: "top 80%",
        toggleActions: "play pause none none",
      },
    });
  });
  return (
    <section id="highlights" className=" bg-zinc">
      <div className="container gap-4 mx-auto p-8 flex items-center justify-center flex-col">
        <div
          className={cn(
            "w-full flex flex-col justify-between gap-4",
            "md:flex-row"
          )}
        >
          <h1
            id="highlights-title"
            className={cn(
              "text-gray text-4xl font-medium opacity-0 translate-y-20",
              "max-md:text-2xl"
            )}
          >
            Get it
          </h1>
          <div
            className={cn(
              "gap-4 flex items-center flex-wrap text-lg",
              "md:justify-between max-md:text-sm"
            )}
          >
            <p
              id="highlights-link"
              className={cn(
                "gap-2 flex items-baseline text-xl opacity-0 translate-y-20 text-blue hover:underline cursor-pointer",
                "max-md:text-sm"
              )}
            >
              watch the film
              <img
                className="translate-y-0.5 w-3 h-3"
                loading="lazy"
                src={watchImg}
                alt="watchImg"
              />
            </p>
            <p
              id="highlights-link"
              className={cn(
                "gap-2 flex items-baseline text-xl opacity-0 translate-y-20 text-blue hover:underline cursor-pointer",
                "max-md:text-sm"
              )}
            >
              the event
              <img
                className=" w-2 h-2"
                loading="lazy"
                src={rightImg}
                alt="watchImg"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Higlights;
