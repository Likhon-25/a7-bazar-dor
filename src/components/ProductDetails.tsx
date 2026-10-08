import Link from "next/link";

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

interface ProductDetailsProps {
  product: IProduct;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("bn-BD", { maximumFractionDigits: 2 }).format(price);

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const markets = product.markets ?? [];
  const minPrice = markets.length
    ? Math.min(...markets.map((market) => market.min))
    : 0;
  const maxPrice = markets.length
    ? Math.max(...markets.map((market) => market.max))
    : 0;
  const avgPrice = markets.length
    ? markets.reduce((total, market) => total + (market.min + market.max) / 2, 0) /
      markets.length
    : 0;
  const priceChange = product.today - product.yesterday;
  const changeDirection =
    priceChange > 0 ? "up" : priceChange < 0 ? "down" : "unchanged";

  return (
    <main className="container mx-auto rounded-[18px] bg-[#f5f6f4] p-4 shadow-sm sm:p-5">
      <nav
        aria-label="Breadcrumb"
        className="mb-4 flex flex-wrap items-center gap-2 px-1 text-sm text-gray-600"
      >
        <Link
          href="/"
          prefetch={true}
          className="font-medium transition-colors hover:text-green-700"
        >
          হোম
        </Link>
        <span aria-hidden="true">&gt;</span>
        <Link
          href={`/category/${encodeURIComponent(product.category)}`}
          className="font-medium transition-colors hover:text-green-700"
        >
          {product.categoryNameBn}
        </Link>
        <span aria-hidden="true">&gt;</span>
        <span aria-current="page" className="font-bold text-gray-800">
          {product.nameBn}
        </span>
      </nav>

      <section className="mb-6 flex flex-col justify-between gap-5 rounded-2xl border border-[#dfe3dd] bg-[#fbfcfb] p-5 sm:flex-row sm:items-center sm:px-6 sm:py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#eff4ef] text-4xl">
            {product.image}
          </div>
          <div>
            <h1 className="text-2xl font-black text-gray-900 sm:text-3xl">
              {product.nameBn}
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              প্রতি {product.unit} · {product.categoryNameBn}
            </p>
            <p className="mt-2 text-sm text-gray-700">
              {changeDirection === "up"
                ? "গতকালের তুলনায় আজ দাম বেড়েছে"
                : changeDirection === "down"
                  ? "গতকালের তুলনায় আজ দাম কমেছে"
                  : "গতকালের তুলনায় আজ দাম অপরিবর্তিত"}
              {priceChange !== 0 && <> · {formatPrice(Math.abs(priceChange))} টাকা</>}
            </p>
          </div>
        </div>

        <div className="w-full rounded-2xl bg-[#eff4ef] px-5 py-4 text-center sm:w-auto sm:min-w-28">
          <p className="text-xs font-medium text-gray-500">আজকের দাম</p>
          <p className="mt-1 text-3xl font-extrabold leading-none text-gray-900">
            {formatPrice(product.today)}
          </p>
          <p className="mt-1 text-sm text-gray-500">টাকা / {product.unit}</p>
          <p
            className={`mt-1 text-sm font-semibold ${
              changeDirection === "up"
                ? "text-red-600"
                : changeDirection === "down"
                  ? "text-green-600"
                  : "text-gray-500"
            }`}
          >
            {changeDirection === "up"
              ? "▲"
              : changeDirection === "down"
                ? "▼"
                : "—"}{" "}
            {formatPrice(Math.abs(product.change.pct))}%
          </p>
        </div>
      </section>

      <section aria-labelledby="price-summary-heading" className="mb-6">
        <h2
          id="price-summary-heading"
          className="mb-3 px-1 text-lg font-bold text-[#26352b] sm:text-xl"
        >
          দামের সারসংক্ষেপ
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[#dfe3dd] bg-white/70 p-4 shadow-sm">
            <p className="text-sm text-gray-600">সর্বনিম্ন দাম</p>
            <p className="mt-2 text-2xl font-bold text-green-700">
              {formatPrice(minPrice)} টাকা
            </p>
            <p className="text-xs text-gray-500">সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className="rounded-xl border border-[#dfe3dd] bg-white/70 p-4 shadow-sm">
            <p className="text-sm text-gray-600">সর্বোচ্চ দাম</p>
            <p className="mt-2 text-2xl font-bold text-red-700">
              {formatPrice(maxPrice)} টাকা
            </p>
            <p className="text-xs text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
          </div>
          <div className="rounded-xl border border-[#dfe3dd] bg-white/70 p-4 shadow-sm">
            <p className="text-sm text-gray-600">গড় দাম</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              {formatPrice(avgPrice)} টাকা
            </p>
            <p className="text-xs text-gray-500">প্রতি {product.unit} হিসাবে</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="market-prices-heading">
        <h2
          id="market-prices-heading"
          className="mb-3 px-1 text-lg font-bold text-[#26352b] sm:text-xl"
        >
          বাজারভিত্তিক আজকের দাম
        </h2>
        <div className="overflow-hidden rounded-2xl border border-[#dfe6df] bg-[#fbfcfb]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-170 border-collapse text-sm">
              <thead>
                <tr className="bg-[#fbfcfb] text-gray-500">
                  <th scope="col" className="px-4 py-3 text-left font-semibold sm:px-5">
                    বাজার
                  </th>
                  <th scope="col" className="px-4 py-3 text-left font-semibold sm:px-5">
                    বিভাগ
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold sm:px-5">
                    সর্বনিম্ন
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold sm:px-5">
                    সর্বোচ্চ
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold sm:px-5">
                    গড়
                  </th>
                </tr>
              </thead>
              <tbody>
                {markets.length > 0 ? (
                  markets.map((market, index) => {
                    const marketAverage = (market.min + market.max) / 2;

                    return (
                      <tr
                        key={`${market.market}-${market.division}`}
                        className={`border-t border-[#8c968e] ${
                          index % 2 === 0 ? "bg-[#fbfcfb]" : "bg-[#f0f4f0]"
                        }`}
                      >
                        <td className="px-4 py-3 text-left text-gray-800 sm:px-5">
                          {market.market}
                        </td>
                        <td className="px-4 py-3 text-left text-gray-700 sm:px-5">
                          {market.division}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-800 sm:px-5">
                          {formatPrice(market.min)} টাকা
                        </td>
                        <td className="px-4 py-3 text-right text-gray-800 sm:px-5">
                          {formatPrice(market.max)} টাকা
                        </td>
                        <td className="px-4 py-3 text-right font-bold text-gray-900 sm:px-5">
                          {formatPrice(marketAverage)} টাকা
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="border-t border-[#dfe6df] px-4 py-8 text-center text-gray-500"
                    >
                      এই পণ্যের বাজারভিত্তিক দাম পাওয়া যায়নি।
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;