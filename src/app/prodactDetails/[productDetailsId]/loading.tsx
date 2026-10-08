const ProductDetailsLoading = () => {
  return (
    <div className="min-h-screen animate-pulse bg-[#f3f4f2] px-4 py-8">
      <main className="container mx-auto max-w-6xl space-y-5 rounded-[18px] bg-[#f5f6f4] p-4 sm:p-5">
        <div className="h-5 w-56 rounded bg-gray-200" />

        <section className="flex flex-col justify-between gap-5 rounded-2xl border border-[#dfe3dd] bg-[#fbfcfb] p-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl bg-gray-200" />
            <div className="space-y-2">
              <div className="h-7 w-48 rounded bg-gray-200" />
              <div className="h-4 w-32 rounded bg-gray-200" />
              <div className="h-4 w-56 rounded bg-gray-200" />
            </div>
          </div>
          <div className="h-28 w-full rounded-2xl bg-gray-200 sm:w-32" />
        </section>

        <section>
          <div className="mb-3 h-6 w-40 rounded bg-gray-200" />
          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="h-28 rounded-xl bg-gray-200" />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-3 h-6 w-52 rounded bg-gray-200" />
          <div className="h-80 rounded-2xl bg-gray-200" />
        </section>
      </main>
    </div>
  );
};

export default ProductDetailsLoading;
