"use cache";

import Link from "next/link";

interface INavsProps {
  id: string;
  slug: string;
  icon: string;
  nameBn: string;
}

const Navbar =async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const data:INavsProps[] = await res.json()


    return (
         <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center gap-2 overflow-x-auto px-4 py-3">
        {data.map((navs: INavsProps) => (
          <Link
            key={navs.id}
            href={`/category/${navs.slug}`}
            className="flex  items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-green-800"
          >
            <span className="text-base">{navs.icon}</span>
            <span>{navs.nameBn}</span>
          </Link>
        ))}
      </div>
    </nav>
    );
};

export default Navbar;