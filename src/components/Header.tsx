"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";

const Header = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      }),
    );
  }, []);

  return (
    <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href={"/"}>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#05893E] to-[#0bbf5c] shadow-md shadow-green-200">
              <Image
                src="/logo-icon.png"
                alt="বাজার দর লোগো"
                width={28}
                height={28}
                priority
              />
            </div>

            <div className="leading-tight">
              <h2 className="text-lg font-bold text-gray-800">বাজার দর</h2>
              <p className="min-h-4 text-xs text-gray-500">{date}</p>
            </div>
          </div>
        </Link>

        <UserInfo />
      </div>
    </header>
  );
};

export default Header;
