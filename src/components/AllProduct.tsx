"use cache";

interface IAllProductProps {
  id: number;
  image: string;
  nameBn: string;
  unit: number;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

const AllProduct =async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products')
    const allProduct = await res.json()
    // console.log(allProduct);
    return (
        <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allProduct.map((filter: IAllProductProps) => (
          <div
            key={filter.id}
            className="rounded-2xl border border-[#d2dbd2] bg-[#E1E8E1] p-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/60 text-3xl">
                {filter.image}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {filter.nameBn}
                </h3>
                <p className="text-sm text-gray-500">প্রতি {filter.unit}</p>
              </div>
            </div>

            <div className="mt-5 flex items-end justify-between">
              <div>
                <p className="text-sm text-gray-700">আজকের দাম</p>
                <h2 className="text-2xl font-bold text-gray-900">
                  {filter.today.toLocaleString("bn-BD")}{" "}
                  <span className="text-base font-normal">টাকা</span>
                </h2>
              </div>

              <span className="flex items-center gap-1 rounded-full bg-white/60 px-3 py-1 text-sm font-medium text-green-600">
                ▲ {filter.change.pct}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default AllProduct;