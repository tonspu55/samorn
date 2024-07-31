"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const PRODUCT_ITEM = [
  {
    title: "Diamond set เซรั่ม 2 (แถมฟรี แชมพู 1)",
    src: "/assets/images/product/s430p.webp",
    url: "https://shop.line.me/@samorn9/product/1006181555",
    price: "2,990",
    discount_price: "1,890",
  },
  {
    title: "แชมพู SamOrn 2",
    src: "/assets/images/product/s431p.webp",
    url: "https://shop.line.me/@samorn9/product/1006198792",
    price: "1,380",
    discount_price: "990",
  },
  {
    title: "Gold set เซรั่ม 1 (แถมฟรี แชมพู 1)",
    src: "/assets/images/product/s432p.webp",
    url: "https://shop.line.me/@samorn9/product/1006181550",
    price: "1,980",
    discount_price: "1,290",
  },
  {
    title: "แชมพู SamOrn 1",
    src: "/assets/images/product/s433p.webp",
    url: "https://shop.line.me/@samorn9/product/1006181555",
    price: "",
    discount_price: "690",
  },
];

const SectionThree = () => {
  return (
    <section id="section3" className="py-4 md:py-6">
      <div className="container px-4 lg:px-0 max-w-[1080px] mx-auto ">
        <h2 className="mb-4  font-bold text-center text-base  lg:text-2xl  text-[#312107]">
          สั่งซื้อสินค้า
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCT_ITEM.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={500}
                ></Image>
                {/* <Link target="_blank" href={item.url}>
                </Link> */}
                <div className="flex items-start justify-between ">
                  <h3 className="text-small font-medium text-default-700 mt-4">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-start justify-between flex-col md:flex-row">
                  <p className=" font-bold text-default-700 mt-2">
                    {item?.price && (
                      <span className="mr-2 font-medium text-default-400 line-through ">
                        {item.price}
                      </span>
                    )}
                    {item.discount_price} บาท
                  </p>
                  <Link
                    className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    color="success"
                    target="_blank"
                    href={item.url}
                  >
                    สั่งซื้อสินค้า
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
