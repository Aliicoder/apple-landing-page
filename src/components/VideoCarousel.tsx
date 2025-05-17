import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";
import useVidController from "../hooks/useVidController";

const VideoCarousel = () => {
  const {
    videoRef,
    videoSpanRef,
    videoDivRef,
    loadedData,
    setLoadedData,
    currentVideo,
    setCurrentVideo,
    handleController,
  } = useVidController();

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  className={`${
                    list.id === 2 && "translate-x-44"
                  } pointer-events-none`}
                  preload="auto"
                  muted
                  ref={(el) => {
                    videoRef.current[i] = el!;
                  }}
                  onEnded={() =>
                    i !== 3
                      ? handleController("video-end")
                      : handleController("video-last")
                  }
                  onPlay={() =>
                    setCurrentVideo((pre) => ({ ...pre, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) =>
                    setLoadedData((pre: any) => [...pre, e])
                  }
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, i) => (
                  <p key={i} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {loadedData.length > 3 &&
            videoRef.current.map((_, i) => (
              <div
                key={i}
                className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
                ref={(el) => {
                  videoDivRef.current[i] = el!;
                }}
              >
                <div
                  className="absolute h-full w-full rounded-full"
                  ref={(el) => {
                    videoSpanRef.current[i] = el!;
                  }}
                />
              </div>
            ))}
        </div>

        <button className="control-btn">
          <img
            src={
              currentVideo.isLastVideo
                ? replayImg
                : !currentVideo.isPlaying
                ? playImg
                : pauseImg
            }
            alt={
              currentVideo.isLastVideo
                ? "replay"
                : !currentVideo.isPlaying
                ? "play"
                : "pause"
            }
            onClick={
              currentVideo.isLastVideo
                ? () => handleController("video-reset")
                : !currentVideo.isPlaying
                ? () => handleController("toggle-play")
                : () => handleController("toggle-play")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
