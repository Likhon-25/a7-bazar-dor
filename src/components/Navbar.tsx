"use cache";

import { Suspense } from "react";
import CategoryNavLinks, {
  type CategoryNavItem,
} from "@/components/CategoryNavLinks";

const Navbar = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories");
  const categories: CategoryNavItem[] = await res.json();

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center gap-2 overflow-x-auto px-4 py-3">
        <Suspense
          fallback={
            <div aria-hidden="true" className="h-10 w-full animate-pulse rounded-full bg-gray-100" />
          }
        >
          <CategoryNavLinks categories={categories} />
        </Suspense>
      </div>
    </nav>
  );
};

export default Navbar;