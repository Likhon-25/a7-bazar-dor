import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="shrink-0">
      {user ? (
        
        <details className="group relative">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#dfe8e0] bg-white py-1.5 pl-1.5 pr-3 text-sm font-semibold text-[#1d271f] shadow-sm transition hover:border-[#b7d8c2] hover:bg-[#f8fbf8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05893e] [&::-webkit-details-marker]:hidden">
            <Link href={"/profile"}>
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#e8f4eb] text-sm font-bold text-[#047f39] ring-2 ring-[#d9eddf]">
              {user.image}
            </div>
            </Link>
            <span className="hidden max-w-28 truncate sm:block">{user.name}</span>
            <span aria-hidden="true" className="text-xs text-[#657168]">
              ▼
            </span>
          </summary>

          <div className="absolute right-0 top-full z-50 mt-2 hidden min-w-48 rounded-xl border border-[#e1e8e2] bg-white p-2 text-sm shadow-lg group-open:block">
            <div className="truncate border-b border-[#edf1ed] px-3 py-2 font-semibold text-[#1d271f]">
              {user.email}
            </div>
            <button
              onClick={handleSignOut}
              className="mt-1 w-full rounded-lg px-3 py-2 text-left font-medium text-red-600 transition hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              লগ আউট
            </button>
          </div>
        </details>
        
      ) : (
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/signIn"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-[#1d271f] transition hover:bg-[#f1f6f2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05893e]"
          >
            সাইন ইন
          </Link>
          <Link
            href="/signUp"
            className="rounded-lg bg-[#047f39] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#036b30] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05893e]"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
