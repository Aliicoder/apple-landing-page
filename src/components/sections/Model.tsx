import cn from "../../utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelCarousel from "../ModelCarousel";
const Model = () => {
  useGSAP(() => {
    gsap.to("#model-title", {
      opacity: 1,
      duration: 1,
      y: 0,
    });
  });
  return (
    <section className="bg-black">
      <div className="container gap-4 mx-auto p-8 flex flex-col">
        <h1
          id="model-title"
          className={cn(
            "text-gray text-4xl font-medium opacity-0 translate-y-20",
            "max-md:text-2xl"
          )}
        >
          Take closer look
        </h1>
        <ModelCarousel />
      </div>
    </section>
  );
};

export default Model;
