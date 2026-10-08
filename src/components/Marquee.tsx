"use cache";

import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
interface IMarqueeProps {
  id: number;
  nameBn: string;
  today: number;
  categoryIcon: string;
}

const Marquee = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products')
    const data = await res.json()
    const marqueeData: IMarqueeProps[] = data.slice(0, 20);
    return (
        <div>
             <div className="border-b border-gray-200 bg-gray-50 py-3">
      <MarqueeText direction="right" duration={15}>
        {marqueeData.map((marquee: IMarqueeProps) => (
          <div key={marquee.id} className="mx-6 ">
            <div className="flex items-center gap-2 ">
              <span className="text-lg">{marquee.categoryIcon}</span>
              <span className="font-bold text-base text-[#1D271F]">
                {marquee.nameBn}
              </span>
              <span className="font-medium ">{marquee.today} টাকা/কেজি</span>
            </div>
          </div>
        ))}
      </MarqueeText>
    </div>
        </div>
    );
};

export default Marquee;