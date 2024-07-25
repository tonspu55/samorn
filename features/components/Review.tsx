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
  //   {
  //     alt: "review",
  //     src_laptop: "/assets/images/chat/LINE_ALBUM_review.jpg",
  //   },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_review_240725_1.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_review_240725_2.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_review_240725_3.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_review_240725_4.jpg",
  },
];

const Review = ({ options }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <div className="embla">
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
      <div className="mx-auto">
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
    </div>
  );
};

export default Review;
