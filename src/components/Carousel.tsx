import Image from "./Image";
import { TouchEvent, useState } from "react";
import { pics } from "../utilities/assets";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchEnd - touchStart > 150) {
      handleLeft(currentSlide);
    }
    if (touchStart - touchEnd > 150) handleRight(currentSlide);
  };

  const handleLeft = (currentIndex: number) => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) setCurrentSlide(prevIndex);
    else setCurrentSlide(pics.length - 1);
  };

  const handleRight = (currentIndex: number) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex <= pics.length - 1) setCurrentSlide(nextIndex);
    else setCurrentSlide(0);
  };

  const handleDot = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col items-center gap-2 ">
      <div className="flex items-center justify-center gap-2">
        <div
          className="p-1 bg-black rounded-md cursor-pointer active:bg-slate-400"
          onClick={() => handleLeft(currentSlide)}
        >
          <div className="left-arrow h-[20px] w-[10px] md:h-[30px] md:w-[15px]"></div>
        </div>
        <div
          className="h-[260px] w-[82vw] md:h-[460px] md:w-[560px] flex justify-center items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          <Image
            img={pics[currentSlide].img}
            title={pics[currentSlide].title}
            modeler={pics[currentSlide].model}
            renderer={pics[currentSlide].renderer}
          />
        </div>

        <div
          className="p-1 bg-black rounded-md cursor-pointer active:bg-slate-400"
          onClick={() => {
            handleRight(currentSlide);
          }}
        >
          <div className="right-arrow h-[20px] w-[10px] md:h-[30px] md:w-[15px]"></div>
        </div>
      </div>

      <div className="flex justify-evenly w-[100%] mb-2">
        {pics.map((img, index) => (
          <div
            className={`w-[10px] h-[10px] ${
              index === currentSlide ? "bg-red-300" : "bg-white"
            }  rounded-full`}
            onClick={() => {
              handleDot(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
