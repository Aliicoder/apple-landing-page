import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import ModelView from "./ModelView";
import { models, sizes } from "../constants";
import cn from "../utils/cn";
import gsap from "gsap";
import { animateModelCarousel } from "../utils/animations";
const ModelCarousel = () => {
  const [currentSlideSize, setCurrentSlideSize] = useState("small");
  const [model, setModel] = useState(models[0]);
  const [smallModelRotation, setSmallModelRotation] = useState(0);
  const [largeModelRotation, setLargeModelRotation] = useState(0);

  const smallModelCameraRef = useRef<any>(null);
  const largeModelCameraRef = useRef<any>(null);

  const smallModelGroupRef = useRef<any>(new THREE.Group());
  const largeModelGroupRef = useRef<any>(new THREE.Group());
  const tl = gsap.timeline();
  useEffect(() => {
    if (currentSlideSize === "large") {
      animateModelCarousel({
        timeline: tl,
        rotationRef: smallModelGroupRef,
        rotationState: smallModelRotation,
        firstTarget: "#view1",
        secondTarget: `#view2`,
        animationProps: { duration: 2, transform: "translateX(-100%)" },
      });
    } else if (currentSlideSize === "small") {
      animateModelCarousel({
        timeline: tl,
        rotationRef: largeModelGroupRef,
        rotationState: largeModelRotation,
        firstTarget: "#view2",
        secondTarget: "#view1",
        animationProps: { duration: 2, transform: "translateX(0)" },
      });
    }
  }, [currentSlideSize]);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full h-[65vh] md:h-[75vh] ">
        <ModelView
          index={1}
          groupRef={smallModelGroupRef}
          gsapType="view1"
          controlRef={smallModelCameraRef}
          setRotationState={setSmallModelRotation}
          item={model}
          size="small"
        />

        <ModelView
          index={2}
          groupRef={largeModelGroupRef}
          gsapType="view2"
          controlRef={largeModelCameraRef}
          setRotationState={setLargeModelRotation}
          item={model}
          size="large"
        />
        <Canvas
          className="w-full h-full"
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
          }}
          eventSource={document.getElementById("root") || undefined}
        >
          <View.Port />
        </Canvas>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="mb-4 text-gray font-medium">{model.title}</h1>
        <div className="flex items-center gap-2">
          <div className="gap-2 p-4 flex items-center justify-center rounded-full bg-gray-300 backdrop-blur">
            {models.map((model, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: model.color[0] }}
                onClick={() => setModel(model)}
              />
            ))}
          </div>
          <button className="flex items-center justify-center p-1 rounded-full bg-gray-300 backdrop-blur ml-3 gap-1">
            {sizes.map(({ label, value }, i) => (
              <p
                key={i}
                className={cn(
                  "w-10 h-10 text-sm flex justify-center items-center bg-transparent rounded-full transition-all",
                  currentSlideSize == value && "bg-white text-black"
                )}
                onClick={() => setCurrentSlideSize(value)}
              >
                {label}
              </p>
            ))}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCarousel;
