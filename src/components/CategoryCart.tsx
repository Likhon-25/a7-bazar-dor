import Link from "next/link";

interface ICategoryID {
  id: number;
  image: string;
  nameBn: string;
  unit: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

interface CategoryCartProps {
  cp: ICategoryID;
}

const CategoryCart = ({ cp }: CategoryCartProps) => {
  const isUp = cp.change.dir === "up";

  return (
    <Link
      href={`/prodactDetails/${cp.id}`}
      className="block rounded-2xl border border-[#d2dbd2] bg-[#E1E8E1] p-5 transition hover:shadow-md"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/60 text-3xl">
          {cp.image}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{cp.nameBn}</h3>
          <p className="text-sm text-gray-500">প্রতি {cp.unit}</p>
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <p className="text-sm text-gray-700">আজকের দাম</p>
          <h2 className="text-2xl font-bold text-gray-900">
            {cp.today.toLocaleString("bn-BD")} <span className="text-base font-normal">টাকা</span>
          </h2>
        </div>

        <span
          className={`flex items-center gap-1 rounded-full bg-white/60 px-3 py-1 text-sm font-medium ${
            isUp ? "text-green-600" : "text-red-600"
          }`}
        >
          {isUp ? "▲" : "▼"} {Math.abs(cp.change.pct)}%
        </span>
      </div>
    </Link>
  );
};

export default CategoryCart;