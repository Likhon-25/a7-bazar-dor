import React from "react";

const SignUp = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-extrabold">অ্যাকাউন্ট তৈরি করুন</h2>
      <p className="text-[#1D271F]">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>

      <div>
        <fieldset className="fieldset  border-base-300 rounded-box w-xs border p-4">

          <label className="label">Email</label>
          <input type="email" className="input bg-base-200" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input bg-base-200" placeholder="Password" />

          <button className="btn bg-green-700 mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  );
};

export default SignUp;
