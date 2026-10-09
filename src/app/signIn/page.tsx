import Link from "next/link";
import AuthSocialButtons from "@/components/AuthSocialButtons";

const inputClass =
  "mt-2 h-10 w-full rounded-lg border border-[#dfe8e0] bg-transparent px-3 text-sm outline-none focus:border-[#05893e] focus:ring-2 focus:ring-[#05893e]/15";

const SignIn = () => {
   
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

    <form>
      <fieldset className="mx-4 rounded-[18px] border border-[#dfe8e0] bg-[#fbfdfb] p-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium">
            ইমেইল
            <input type="email" className={inputClass} placeholder="ইমেইল" />
          </label>
          <label className="block text-sm font-medium">
            পাসওয়ার্ড
            <input
              type="password"
              className={inputClass}
              placeholder="পাসওয়ার্ড দিন"
            />
          </label>
        </div>

        <button type="submit" className="mt-4 h-11 w-full rounded-lg bg-[#05893e] text-sm font-semibold text-white shadow-[0_3px_0_#006b2e] hover:bg-[#047b37]">
          সাইন ইন 
        </button>

        <div className="my-5 flex items-center gap-4 text-xs text-[#7a847d]">
          <span className="h-px flex-1 bg-[#e1e8e2]" />
          অথবা
          <span className="h-px flex-1 bg-[#e1e8e2]" />
        </div>

        <AuthSocialButtons />

        
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


// import Link from "next/link";
// import AuthSocialButtons from "@/components/AuthSocialButtons";

// const inputClass =
//   "mt-2 h-10 w-full rounded-lg border border-[#dfe8e0] bg-transparent px-3 text-sm outline-none focus:border-[#05893e] focus:ring-2 focus:ring-[#05893e]/15";

// const SignIn = () => (

  
// );

// export default SignIn;
