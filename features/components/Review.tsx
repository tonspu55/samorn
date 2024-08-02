"use client";

import useEmblaCarousel from "embla-carousel-react";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/features/components/EmblaCarouselArrowButtons";

import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./EmblaCarouselSelectedSnapDisplay";

import Image from "next/image";

import { EmblaOptionsType } from "embla-carousel";

type PropType = {
  options?: EmblaOptionsType;
};

const bannerItem = [
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_15.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_16.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_17.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_18.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_19.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_1.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_2.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_3.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_4.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_5.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_6.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_7.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_8.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_9.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_10.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_11.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_12.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_13.jpg",
  },
  {
    alt: "review",
    src_laptop: "/assets/images/chat/LINE_ALBUM_reviews_240802_14.jpg",
  },
];

const Review = ({ options }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

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
          <SelectedSnapDisplay
            selectedSnap={selectedSnap}
            snapCount={snapCount}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
