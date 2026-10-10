"use cache";

import SortedProductGrid, {
  type SortableProduct,
} from "@/components/SortedProductGrid";

const AllProduct =async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products')
    const allProduct: SortableProduct[] = await res.json()
    // console.log(allProduct);
    return (
      <SortedProductGrid
        products={allProduct}
        gridClassName="grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      />
    );
};

export default AllProduct;