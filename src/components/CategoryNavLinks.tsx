"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface CategoryNavItem {
  id: string;
  slug: string;
  icon: string;
  nameBn: string;
}

interface CategoryNavLinksProps {
  categories: CategoryNavItem[];
}

const CategoryNavLinks = ({ categories }: CategoryNavLinksProps) => {
  const pathname = usePathname();

  return (
    <>
      {categories.map((category) => {
        const isActive = pathname === `/category/${category.slug}`;

        return (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-[#05893e] text-white shadow-sm"
                : "text-gray-700 hover:bg-green-50 hover:text-green-800"
            }`}
          >
            <span className="text-base">{category.icon}</span>
            <span>{category.nameBn}</span>
          </Link>
        );
      })}
    </>
  );
};

export default CategoryNavLinks;
