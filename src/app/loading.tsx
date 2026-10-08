const ProductSkeleton = () => {
  return (
    <div className="h-[123px] rounded-xl bg-gray-200 p-4 animate-pulse">
      <div className="flex items-start gap-3">
        <div className="h-12 w-12 rounded-lg bg-gray-300" />

        <div>
          <div className="h-5 w-32 rounded bg-gray-300" />
          <div className="mt-2 h-3 w-16 rounded bg-gray-300" />
        </div>
      </div>

      <div className="mt-4">
        <div className="h-3 w-20 rounded bg-gray-300" />
        <div className="mt-2 h-5 w-24 rounded bg-gray-300" />
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <div className="h-10 border-y overflow-hidden flex items-center gap-10 px-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-4 w-36 shrink-0 rounded bg-gray-200 animate-pulse"
          />
        ))}
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">

        <section className="mb-8">
          <div className="h-7 w-40 rounded bg-gray-200 animate-pulse mb-5" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </section>

        <section>
          <div className="h-7 w-40 rounded bg-gray-200 animate-pulse mb-5" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Loading;