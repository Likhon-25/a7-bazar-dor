"use cache";

import CategoryCart from "@/components/CategoryCart";

interface IPriceDownProps {
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
const PriceDown =async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
    const data: IPriceDownProps[] = await res.json()
    const filterDownPrice = data.filter((d) => d.change.dir === "down").slice(0,6)

    return (
        <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filterDownPrice.map((filter: IPriceDownProps) => (
          <CategoryCart key={filter.id} cp={filter} />
        ))}
      </div>
    </div>
    );
};

export default PriceDown;