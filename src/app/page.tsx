import AllProduct from "@/components/AllProduct";
import PriceDown from "@/components/PriceDown";
import PriceUp from "@/components/PriceUp";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function Home() {
  return (
    <div className="">
      {/* <HeroBanner /> */}

      <div className="">
        <div className="container mx-auto mt-10 ">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-red-600 text-xl"><IoMdArrowDropup />
</span>
            <h2 className="text-2xl font-bold">আজ দাম বেড়েছে</h2>
          </div>
          <PriceUp />
        </div>
        <div className="container mx-auto mt-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-green-600 text-2xl"><IoMdArrowDropdown /></span>
            <h2 className="text-2xl font-bold">আজ দাম কমেছে</h2>
          </div>
          <PriceDown />
        </div>
        <div className="container mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-5">সব পণ্য</h2>
          <AllProduct />
        </div>
      </div>
    </div>
  );
}
