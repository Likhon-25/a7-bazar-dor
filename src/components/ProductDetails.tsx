import Link from "next/link";

interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface IProductDetailProps {
  product: {
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
  };
}

const ProductDetails = ({ product }: IProductDetailProps) => {
  const marketSummary = product.markets ?? [];
  const minPrice = marketSummary.length ? Math.min(...marketSummary.map((market) => market.min)) : 0;
  const maxPrice = marketSummary.length ? Math.max(...marketSummary.map((market) => market.max)) : 0;
  const avgPrice = marketSummary.length
    ? Math.round(
        marketSummary.reduce((sum, market) => sum + (market.min + market.max) / 2, 0) /
          marketSummary.length,
      )
    : 0;
  const dailyPriceChange = product.today - product.yesterday;
  const isUp = dailyPriceChange > 0;
  const isDown = dailyPriceChange < 0;
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("bn-BD").format(Math.abs(price));

  return (
    <div className="container mx-auto max-w-6xl rounded-[18px] bg-[#f5f6f4] p-5 shadow-sm">
      <nav
        aria-label="Breadcrumb"
        className="mb-4 flex flex-wrap items-center gap-2 px-1 text-sm text-gray-600"
      >
        <Link href="/" className="transition-colors hover:text-green-700 font-bold">
          হোম
        </Link>
        <span aria-hidden="true">&gt;</span>
        <Link
          href={`/category/${encodeURIComponent(product.category)}`}
          className="transition-colors hover:text-green-700 font-bold"
        >
          {product.categoryNameBn}
        </Link>
        <span aria-hidden="true">&gt;</span>
        <span aria-current="page" className="font-medium text-gray-800 font-bold">
          {product.nameBn}
        </span>
      </nav>

      <div className="mb-6 flex flex-col justify-between gap-5 rounded-2xl border border-[#dfe3dd] bg-[#f8f8f7] p-5 sm:flex-row sm:items-center sm:px-6 sm:py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#eff4ef] text-4xl">
            {product.image}
          </div>
          <div>
            <h1 className="text-2xl font-black text-gray-900 sm:text-3xl">{product.nameBn}</h1>
            <p className="mt-1 text-sm font-bold text-gray-500">
              প্রতি {product.unit} · {product.categoryNameBn}
            </p>
            <p className="mt-2 text-sm font-bold text-black">
              {isUp
                ? "গতকালের তুলনায় আজ দাম বেড়েছে"
                : isDown
                  ? "গতকালের তুলনায় আজ দাম কমেছে"
                  : "গতকালের তুলনায় আজ দাম অপরিবর্তিত"}
              {dailyPriceChange !== 0 && (
                <> · {formatPrice(dailyPriceChange)} টাকা</>
              )}
            </p>
          </div>
        </div>

        <div className="w-full rounded-2xl bg-[#eff4ef] px-5 py-4 text-center sm:w-auto sm:min-w-28">
          <p className="text-xs font-medium text-gray-500">
            আজকের দাম
          </p>
          <div className="mt-1 flex items-baseline justify-center gap-2">
            <span className="text-3xl font-extrabold leading-none text-gray-900">
              {new Intl.NumberFormat("bn-BD").format(product.today)}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500">টাকা / {product.unit}</p>
          <div
            className={`mt-1 text-sm font-semibold ${
              isUp ? "text-red-600" : isDown ? "text-green-600" : "text-gray-500"
            }`}
          >
            {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
            {new Intl.NumberFormat("bn-BD").format(Math.abs(product.change.pct))}%
          </div>
        </div>
      </div>

        <h2 className="text-2xl font-bold m-3">দামের সারসংক্ষেপ</h2>
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-[#dfe3dd] bg-white/70 p-4 shadow-sm">
          <p className="text-sm text-gray-600">সর্বনিম্ন দাম</p>
          <p className="mt-2 text-2xl font-bold text-green-700">
            {new Intl.NumberFormat("bn-BD").format(minPrice)}
          </p>
          <p className="text-xs text-gray-500">টাকা / {product.unit}</p>
        </div>


        <div className="rounded-xl border border-[#dfe3dd] bg-white/70 p-4 shadow-sm">
          <p className="text-sm text-gray-600">সর্বোচ্চ দাম</p>
          <p className="mt-2 text-2xl font-bold text-red-700">
            {new Intl.NumberFormat("bn-BD").format(maxPrice)}
          </p>
          <p className="text-xs text-gray-500">টাকা / {product.unit}</p>
        </div>

        <div className="rounded-xl border border-[#dfe3dd] bg-white/70 p-4 shadow-sm">
          <p className="text-sm text-gray-600">গড় দাম</p>
          <p className="mt-2 text-2xl font-bold text-green-700">
            {new Intl.NumberFormat("bn-BD").format(avgPrice)}
          </p>
          <p className="text-xs text-gray-500">টাকা / {product.unit}</p>
        </div>
      </div>

        <h2 className="border-b border-[#dfe3dd] px-4 py-3 text-xl font-bold text-gray-800">
          বাজারভিত্তিক আজকের দাম
        </h2>
      <div className="overflow-hidden rounded-2xl border border-[#dfe3dd] bg-[#f9faf8]">

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-[#f1f3f1] text-sm font-semibold text-gray-700">
              <tr>
                <th className="border-b border-[#dfe3dd] px-4 py-3">বাজার</th>
                <th className="border-b border-[#dfe3dd] px-4 py-3">বিভাগ</th>
                <th className="border-b border-[#dfe3dd] px-4 py-3">সর্বনিম্ন</th>
                <th className="border-b border-[#dfe3dd] px-4 py-3">সর্বোচ্চ</th>
                <th className="border-b border-[#dfe3dd] px-4 py-3">গড়</th>
              </tr>
            </thead>

            <tbody>
              {marketSummary.map((market) => {
                const avgMarketPrice = Math.round((market.min + market.max) / 2);

                return (
                  <tr key={`${market.market}-${market.division}`} className="border-b border-[#dfe3dd] last:border-b-0">
                    <td className="px-4 py-3 text-gray-800">{market.market}</td>
                    <td className="px-4 py-3 text-gray-700">{market.division}</td>
                    <td className="px-4 py-3 text-gray-800">
                      {new Intl.NumberFormat("bn-BD").format(market.min)}
                    </td>
                    <td className="px-4 py-3 text-gray-800 ">
                      {new Intl.NumberFormat("bn-BD").format(market.max)}
                    </td>
                    <td className="px-4 py-3 text-gray-800 font-bold">
                      {new Intl.NumberFormat("bn-BD").format(avgMarketPrice)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;