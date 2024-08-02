"use client";

import type { IconProps } from "@iconify/react";

import React from "react";
import { Link, Spacer } from "@nextui-org/react";
import { Icon } from "@iconify/react";

type SocialIconProps = Omit<IconProps, "icon">;

const socialItems = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61552595019036&mibextid=ZbWKwL",
    icon: (props: SocialIconProps) => (
      <Icon {...props} icon="fontisto:facebook" />
    ),
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
          {socialItems.map((item) => (
            <Link
              key={item.name}
              isExternal
              className="text-default-400"
              href={item.href}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="w-5" />
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
