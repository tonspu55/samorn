import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

import { Noto_Sans_Thai } from "next/font/google";
import { cn } from "@/features/components/libs/utils";

export const metadata: Metadata = {
  title: "แชมพูปลูกผม SAMORN HAIR TONIC",
  description: "เริ่มต้นดี เริ่มที่แชมพูดี อ่อนโยน ปลอดภัย ไร้กังวล",
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
