"use client";
import React from "react";
import { Spinner } from "@nextui-org/react";

const Preloader = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white z-[9999]">
      <Spinner color="primary" size="lg" />
    </div>
  );
};

export default Preloader;
