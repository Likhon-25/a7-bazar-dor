"use client";

import { useMemo, useState } from "react";
import CategoryCart from "@/components/CategoryCart";

interface ICategoryItem {
  id: number;
  image: string;
  nameBn: string;
  unit: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
  categoryIcon?: string;
  categoryNameBn?: string;
}

interface CategoryProductsListProps {
  products: ICategoryItem[];
  categoryIcon: string;
  categoryName: string;
}

const CategoryProductsList = ({
  products,
  categoryIcon,
  categoryName,
}: CategoryProductsListProps) => {
  const [sortOrder, setSortOrder] = useState<"lowToHigh" | "highToLow">("lowToHigh");

  const sortedProducts = useMemo(() => {
    const list = [...products];
    return list.sort((a, b) =>
      sortOrder === "lowToHigh" ? a.today - b.today : b.today - a.today,
    );
  }, [products, sortOrder]);

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="mb-6 rounded-2xl border-2 border-[#2aa564] bg-[#f3f4f1] p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
            {categoryIcon}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
            <p className="text-sm text-gray-600">
              {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 flex justify-end">
        <label className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm">
          <span>সাজান</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "lowToHigh" | "highToLow")}
            className="bg-transparent pr-1 outline-none"
          >
            <option value="lowToHigh">কম থেকে বেশি</option>
            <option value="highToLow">বেশি থেকে কম</option>
          </select>
        </label>
      </div>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sortedProducts.map((cp) => (
            <CategoryCart key={cp.id} cp={cp} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center text-gray-500">
          কোনো পণ্য পাওয়া যায়নি।
        </div>
      )}
    </div>
  );
};

export default CategoryProductsList;
