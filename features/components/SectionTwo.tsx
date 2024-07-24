"use client ";

import Image from "next/image";
import Link from "next/link";

const COURSE_ITEM = [
  {
    alt: "IELTS",
    src: "/assets/images/ielts.svg",
    course_type: "IELTS",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfJKAaE2mJ-ODUTjufKGWTpFgCnM0Js-6KxaCarj61ibRz-Vw/viewform",
  },
  {
    alt: "NETSAT MATHS",
    src: "/assets/images/netsat_maths.svg",
    course_type: "NETSAT",
    url: "https://forms.gle/idnD5rQYwx3BSrki6",
  },
  {
    alt: "NETSAT PHYSICS",
    src: "/assets/images/netsat_physics.svg",
    course_type: "NETSAT",
    url: "https://forms.gle/qYJRSDY62pFU2gwR7",
  },
  {
    alt: "NETSAT ENGLISH",
    src: "assets/images/netsat_english.svg",
    course_type: "NETSAT",
    url: "https://forms.gle/mhrg5xd6Ts9Q3wiD6",
  },
  {
    alt: "NETSAT BIOLOGY",
    src: "/assets/images/netsat_biology.svg",
    course_type: "NETSAT",
    url: "https://forms.gle/9GM69zpknrSq1p1v9",
  },
  {
    alt: "NETSAT CHEMISTRY",
    src: "/assets/images/netsat_chemistry.svg",
    course_type: "NETSAT",
    url: "https://forms.gle/9GM69zpknrSq1p1v9",
  },
  {
    alt: "DIGITAL SAT MATH",
    src: "/assets/images/digital_sat_math.svg",
    course_type: "DIGITAL SAT",
    url: "https://forms.gle/vzKS7bHKEBJb4fyy8",
  },
  {
    alt: "DIGITAL SAT ENGLISH",
    src: "/assets/images/digital_sat_english.svg",
    course_type: "DIGITAL SAT",
    url: "https://forms.gle/TM6vaSjL2eJp7UsE9",
  },
  {
    alt: "RLA",
    src: "assets/images/rla.svg",
    course_type: "GED",
    url: "https://forms.gle/8x4QRZXqpyN6VKrS9",
  },
  {
    alt: "social studies",
    src: "assets/images/social_studies.svg",
    course_type: "GED",
    url: "https://forms.gle/4gUK4oGdiWnsWBAt5",
  },
  {
    alt: "mathematical reasoning",
    src: "assets/images/mathematical_reasoning.svg",
    course_type: "GED",
    url: "https://forms.gle/CJGtqSaLiYzuPfeL9",
  },
  {
    alt: "science",
    src: "assets/images/science.svg",
    course_type: "GED",
    url: "https://forms.gle/JBgPt6HSGWKyceux9",
  },
  {
    alt: "PET",
    src: "/assets/images/pet.svg",
    course_type: "UNIVERSITY",
    url: "https://forms.gle/3mUNidR66UUfjc9w9",
  },
  {
    alt: "FEC",
    src: "/assets/images/fec.svg",
    course_type: "UNIVERSITY",
    url: "https://forms.gle/MKH8nKkDH7Lu171o7",
  },
  {
    alt: "CAE",
    src: "/assets/images/cae.svg",
    course_type: "UNIVERSITY",
    url: "https://forms.gle/mjuPAyzNd9ijANXYA",
  },
];
const SectionTwo = () => {
  return (
    <>
      <section id="section2" className="py-8">
        <div className="container px-4 lg:px-0 max-w-[1280px] mx-auto ">
          <div className="mb-6">
            <h2 className="text-xl font-bold  lg:text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">
              IELTS Mock Test
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {COURSE_ITEM.filter((item) => item.course_type === "IELTS").map(
              (item, index) => {
                return (
                  <div key={index}>
                    <Link target="_blank" href={item.url}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={500}
                        height={500}
                      ></Image>
                    </Link>
                  </div>
                );
              }
            )}
          </div>
          <div className="mb-6 mt-10">
            <h2 className="text-xl font-bold  lg:text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">
              NETSAT
            </h2>
            <h4 className=" lg:text-xl">ผู้สอบ : นักเรียน ม.ปลาย</h4>
            <h4 className=" lg:text-xl ">
              วัตถุประสงค์ : สอบเข้ามหาวิทยาลัยขอนแก่น
            </h4>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {COURSE_ITEM.filter((item) => item.course_type === "NETSAT").map(
              (item, index) => {
                return (
                  <div key={index}>
                    <Link target="_blank" href={item.url}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={500}
                        height={500}
                      ></Image>
                    </Link>
                  </div>
                );
              }
            )}
          </div>
          <div className="mb-6 mt-10">
            <h2 className="text-xl font-bold  lg:text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">
              Digital SAT
            </h2>
            <h4 className=" lg:text-xl">ผู้สอบ : นักเรียน ม.ปลาย</h4>
            <h4 className=" lg:text-xl ">
              วัตถุประสงค์ : สอบเข้าภาคอนเตอร์มหาวิทยาลัยชั้นนำ (มหิดล จุฬา
              ธรรมศาสตร์ เกษตรฯ) หรือมหาวิทยาลัยในต่างประเทศ เช่น อเมริกา
              มหาวิทยาลัยขอนแก่นใช้แค่ SAT Math
            </h4>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {COURSE_ITEM.filter(
              (item) => item.course_type === "DIGITAL SAT"
            ).map((item, index) => {
              return (
                <div key={index}>
                  <Link target="_blank" href={item.url}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={500}
                      height={500}
                    ></Image>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="mb-6 mt-10">
            <h2 className="text-xl font-bold  lg:text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">
              GED
            </h2>
            <h4 className=" lg:text-xl">
              ผู้สอบ (Test Takers): ผู้มีอายุ 16 ปีขึ้นไป
            </h4>
            <h4 className=" lg:text-xl ">
              วัตถุประสงค์ (Objectives): สอบเทียบเท่า ม.6
            </h4>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {COURSE_ITEM.filter((item) => item.course_type === "GED").map(
              (item, index) => {
                return (
                  <div key={index}>
                    <Link target="_blank" href={item.url}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={500}
                        height={500}
                      ></Image>
                    </Link>
                  </div>
                );
              }
            )}
          </div>
          <div className="mb-6 mt-10">
            <h2 className="text-xl font-bold  lg:text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">
              Cambridge Exams (CEFR Mapping)
            </h2>
            <h4 className=" lg:text-xl">ผู้สอบ : บุคคลทั่วไป</h4>
            <h4 className=" lg:text-xl ">
              วัตถุประสงค์ : สอบวัดระดับภาษาอังกฤษ (CEFR)
            </h4>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {COURSE_ITEM.filter(
              (item) => item.course_type === "UNIVERSITY"
            ).map((item, index) => {
              return (
                <div key={index}>
                  <Link target="_blank" href={item.url}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={500}
                      height={500}
                    ></Image>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
