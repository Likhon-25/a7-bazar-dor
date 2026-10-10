"use client";

import SortedProductGrid, {
  type SortableProduct,
} from "@/components/SortedProductGrid";

interface ICategoryItem extends SortableProduct {
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

      <SortedProductGrid products={products} />
    </div>
  );
};

export default CategoryProductsList;
