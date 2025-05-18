import * as THREE from "three";
import gsap from "gsap";
interface Props {
  timeline: gsap.core.Timeline;
  rotationRef: React.RefObject<THREE.Group>;
  rotationState: number;
  firstTarget: any;
  secondTarget: any;
  animationProps: any;
}
export const animateWithGsap = (
  target: any,
  animationProps: any,
  scrollProps: any,
  toggleActions?: string
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      ...(toggleActions && { toggleActions }),
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateModelCarousel = ({
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps,
}: Props) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
