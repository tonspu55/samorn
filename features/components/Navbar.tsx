"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Divider,
} from "@nextui-org/react";

import { cn } from "@/features/components/libs/utils";

const menuItems = [
  { label: "ศูนย์สอบ EPC", target: "section1" },
  { label: "ทดลองสอบ", target: "section2" },
  { label: "คอร์สที่เปิดสอน", target: "section3" },
  { label: "ติดต่อเรา", target: "section4" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 60; // เพิ่มระยะ 60px

    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const section3 = document.getElementById("section3");
    const section4 = document.getElementById("section4");

    if (section1 && section2 && section3 && section4) {
      if (
        scrollPosition < section1.offsetTop ||
        scrollPosition > section4.offsetTop + section4.offsetHeight
      ) {
        setActiveLink("");
      } else if (scrollPosition < section2.offsetTop) {
        setActiveLink("section1");
      } else if (scrollPosition < section3.offsetTop) {
        setActiveLink("section2");
      } else if (scrollPosition < section4.offsetTop) {
        setActiveLink("section3");
      } else {
        setActiveLink("section4");
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60; // offset top 60px
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
    <NextUiNavbar
      maxWidth="xl"
      classNames={{
        base: cn("bg-white"),
        wrapper: "w-full justify-center px-4 lg:px-0",
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <NavbarBrand>
        <Image
          priority
          src="/assets/images/logo.svg"
          alt="Logo"
          width={280}
          height={60}
        ></Image>
      </NavbarBrand>

      {/* Right Content */}
      {isLargeScreen && (
        <NavbarContent className="md:flex" justify="end">
          {menuItems.map((item, index) => (
            <NavbarItem className="cursor-pointer" key={`${item}-${index}`}>
              <Link
                key={index}
                className={
                  activeLink === item.target
                    ? "text-[#003359] underline underline-offset-8 "
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

      {!isLargeScreen && <NavbarMenuToggle className="text-default-600" />}

      <NavbarMenu
        className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 "
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
                  ? "text-[#003359]"
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
    </NextUiNavbar>
  );
};

export default Navbar;
