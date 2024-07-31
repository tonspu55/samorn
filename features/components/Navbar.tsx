"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Divider,
} from "@nextui-org/react";

import type { NavbarProps } from "@nextui-org/react";

import { cn } from "@/features/components/libs/utils";

const menuItems = [
  { label: "ผลิตภัณฑ์", target: "section1" },
  { label: "ตัวอย่างผู้ใช้ & รีวิว", target: "section2" },
  { label: "สั่งซื้อ", target: "section3" },
];

const Header = (props: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 60; // เพิ่มระยะ 60px

    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");

    if (section1 && section2 && section3) {
      if (
        scrollPosition < section1.offsetTop ||
        scrollPosition > section3.offsetTop + section3.offsetHeight
      ) {
        setActiveLink("");
      } else if (scrollPosition < section2.offsetTop) {
        setActiveLink("section1");
      } else if (scrollPosition < section3.offsetTop) {
        setActiveLink("section2");
      } else {
        setActiveLink("section3");
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -50; // offset top 60px
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      {...props}
      maxWidth="lg"
      isBordered
      classNames={{
        base: cn("border-default-100", {
          "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
        }),
        wrapper: "w-full justify-center bg-transparent",
        item: "hidden md:flex",
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {!isLargeScreen && <NavbarMenuToggle className="text-default-600" />}

      <NavbarBrand>
        <Image
          priority
          src="/assets/images/logo.jpg"
          alt="Logo"
          width={130}
          height={60}
        ></Image>
      </NavbarBrand>

      {isLargeScreen && (
        <NavbarContent
          className="hidden h-11 gap-4 rounded-full border-small border-default-200/20 bg-background/60 px-4 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50 md:flex"
          justify="center"
        >
          {menuItems.map((item, index) => (
            <NavbarItem className="cursor-pointer" key={`${item}-${index}`}>
              <Link
                key={index}
                className={
                  activeLink === item.target
                    ? "text-[#312107] underline underline-offset-8 "
                    : "text-default-600"
                }
                onClick={() => scrollToSection(item.target)}
                size="sm"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      )}

      <NavbarContent justify="end">
        <NavbarItem className="ml-2 !flex gap-2">
          <Button
            className="sm:flex"
            color="primary"
            radius="full"
            style={{
              boxShadow: "inset 0 0 4px #312107",
            }}
            variant="ghost"
            onClick={() => scrollToSection("section3")}
          >
            สั่งซื้อสินค้า
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
        className="top-[calc(var(--navbar-height)_-_1px)] max-h-[100vh] bg-default-200/50 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="cursor-pointer" key={`${item}-${index}`}>
            <Link
              key={index}
              className={
                activeLink === item.target
                  ? "text-[#312107]"
                  : "text-default-600"
              }
              onClick={() => scrollToSection(item.target)}
              size="sm"
            >
              {item.label}
            </Link>
            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
