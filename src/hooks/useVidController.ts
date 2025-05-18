import { useEffect, useRef, useState } from "react";
import type { IVidController } from "../types";
import { hightlightsSlides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default () => {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const videoSpanRef = useRef<HTMLDivElement[]>([]);
  const videoDivRef = useRef<HTMLDivElement[]>([]);
  const [loadedData, setLoadedData] = useState<any>([]);

  const [currentVideo, setCurrentVideo] = useState<IVidController>({
    isEnded: false,
    isStarted: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isStarted, videoId, isPlaying } = currentVideo;

  const handleController = (type: string, i?: number) => {
    switch (type) {
      case "video-end":
        if (i || i === 0) {
          setCurrentVideo((pre) => ({ ...pre, isEnded: true, videoId: i + 1 }));
        }
        break;

      case "video-last":
        setCurrentVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case "video-reset":
        setCurrentVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
        break;

      case "toggle-play":
        setCurrentVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return currentVideo;
    }
  };

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setCurrentVideo((pre) => ({
          ...pre,
          isStarted: true,
          isPlaying: true,
        }));
      },
    });
  }, [isStarted, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId == 0) {
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, isStarted]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        isStarted &&
          videoRef.current[videoId]
            ?.play()
            .catch((e) => console.error("Video play failed:", e));
      }
    }
  }, [isStarted, videoId, isPlaying, loadedData]);

  useEffect(() => {
    console.log("currentVideo ", currentVideo);
  }, [currentVideo]);

  return {
    videoRef,
    videoSpanRef,
    videoDivRef,
    loadedData,
    setLoadedData,
    currentVideo,
    handleController,
    setCurrentVideo,
  };
};
