"use cache";

import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
interface IMarqueeProps {
  id: number;
  nameBn: string;
  image: string;
  unit: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data: IMarqueeProps[] = await res.json();
  const marqueeData = data.slice(0, 20);

  return (
    <div
      aria-label="আজকের বাজারদরের চলমান তালিকা"
      className="border-b border-[#d2dbd2] bg-[#f3f4f1] py-3"
    >
      <MarqueeText direction="right" duration={20}>
        {marqueeData.map((product) => {
          const isUp = product.change.dir === "up";
          const isDown = product.change.dir === "down";

          return (
            <div key={product.id} className="mx-6">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span aria-hidden="true" className="text-lg">
                  {product.image}
                </span>
                <span className="text-base font-bold text-[#1D271F]">
                  {product.nameBn}
                </span>
                <span className="font-medium text-gray-700">
                  {product.today.toLocaleString("bn-BD")} টাকা/{product.unit}
                </span>
                <span
                  className={`rounded-full bg-white/80 px-2 py-1 text-sm font-semibold ${
                    isUp
                      ? "text-green-700"
                      : isDown
                        ? "text-red-600"
                        : "text-gray-600"
                  }`}
                >
                  {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
                  {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                </span>
                <span aria-hidden="true" className="ml-4 text-[#9ca99d]">
                  •
                </span>
              </div>
            </div>
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default Marquee;