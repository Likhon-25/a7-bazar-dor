"use cache";

import CategoryCart from "@/components/CategoryCart";

interface IAllProductProps {
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

const AllProduct =async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const allProduct = await res.json()
    // console.log(allProduct);
    return (
        <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allProduct.map((filter: IAllProductProps) => (
          <CategoryCart key={filter.id} cp={filter} />
        ))}
      </div>
    </div>
    );
};

export default AllProduct;