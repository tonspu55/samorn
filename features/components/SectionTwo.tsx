"use client";
import Case from "./Case";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Review from "./Review";
const CASE_REVIEW = [
  {
    alt: "review",
    src_laptop: "/assets/images/case/LINE_ALBUM_case1_240725_4.jpg",
  },
];
const AWARD = [
  {
    alt: "award",
    src_laptop: "/assets/images/award/LINE_ALBUM_1.jpg",
  },
  {
    alt: "award",
    src_laptop: "/assets/images/award/LINE_ALBUM_2.jpg",
  },
  {
    alt: "award",
    src_laptop: "/assets/images/award/LINE_ALBUM_3.jpg",
  },
  {
    alt: "award",
    src_laptop: "/assets/images/award/LINE_ALBUM_4.jpg",
  },
];
const OPTIONS: EmblaOptionsType = {};
const SectionTwo = () => {
  return (
    <>
      <section id="section2" className="py-4 md:py-6">
        <div className="container  max-w-[1024px] mx-auto md:px-6 px-4 ">
          <h2 className="mb-4  font-bold text-center text-base  lg:text-2xl  text-[#312107]">
            ตัวอย่างจากผู้ใช้
          </h2>
          <div className="mb-4">
            {CASE_REVIEW &&
              CASE_REVIEW.map((item, index) => (
                <Image
                  key={index}
                  src={item.src_laptop}
                  alt={item.alt}
                  className="mt-4"
                  width={1024}
                  height={0}
                  style={{
                    height: "auto",
                    width: "100%",
                  }}
                ></Image>
              ))}
          </div>
          <Case options={OPTIONS}></Case>
          <h2 className="mt-6 mb-4  font-bold text-center text-base  lg:text-2xl  text-[#312107]">
            รีวิว
          </h2>
          <div className="max-w-[300px] mx-auto">
            <Review options={OPTIONS}></Review>
          </div>
          <div className="mx-auto max-w-[500px]">
            {AWARD.map((item, index) => (
              <Image
                key={index}
                src={item.src_laptop}
                alt={item.alt}
                className="mt-4"
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
      </section>
    </>
  );
};

export default SectionTwo;
