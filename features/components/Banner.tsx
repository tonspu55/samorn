"use client";

import useEmblaCarousel from "embla-carousel-react";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/features/components/EmblaCarouselArrowButtons";

import Image from "next/image";

import { EmblaOptionsType } from "embla-carousel";

type PropType = {
  options?: EmblaOptionsType;
};

const bannerItem = [
  {
    alt: "Samorn hair serum",
    src_laptop: "/assets/images/banner/LINE_ALBUM_1_240725_2.jpg",
  },
  {
    alt: "แชมพูปลูกผม Samorn hair tonic",
    src_laptop: "/assets/images/banner/banner_1.jpg",
  },
  {
    alt: "Samorn hair serum",
    src_laptop: "/assets/images/banner/banner_2.jpg",
  },
];

const Banner = ({ options }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="max-w-[1024px] relative mx-auto md:px-6">
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {bannerItem &&
              bannerItem.map((item, index) => (
                <Image
                  key={index}
                  src={item.src_laptop}
                  alt={item.alt}
                  width={1024}
                  height={0}
                  style={{
                    height: "auto",
                    width: "100%",
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
