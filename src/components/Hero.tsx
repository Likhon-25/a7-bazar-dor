"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HeroBanner = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      }),
    );
  }, []);

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
      <div className="flex min-h-[320px] flex-col items-center justify-between gap-8 overflow-hidden rounded-[28px] border border-green-50 bg-[#f8fbf8] px-5 py-8 sm:px-8 sm:py-10 md:flex-row md:gap-6 lg:px-10">
        <div className="w-full max-w-2xl">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
            {date}
          </span>

          <h1 className="mt-4 text-3xl leading-[1.3] font-bold tracking-tight text-[#202923] sm:text-4xl lg:text-[42px]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <button
            type="button"
            className="btn mt-8 border-0 bg-[#078c43] px-6 py-4 text-white hover:bg-[#067638]"
          >
            সব পণ্য দেখুন
          </button>
        </div>

        <div className="relative flex w-full shrink-0 items-center justify-center md:w-[35%]">
          
          <Image
            src="/bazar-hero.png"
            alt="বিভিন্ন তাজা সবজির ঝুড়ি"
            width={315}
            height={263}
            priority
            className="relative h-auto w-[230px] sm:w-[270px] md:w-full md:max-w-[315px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
