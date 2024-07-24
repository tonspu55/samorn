"use client";

import React from "react";
import { Accordion, AccordionItem, Spacer } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const SectionFour = () => {
  return (
    <section id="section4" className="py-8 ">
      <div className="container px-4 lg:px-0 max-w-[1080px] mx-auto ">
        <Accordion defaultExpandedKeys={["1"]}>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title={
              <h2 className="text-xl font-bold lg:text-2xl ">
                <span>ติดต่อเรา</span>
              </h2>
            }
          >
            <div className="flex flex-col">
              <p>Greater Good Education Group Co., Ltd.Headquarter</p>
              <p>Kaen Nakhon Office Park Building,</p>
              <p>Room No. 304, 11 Sri-Thatprachasanti Rd.,</p>
              <p>40000 Khonkaen, Thailand</p>
              <Spacer y={4}></Spacer>
              <p>
                <Icon
                  className="mr-2 inline-block "
                  icon="fontisto:email"
                ></Icon>
                contact@greatergoodeducation.com
              </p>
              <p>
                <Icon
                  className="mr-2 inline-block "
                  icon="fontisto:phone"
                ></Icon>
                +66 (0) 43-000-222
              </p>
              <p>
                <Icon
                  className="mr-2 inline-block "
                  icon="fontisto:line"
                ></Icon>
                <Link
                  className="text-blue-600"
                  target="_blank"
                  href="https://lin.ee/GUl6mvQ"
                >
                  https://lin.ee/GUl6mvQ
                </Link>
              </p>
              <Spacer y={4}></Spacer>
              <p>Wall Street English ขอนแก่น</p>
              <p>เซ็นทรัลพลาซาขอนแก่น ชั้น 5</p>
              <p>
                <Icon
                  className="mr-2 inline-block "
                  icon="fontisto:phone"
                ></Icon>
                043 000 222
              </p>
              <p>
                <Icon
                  className="mr-2 inline-block "
                  icon="fontisto:line"
                ></Icon>
                <Link
                  className="text-blue-600"
                  target="_blank"
                  href="https://page.line.me/wsekhonkaen"
                >
                  https://page.line.me/wsekhonkaen
                </Link>
              </p>
              <Spacer y={4}></Spacer>
              <p>Wall Street English อุดรธานี </p>
              <p>เซ็นทรัลอุดรธานี ชั้น 4</p>
              <p>
                <Icon
                  className="mr-2 inline-block "
                  icon="fontisto:phone"
                ></Icon>
                042 110 772
              </p>
              <p>
                <Icon
                  className="mr-2 inline-block "
                  icon="fontisto:line"
                ></Icon>
                <Link
                  className="text-blue-600"
                  target="_blank"
                  href="https://page.line.me/wseudon"
                >
                  https://page.line.me/wseudon 
                </Link>
              </p>
              <Spacer y={4}></Spacer>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title={
              <h2 className="text-xl font-bold lg:text-2xl ">
                <span>เกี่ยวกับเรา</span>
              </h2>
            }
          >
            <p>
              เราคือกลุ่มคนที่มีประสบการณ์ด้านการศึกษามากกว่า 25 ปี
              เรามีเป้าหมายที่จะพัฒนาประชากรไทยให้เป็นปรากรโลกอย่างสมบูรณ์แบบ
              เพราะเราเห็นว่าการศึกษามีความสำคัญกับเยาวชนไทย
              และเข้าใจว่าภาษาอังกฤษมีความจำเป็นกับชัวิตประจำวันและต่อเนื่องไปถึงอนาคต
              เราจึงมุ่งมั่นที่จะผลักดันให้คนไทยมีความสามารถด้านภาษาอังกฤษซึ่งเป็นภาษาสากลของโลก
              และเราทราบดีว่า นอกจากความรู้
              ความสามารถทางด้านวิชาการแล้วสิ่งหนึ่งที่จำเป็นมากต่อสังคมคือ
              การมีบุคลิกภาพที่ดี และแนวคิดเชิงบวก ทำให้เราตั้งมั่นว่า
              เราจะพัฒนานวัตรกรรมใหม่ทางด้านการศึกษาเพื่อเปลี่ยนอนาคตทุกคนให้ดีขึ้นกว่าเดิม
              เราจะทำหน้าที่สานฝันอนาคตให้กับเยาวชนไทย
              และต่อเนื่องไปยังสังคมไทยให้เกิดความก้าวหน้าแบบมั่นคงและสมบูรณ์ที่สุดเท่าที่เราจะทำได้
            </p>
            <Spacer y={4} />
            <p className="font-bold">Exams Preparation Center</p>
            <Spacer y={4} />
            <p>
              Exam Preparation Center คือ ศูนย์ติว และ ศูนย์สอบ ครบวงจร
              สำหรับน้อง ๆ ที่กำลังจะเข้าศีกษาต่อในระดับอุดมศึกษา
              ไม่ว่าจะเป็นสายแพทย์ สายสังคม สายศิลป์
              หรือต้องการศึกษาต่อในต่างประเทศ
              เราให้บริการแนะแนวการศึกษาต่อต่างประเทศ และในประเทศ
              โดยเราได้คัดสรรบุคลากรที่มากประสบการณ์และคุณภาพ
              ชำนาญแนวข้อสอบของแต่ละสายคณะวิชา เช่น NETSAT, GED, SAT หรือ IELTS
              ซึ่งเรากล้ารับประกันผลการเรียนในทุกสายคณะวิชา{" "}
            </p>
            <Spacer y={4} />
            <p className="font-bold">Innovative Learning Centers</p>
            <Spacer y={4} />
            <p>
              Wall Street English ขอนแก่น และ อุดร เป็นแฟรนไชส์แห่งแรกในเอเชีย
              เราได้รับรางวัล การบริการที่ดีที่สุดในโลก ติดต่อกันหลายปีซ้อน
              นั่นเป็นเพราะเราใส่ใจ ดูแล นักเรียนทุกคนของเรา
              เรามุ่งเน้นที่จะพัฒนานักเรียนของเราให้ประสบความสำเร็จในการเรียนและอาชีพ
              ซึ่งเป้าหมายหลักของเรา คือการสานฝันของนักเรียนให้เป็นจริง
              และทำให้การลงทุนในการศึกษา คือสิ่งที่คุ้มค่าที่สุดในชีวิต
            </p>
            <Spacer y={4} />
            <p>
              <span className="font-bold">CuriooKids</span>{" "}
              โรงเรียนสอนภาษาอังกฤษและทักษะแห่งอนาคต สำหรับเด็กอายุ 1.5-12 ปี
            </p>
            <Spacer y={4} />
            <p>
              โลกของเรากำลังเปลี่ยนไป
              ทำให้อาชีพในอนาคตก็กำลังเปลี่ยนไปแบบที่เราไม่รู้ตัว เด็ก ๆ
              ในวันนี้จึงจำเป็นต้องมีทักษะที่จำเป็นในอนาคต อันได้แก่
              ทักษะการใช้ภาษา ทักษะทางเทคโนโลยี ทักษะทางบุคลิกภาพ
              ภาวะผู้นำที่ดีมีคุณธรรม
              และทักษะในการใช้ความคิดสร้างสรรค์อันนำมาซึ่งนวัตกรรมใหม่ๆ ที่
              CuriooKids เราคือ นวัตกรรมใหม่แห่งการเรียนรู้สู่อนาคต
              เราใช้หลักสูตรการเรียนการสอนที่ได้รับรางวัลว่ามากมาย
              และยังเป็นหนึ่งในหลักสูตรที่ดีที่สุดของโลก และเรา CuriooKids
              เราคือ เพื่อนคู่คิดของผู้ปกครองทุกคน
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default SectionFour;
