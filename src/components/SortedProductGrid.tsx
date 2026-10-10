"use client";

import { useMemo, useState } from "react";
import CategoryCart from "@/components/CategoryCart";

export interface SortableProduct {
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

interface SortedProductGridProps {
  products: SortableProduct[];
  gridClassName?: string;
}

type SortOrder = "default" | "lowToHigh" | "highToLow";

const SortedProductGrid = ({
  products,
  gridClassName = "grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4",
}: SortedProductGridProps) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");

  const sortedProducts = useMemo(() => {
    if (sortOrder === "default") return products;

    return [...products].sort((a, b) =>
      sortOrder === "lowToHigh" ? a.today - b.today : b.today - a.today,
    );
  }, [products, sortOrder]);

  return (
    <>
      <div className="mb-6 flex justify-end">
        <label className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm">
          <span>সাজান:</span>
          <select
            aria-label="পণ্যের দাম অনুযায়ী সাজান"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value as SortOrder)}
            className="bg-transparent pr-1 outline-none"
          >
            <option value="default">ডিফল্ট</option>
            <option value="lowToHigh">দাম: কম থেকে বেশি</option>
            <option value="highToLow">দাম: বেশি থেকে কম</option>
          </select>
        </label>
      </div>

      {sortedProducts.length > 0 ? (
        <div className={`grid ${gridClassName}`}>
          {sortedProducts.map((product) => (
            <CategoryCart key={product.id} cp={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center text-gray-500">
          কোনো পণ্য পাওয়া যায়নি।
        </div>
      )}
    </>
  );
};

export default SortedProductGrid;
