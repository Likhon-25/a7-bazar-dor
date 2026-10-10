"use cache";

import CategoryCart from "@/components/CategoryCart";

interface IPriceUpProps {
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

const PriceUp = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data = await res.json();
  const filterUpPrice = data.filter(
    (n: IPriceUpProps) => n.change.dir === "up",
  ).slice(0,6);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filterUpPrice.map((filter: IPriceUpProps) => (
          <CategoryCart key={filter.id} cp={filter} />
        ))}
      </div>
    </div>
  );
};

export default PriceUp;
