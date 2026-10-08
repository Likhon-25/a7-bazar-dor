import ProductDetails from "@/components/ProductDetails";

interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: string;
    pct: number;
  };
  markets: IMarket[];
}

const ProductDetailsPage = async ({ params }: { params: Promise<{ productDetailsId: string }> }) => {
  const { productDetailsId } = await params;

  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const products: IProduct[] = await res.json();

  const product =
    products.find(
      (item) =>
        String(item.id) === productDetailsId ||
        item.slug === productDetailsId,
    ) ?? products[0];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-10 text-center text-gray-600">
        পণ্য পাওয়া যায়নি।
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f4f2] px-4 py-8">
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;