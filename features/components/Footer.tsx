"use client";

import type { IconProps } from "@iconify/react";

import React from "react";
import { Link, Spacer } from "@nextui-org/react";
import Image from "next/image";

type SocialIconProps = Omit<IconProps, "icon">;
const socialItems = [
  {
    alt: "facebook",
    href: "https://www.facebook.com/profile.php?id=61552595019036&mibextid=ZbWKwL",
    src: "/assets/images/facebook.jpeg",
  },
];

const Footer = () => {
  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 pb-10 pt-4 lg:px-8">
        {/* <div className="flex items-center justify-center">
          <Image
            priority
            src="/assets/images/logo.jpg"
            alt="Logo"
            width={140}
            height={60}
          ></Image>
        </div> */}

        <div className="flex justify-center mt-5 gap-x-4">
          {socialItems.map((item, index) => (
            <Link key={index} isExternal href={item.href}>
              <Image
                src={item.src}
                alt={item.alt}
                width={50}
                height={50}
              ></Image>
            </Link>
          ))}
        </div>
        <Spacer y={4} />
        <p className=" text-center text-small text-default-400">
          &copy; 2024 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
