"use client";

import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem, Spacer } from "@nextui-org/react";

const thumbnails = [
  {
    alt: "Samorn hair serum",
    src_laptop: "/assets/images/thumbnails/LINE_ALBUM_2_240725.jpg",
  },
  {
    alt: "Samorn hair serum",
    src_laptop: "/assets/images/thumbnails/LINE_ALBUM_3_240725.jpg",
  },
  {
    alt: "Samorn hair serum",
    src_laptop: "/assets/images/thumbnails/LINE_ALBUM_4_240725.jpg",
  },
  {
    alt: "Samorn hair serum",
    src_laptop: "/assets/images/thumbnails/LINE_ALBUM_1_240725.jpg",
  },
];

const SectionOne = () => {
  return (
    <section id="section1" className="py-4 md:py-6">
      <div className="container  max-w-[1024px] mx-auto ">
        <h2 className="flex flex-col px-4 md:px-6 font-bold justify-center text-center text-base  lg:text-2xl  text-[#312107]">
          แชมพูปลูกผมแซมออน กลิ่นละมุน หอมอ่อนโยน สัมผัสสะอาด ใช้ได้ผลดี
          หยุดผมร่วง
        </h2>
        <div className="mt-4 md:px-6 px-4">
          <iframe
            className="w-full aspect-video self-stretch md:min-h-96"
            src="https://www.youtube.com/embed/Un9kGuaioW0?si=A6P7sNfabN7X-dhz"
            frameBorder="0"
            title="Product Overview Video"
            aria-hidden="true"
          />
        </div>
        <div className="mt-4 md:px-6 px-4">
          <Accordion className="!px-0" defaultExpandedKeys={["1"]}>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title={
                <h2 className="md:text-xl text-base font-bold  ">
                  <span>แฮร์ แคร์ แชมพู</span>
                </h2>
              }
            >
              <p>
                ได้จากสารสกัด จากสาหร่ายสไปรูลิน่า สุดยอดสมุนไพร
                สาหร่ายสไปรูลิน่ามีโปรตีน วิตามิน และโคโร ฟิลล์สูง
                จึงช่วยยับยั้งผมร่วง ช่วยกระตุ้นให้ผมงอกใหม่ ที่เห็นได้ชัดคือ
                ให้สารอาหารกับรากผม ทำให้เม็ดสีเพิ่มขึ้นและทำให้ผมดำขึ้น
                อีกทั้งกระตุ้นผมหงอกให้ด่ำขึ้น วิตามิน F หรือ กรดนิวคลีอิก
                ในสาหร่ายสไปรูลิน่า ช่วยนำพาออกซิเจนไปยังเซลล์ต่างๆในร่างกาย
                และส่งผลโดยตรงต่อสุขภาพที่แข็งแรงของเส้นผม
                ช่วยให้เส้นผมดกดำแข็งแรงมีสุขภาพดี
              </p>
              <Spacer y={4} />
              <p>
                และสารประกอบจากแร่ธาตุ ในน้ำแร่ธรรมชาติ คือ MINERAL IONIC
                [NaCI(aq) + AgNOl(aq) AgCI(s) +NaNO3(aq)]
                มีแร่ธาตุที่จำเป็นและมีความสำคัญ ในการกระตุ้นเซลล์
                ช่วยบำรุงผมและหนังศีรษะ ช่วยผลัดเซลล์ที่เสียแล้ว
                รักษาสมดุลของผนังเซลล์หนังศีรษะ ช่วยคงความชุ่มชื้น
                และลดการแห้งกร้านของเส้นผมโดยนำมาสังเคราะห์ตามกรรมวิธีการผลิต
                เพื่อให้ได้ แฮร์ แคร์ แชมพู สูตรสารสกัดสาหร่ายสไปรูลิน่า
                +สารประกอบน้ำแร่ธรรมชาติ ซึ่งมีองค์ประกอบ แร่ธาตุที่สำคัญ เช่น
                calcium fluoride magnesium sodium potassium sulphate bicarbonate
                zinc
              </p>
              <Spacer y={4} />
              <p className="font-bold">วิธีใช้</p>
              <Spacer y={2} />
              <ul className="list-disc pl-5">
                <li>
                  สระผมด้วย แซมออน แฮร์ แคร์ แชมพู วันละ 2 ครั้ง เช้า-เย็น
                  ครั้งละ 2 เที่ยว
                </li>
                <li>ใช้ปลายนิ้วเกาเบาๆ ให้ทั่วศีรษะ แล้วล้างออก</li>
                <li>เช็ดผมหรือเป่าให้แห้ง</li>
              </ul>
              <Spacer y={4} />
              <p className="font-bold">
                ผลิตภัณฑ์ได้แจ้งการขออนุญาตจากสำนักงานคณะกรรมการอาหารและยาเป็นที่เรียบร้อยแล้ว
              </p>
              <Spacer y={2} />
              <p>เลขทะเบียนจดแจ้ง Samorn Hair Care Shampoo10-1-6500017988</p>
              <Spacer y={4} />
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title={
                <h2 className="md:text-xl text-base font-bold">
                  <span>แฮร์ เซรั่ม</span>
                </h2>
              }
            >
              <p>
                ได้จากสารสกัดสาหร่ายสไปรูลิน่า โดยกระบวนการแยกโมเลกุลเดี่ยว
                ระดับนาโน สามารถซึมผ่านชั้นหนังศีรษะ เพื่อบำรุงรากผมได้ดี
                และได้ผลเร็วขึ้น โดยไม่มีสารเคมีที่เป็นอันตราย
                ผ่านการตรวจแลบมาตรฐานทางวิทยาศาสตร์
              </p>
              <Spacer y={4} />
              <p>
                ไม่มีส่วนผสมของแอลกอฮอล์ คุณภาพสูงสุดเหมาะสำหรับผู้ที่ผมร่วง
                ผมบาง ศีรษะมัน มีกลิ่นบนหนังศีรษะ ศีรษะล้าน สกัดจากน้ำแร่
                Mineral lonic ผสานเข้ากับสารสกัด ระดับนาโนจากสาหร่าย Spirulina
                โดยกระบวนการแยกโมเลกุลเดี่ยว สามารถซึมผ่านชั้นหนังศีรษะ
                ช่วยบำรุงเซลล์แรกผม ด้วยคุณภาพสูงสุด
                ขจัดกลิ่นบนหนังศีรษะได้อย่างหมดจด
                ช่วยกระตุ้นโลหิตให้ไหลเวียนได้ดียิ่งขึ้น
                เพื่อที่จะสามารถหล่อเลี้ยงรากผมได้อย่างทั่วถึง
                ช่วยบำรุงรากผมได้ดี และฟื้นฟูเส้นผม
                พร้อมดูแลหนังศีรษะโดยไม่มีผลข้างเคียงที่เป็นอัน ตราย
              </p>
              <Spacer y={4} />
              <p>
                การทำงานของแซมออนเซรั่ม
                จะเข้าไปบำรุงเส้นผมและสามารถสร้างเซลล์ผมเก่า
                ที่หยุดการเติบโตและถูก ชั้นไขมันปกปิด
                ให้เกิดมีเซลล์ผมใหม่เกิดขึ้นมาได้อีกครั้ง
                บำรุงและดูแลเส้นผมลึกถึงชั้นรากของเซลล์ผมเพิ่มความถี่ในการขึ้นของเส้นผม
                ทำให้ผมที่ขึ้นใหม่มีเส้นหนาและแข็งแรงมีความหนาแน่นอย่างรวดเร็ว
                ให้สารอาหารแก่เส้นผมและรากผม
                ทำให้ผมเกิดการงอกใหม่ดูหนาขึ้นและดกด่าขึ้นอย่างเห็นได้ชัด
              </p>
              <Spacer y={4} />
              <p className="font-bold">วิธีใช้</p>
              <Spacer y={2} />
              <ul className="list-disc pl-5">
                <li>
                  หยดแซมออนแฮร์เซรั่ม บนหนังศีษระที่มีปัญาหาครั้งละ 2-3 หยด
                </li>
                <li>หยดวันละ 3 ครั้ง เช้า- กลางวัน-เย็น</li>
                <li>นวดเบาๆ ตรงที่หยดแชมออนเซรั่ม</li>
                <li>
                  แซมออนแฮร์เซรั่ม บางเบา ไม่เหนียวเหนอะหนะ ไม่ต้องล้างออก
                </li>
              </ul>
              <Spacer y={4} />
              <p className="font-bold">
                ผลิตภัณฑ์ได้แจ้งการขออนุญาดจากสำนักงานคณะกรรมการอาหารและยาเป็นที่เรียบร้อยแล้ว
              </p>
              <Spacer y={2} />
              <p>เลขทะเบียนจดแจ้ง Samorn Hair Serum 10-1-6500017986</p>
              <Spacer y={4} />
            </AccordionItem>
          </Accordion>
        </div>
        <div className="md:px-6 px-4">
          {thumbnails &&
            thumbnails.map((item, index) => (
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
  );
};

export default SectionOne;
