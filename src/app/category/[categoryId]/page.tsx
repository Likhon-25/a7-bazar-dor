import CategoryProductsList from "@/components/CategoryProductsList";

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

const CategoryId = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
  const { categoryId } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`);
  const categoryProductData = await res.json();
  const categoryProduct: ICategoryItem[] = Array.isArray(categoryProductData) ? categoryProductData : [];

  const categoryIcon = categoryProduct[0]?.categoryIcon ?? "📦";
  const categoryName = categoryProduct[0]?.categoryNameBn ?? "পণ্য";

  return (
    <CategoryProductsList
      products={categoryProduct}
      categoryIcon={categoryIcon}
      categoryName={categoryName}
    />
  );
};

export default CategoryId;