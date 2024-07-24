import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

import { Noto_Sans_Thai } from "next/font/google";
import { cn } from "@/features/components/libs/utils";

export const metadata: Metadata = {
  title: "ทดสอบภาษาอังกฤษฟรี ด้วยแบบจำลองการทดสอบที่ดีที่สุด และครบวงจร",
  description:
    "เตรียมพร้อมสำหรับอนาคตของคุณกับการทดสอบจำลองภาษาอังกฤษที่ครอบคลุมและฟรี! เรามีการทดสอบจาก NETSAT, IELTS, Digital SAT, GED, และการทดสอบ Cambridge ที่วัดตามมาตรฐาน CEFR เหมาะสำหรับทุกวัย ไม่ว่าจะเป็นนักเรียนที่ต้องการสอบเข้ามหาวิทยาลัย คนทำงานที่ต้องการโปรโมท หรือเตรียมตัวเรียนต่อต่างประเทศ ทดสอบกับเราวันนี้เพื่อเพิ่มโอกาสในการประสบความสำเร็จ ปลดล็อกศักยภาพของคุณและประหยัดค่าใช้จ่าย!",
};
const FONT = Noto_Sans_Thai({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <meta
        name="keywords"
        content="การทดสอบจำลอง, ทดสอบภาษาอังกฤษ, NETSAT, IELTS, Digital SAT, GED, Cambridge test, CEFR, ทดสอบฟรี, การศึกษา, วอลล์สตรีท อิงลิช, ขอนแก่น, อุดรธานี, เตรียมตัวสอบ, เรียนต่อต่างประเทศ, เพิ่มโอกาส, ความสำเร็จ, ทดสอบสำหรับเด็ก, ภาษาอังกฤษเพื่อการสื่อสาร"
      />
      <body
        className={cn(
          "min-h-screen bg-background  antialiased",
          FONT.className
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
