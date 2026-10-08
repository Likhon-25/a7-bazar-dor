import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="text-center">

        <div className="text-7xl mb-4">
          🛒
        </div>

        <h1 className="text-8xl font-extrabold text-green-600">
          404
        </h1>

        <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-800">
          পেজটি পাওয়া যায়নি!
        </h2>

        <p className="mt-3 text-gray-600 max-w-md mx-auto">
          মনে হচ্ছে আপনি যে পেজটি খুঁজছেন সেটি আমাদের বাজারে নেই।
          চলুন আবার বাজারের মূল পেজে ফিরে যাই।
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-7 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 shadow-md"
        >
          🏠 বাজারে ফিরে যান
        </Link>

      </div>
    </div>
  );
};

export default NotFound;