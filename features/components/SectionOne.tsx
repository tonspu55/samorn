"use client";

import React from "react";
import { Award } from "lucide-react";

const SectionOne = () => {
  return (
    <section id="section1" className="py-8">
      <div className="container px-4 lg:px-0 max-w-[1280px] mx-auto ">
        <h1 className="flex font-bold justify-center lg:text-3xl text-xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">
          เตรียมพร้อมก่อนเข้าสนามสอบ ด้วยแบบทดลองจำลองข้อสอบที่เหมาะกับคุณ
        </h1>
        <h4 className="lg:text-center lg:text-xl mt-6 ">
          แบบทดลองสอบที่ถูกพัฒนาจากผู้เชี่ยวชาญด้านการศึกษา
          มีประสอบการณ์ยาวนานจากสนามสอบจริงให้คุณได้ทดลอง
          ฝึกฝนก่อนเข้าห้องสอบฟรี เลือกแบบจำลองสอบที่เหมาะกับคุณ
          ไม่ว่าคุณจะกำลังเตรียมตัวไปเรียนต่อต่าประเทศ
          หรือสอบเข้ามหาวิทยาลับชั้นนำ หรือเพื่อการทำงานและธุรกิจ{" "}
        </h4>
        <div className="flex mt-6 mb-2 justify-center">
          <Award size={36} className="text-[#003359]" />
        </div>
        <h2 className="flex flex-col  font-bold justify-center text-center  lg:text-3xl  text-[#003359]">
          <span>ฟรีและคุ้มค่า ลองสอบจำลองฟรี ประหยัดค่าใช้จ่าย</span>
          <span>เลือกแบบจำลองการทดสอบที่เหมาะกับคุณ</span>
        </h2>
      </div>
    </section>
  );
};

export default SectionOne;
