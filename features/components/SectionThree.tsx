"use client";

import React from "react";
import { Library, ArrowRight } from "lucide-react";
import { Spacer } from "@nextui-org/spacer";

const SectionThree = () => {
  return (
    <section
      id="section3"
      className="py-8 bg-gradient-to-r from-blue-600  to-indigo-400 "
    >
      <div className="container px-4 lg:px-0 max-w-[1080px] mx-auto ">
        <div className="flex  mb-2 justify-center">
          <Library size={36} className="text-white" />
        </div>
        <h2 className="text-xl font-bold  text-center  lg:text-3xl  text-white">
          <span>คอร์สที่เปิดสอนที่ EPC</span>
        </h2>
        <h4 className="flex flex-col text-white lg:text-xl mt-6 ">
          <span>
            EPC เราสานฝันน้อง ๆ ให้เป็นจริง !! EPC
            คือศูนย์ติวที่ครบวงจรที่สุดในภาคอีสาน มีผู้เรียนแล้วสอบได้จริง
            เห็นผล 100%
          </span>
          <Spacer y={4} />
          <span>
            <ArrowRight
              size={20}
              className="inline mr-[5px] mt-[-4px]"
            ></ArrowRight>
            GED ที่จะทำให้น้อง ๆ สามารถจบ ม.6
            ได้เร็วขึ้นวุฒิการศึกษารับรองโดยกระทรวงการศึกษา และใช้เรียนต่อ
            สอบต่อ เมืองนอกได้สบาย
          </span>
          <Spacer y={2} />
          <span>
            <ArrowRight
              size={20}
              className="inline mr-[5px] mt-[-4px]"
            ></ArrowRight>
            IETLS ครบ 4 ทักษะที่มีการรับประกันผลที่ดีขึ้น สอบ เรียนต่อ ใช้ทำงาน
            มีผู้ประสบความสำเร็จแล้วมากมายกับเรา
          </span>
          <Spacer y={2} />
          <span>
            <ArrowRight
              size={20}
              className="inline mr-[5px] mt-[-4px]"
            ></ArrowRight>
            Premed เพื่อเตรียมน้อง ๆ ในคอร์สเตรียมแพทย์ ติดหมอก่อนใคร
          </span>
          <Spacer y={2} />
          <span>
            <ArrowRight
              size={20}
              className="inline mr-[5px] mt-[-4px]"
            ></ArrowRight>
            SAT เพื่อสอบต่อในมหาวิทยาลัยโดยเฉพาะน้อง ๆ ที่สนใจเรียนอินเตอร์
            บริหาร วิศวะ และเรียนต่อต่างประเทศ
          </span>
        </h4>
      </div>
    </section>
  );
};

export default SectionThree;
