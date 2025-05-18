import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import ModelView from "./ModelView";
import { models } from "../constants";
import gsap from "gsap";
import { animateModelCarousel } from "../utils/animations";
import ColorAndSize from "./ColorAndSize";
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
    <div className="flex flex-col items-center gap-4 overflow-x-hidden">
      <div className="relative w-full h-[65vh] md:h-[75vh] overflow-x-hidden ">
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
          className="w-full "
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
      <ColorAndSize
        model={model}
        setModel={setModel}
        currentSlideSize={currentSlideSize}
        setCurrentSlideSize={setCurrentSlideSize}
      />
    </div>
  );
};

export default ModelCarousel;
