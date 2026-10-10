const ProductCardSkeleton = () => (
  <div
    aria-hidden="true"
    className="animate-pulse rounded-2xl border border-[#d2dbd2] bg-[#E1E8E1] p-5"
  >
    <div className="flex items-center gap-4">
      <div className="h-14 w-14 shrink-0 rounded-xl bg-white/80" />
      <div className="flex-1 space-y-2">
        <div className="h-5 w-2/3 rounded bg-[#cbd6cc]" />
        <div className="h-4 w-1/3 rounded bg-[#d5ded5]" />
      </div>
    </div>
    <div className="mt-5 flex items-end justify-between">
      <div className="space-y-2">
        <div className="h-4 w-20 rounded bg-[#cbd6cc]" />
        <div className="h-7 w-32 rounded bg-[#cbd6cc]" />
      </div>
      <div className="h-7 w-16 rounded-full bg-white/80" />
    </div>
  </div>
);

const ProductGridSkeleton = ({ count = 3 }: { count?: number }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: count }, (_, index) => (
      <ProductCardSkeleton key={index} />
    ))}
  </div>
);

const Loading = () => (
  <div
    role="status"
    aria-label="পণ্য লোড হচ্ছে"
    className="container mx-auto mt-10 px-4 pb-10"
  >
    <section className="mb-10">
      <div className="mb-5 flex items-center gap-2">
        <div aria-hidden="true" className="h-7 w-7 animate-pulse rounded-full bg-red-100" />
        <div aria-hidden="true" className="h-7 w-48 animate-pulse rounded bg-gray-200" />
      </div>
      <ProductGridSkeleton />
    </section>

    <section className="mb-10">
      <div className="mb-5 flex items-center gap-2">
        <div aria-hidden="true" className="h-7 w-7 animate-pulse rounded-full bg-green-100" />
        <div aria-hidden="true" className="h-7 w-48 animate-pulse rounded bg-gray-200" />
      </div>
      <ProductGridSkeleton />
    </section>

    <section>
      <div className="mb-5 flex items-center justify-between gap-4">
        <div aria-hidden="true" className="h-7 w-32 animate-pulse rounded bg-gray-200" />
        <div aria-hidden="true" className="h-10 w-48 animate-pulse rounded-xl border border-gray-200 bg-white" />
      </div>
      <ProductGridSkeleton count={6} />
    </section>
    <span className="sr-only">অনুগ্রহ করে অপেক্ষা করুন</span>
  </div>
);

export default Loading;
