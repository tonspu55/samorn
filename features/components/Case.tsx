"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./EmblaCarouselSelectedSnapDisplay";
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
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240725_2.jpg",
  },
  {
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240725_4.jpg",
  },
  {
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240725_5.jpg",
  },
  {
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240725_6.jpg",
  },
  {
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240725_7.jpg",
  },
  {
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240725_8.jpg",
  },
  {
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240725_1.jpg",
  },
  {
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240725_9.jpg",
  },
  {
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240725_10.jpg",
  },
  {
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240725_3.jpg",
  },
  {
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240725_11.jpg",
  },
  {
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240802_1.jpg",
  },
  {
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240802_2.jpg",
  },
  {
    alt: "case",
    src_laptop: "/assets/images/case/LINE_ALBUM_case_240802_3.jpg",
  },
];

const Case = ({ options }: PropType) => {
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

export default Case;
