"use client";

import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    if (typeof name !== "string") return;

    const { data, error } = await authClient.updateUser({ name });
    if (data) {
      console.log(data);
      toast.success("প্রোফাইল আপডেট হয়েছে");
    }
    if (error) {
      console.error(error);
      toast.error("প্রোফাইল আপডেট করা যায়নি");
    }
  };

  const handleLogout = async () => {
    await authClient.signOut();
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl">
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">আমার প্রোফাইল</h2>
          <p className="text-gray-500 text-sm">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        </div>

        {/* Form Container */}
        <form className="space-y-6" onSubmit={handleUpdateProfile}>
          
          {/* User Info Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={user?.image || ""} alt={user?.name || "Profile"} />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
                <p className="text-gray-500 text-sm">{user.email}</p>
              </div>
            </div>
            
            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium"
            >
              <span>↩</span> সাইন আউট
            </button>
          </div>

          {/* Edit Info Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">তথ্য</h3>
            
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                নাম
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={user.name}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all text-gray-700"
                placeholder="আপনার নাম লিখুন"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#15803d] hover:bg-[#166534] text-white font-medium py-3 rounded-lg transition-colors"
            >
              আপডেট
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ProfilePage;