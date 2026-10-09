import { FaGithub, FaGoogle } from "react-icons/fa";

const buttonClass =
  "flex h-10 items-center justify-center gap-2 rounded-lg border border-[#e1e8e2] bg-white px-2 text-xs font-medium whitespace-nowrap hover:bg-[#f7faf7]";

const AuthSocialButtons = () => (
  <div className="grid grid-cols-2 gap-2">
    <button type="button" className={buttonClass}>
      <FaGoogle className="text-[#4285f4]" aria-hidden="true" />
      Google দিয়ে চালিয়ে যান
    </button>
    <button type="button" className={buttonClass}>
      <FaGithub aria-hidden="true" />
      GitHub দিয়ে চালিয়ে যান
    </button>
  </div>
);

export default AuthSocialButtons;
