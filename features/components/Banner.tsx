"use client";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/features/components/EmblaCarouselArrowButtons";

import Image from "next/image";
import Preloader from "./Preloader";

const bannerItem = [
  {
    alt: "ภาษาอังกฤษคือคำตอบของทุกความสำเร็จ",
    src_laptop: "/assets/images/banner_1_laptop.svg",
    src_mobile: "/assets/images/banner_1_mobile.svg",
  },
  {
    alt: "ศูนย์ติวและศูนย์สอบ ครบจบที่เดียว",
    src_laptop: "/assets/images/banner_2_laptop.svg",
    src_mobile: "/assets/images/banner_2_mobile.svg",
  },
  {
    alt: "วัดระดับภาษาและทดลองสอบก่อนสอบสนามจริง ฟรี!",
    src_laptop: "/assets/images/banner_3_laptop.svg",
    src_mobile: "/assets/images/banner_3_mobile.svg",
  },
];

const Banner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };
    // Initial check
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === bannerItem.length) {
      setLoading(false);
    }
  }, [imagesLoaded]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="max-w-[1600px] relative mx-auto">
      {loading && <Preloader />}
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {bannerItem.map((item, index) => (
              <Image
                key={index}
                src={isLargeScreen ? item.src_laptop : item.src_mobile}
                alt={item.alt}
                width={isLargeScreen ? 1600 : 1024}
                height={500}
                onLoad={handleImageLoad}
                style={{
                  maxHeight: "500px",
                }}
              ></Image>
            ))}
          </div>
        </div>
        <div className="container max-w-[1280px] mx-auto ">
          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
