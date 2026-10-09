"use client";

import Link from "next/link";
import AuthSocialButtons from "@/components/AuthSocialButtons";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const inputClass =
  "mt-2 h-10 w-full rounded-lg border border-[#dfe8e0] bg-transparent px-3 text-sm outline-none focus:border-[#05893e] focus:ring-2 focus:ring-[#05893e]/15";
const SignIn = () => {

  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };
    console.log(user);

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("sing in succesfully")
    }
    if (error) {
      toast.error('sign in faield please create an account')
    }
  };

const handleGoogleSignUp = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

const handleGithubSignUp = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
  });
};
    
  return (
    <div>
      <section className="relative left-1/2 -ml-[50vw] flex min-h-[742px] w-screen justify-center bg-[#f1f6f2] px-4 py-10 text-[#1d271f]">
        <div className="w-full max-w-[448px]">
          <header className="mb-7 text-center">
            <h2 className="text-2xl font-extrabold tracking-tight">সাইন ইন</h2>
            <p className="mt-1 text-xs leading-5 text-[#657168]">
              বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
            </p>
          </header>

          <form onSubmit={onSubmit}>
            <fieldset className="mx-4 rounded-[18px] border border-[#dfe8e0] bg-[#fbfdfb] p-6">
              <div className="space-y-4">
                <label className="block text-sm font-medium">
                  ইমেইল
                  <input
                    type="email"
                    name="email"
                    className={inputClass}
                    placeholder="ইমেইল"
                  />
                </label>
                <label className="block text-sm font-medium">
                  পাসওয়ার্ড
                  <input
                    type="password"
                    name="password"
                    className={inputClass}
                    placeholder="পাসওয়ার্ড দিন"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 h-11 w-full rounded-lg bg-[#05893e] text-sm font-semibold text-white shadow-[0_3px_0_#006b2e] hover:bg-[#047b37]"
              >
                সাইন ইন
              </button>

              <div className="my-5 flex items-center gap-4 text-xs text-[#7a847d]">
                <span className="h-px flex-1 bg-[#e1e8e2]" />
                অথবা
                <span className="h-px flex-1 bg-[#e1e8e2]" />
              </div>

              <div className="grid grid-cols-2 gap-2">
              {/* Google */}
              <button
              onClick={handleGoogleSignUp}
                type="button"
                className="flex h-10 items-center justify-center gap-2 rounded-lg border border-[#e1e8e2] bg-white px-2 text-xs font-medium whitespace-nowrap transition hover:bg-[#f7faf7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05893e]"
              >
                <svg
                  aria-label="Google"
                  role="img"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#4285f4"
                    d="M512 261.8c0-17.4-1.4-34.1-4.1-50.2H256v95h144.1c-6.2 31.5-24.1 58.2-50.9 76.1v62h82.3c48.1-44.3 80.5-109.7 80.5-182.9z"
                  />
                  <path
                    fill="#34a853"
                    d="M256 520c69.1 0 127.1-22.9 169.5-62.3l-82.3-62c-22.9 15.4-52.1 24.5-87.2 24.5-67 0-123.8-45.2-144.1-106.1H27v63.8C69.2 460.7 156.1 520 256 520z"
                  />
                  <path
                    fill="#fbbc05"
                    d="M111.9 314.1a159.4 159.4 0 0 1 0-102.2v-63.8H27a256 256 0 0 0 0 229.8l84.9-63.8z"
                  />
                  <path
                    fill="#ea4335"
                    d="M256 101.6c37.6 0 71.4 12.9 98 38.4l73.4-73.4C383 24.8 325 0 256 0 156.1 0 69.2 59.3 27 148.1l84.9 63.8C132.2 150.8 189 101.6 256 101.6z"
                  />
                </svg>
                Google দিয়ে চালিয়ে যান
              </button>
              {/* Github */}
              <button
              onClick={handleGithubSignUp}
                type="button"
                className="flex h-10 items-center justify-center gap-2 rounded-lg border border-[#e1e8e2] bg-white px-2 text-xs font-medium whitespace-nowrap transition hover:bg-[#f7faf7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05893e]"
              >
                <svg
                  aria-label="GitHub"
                  role="img"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#1d271f"
                    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.57 9.57 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.57c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
                  />
                </svg>
                GitHub দিয়ে চালিয়ে যান
              </button>
            </div>
            </fieldset>
          </form>

          <p className="mt-5 text-center text-sm text-[#7a847d]">
            <Link href="/" className="hover:text-[#05893e] hover:underline">
              ← হোম পেজে ফিরে যান
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
