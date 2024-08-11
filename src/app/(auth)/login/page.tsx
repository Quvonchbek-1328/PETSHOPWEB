import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import logo from "../../../../public/uzworks.svg";
import Link from "next/link";
import AuthButton from "@/components/ui/auth-button";
import FloatingLabelInput from "@/components/ui/floating-label";

const Login = () => {
  return (
    <div className="font-roboto w-[344px]">
      <div className="font-roboto flex items-center gap-x-[18px]">
        <h3 className="text-[34px] tracking-[0.25px]">Welcome to</h3>
        <Link href="/">
          <Image src={logo} alt="logo uzworks" />
        </Link>
      </div>
      <div className="mt-[72px]">
        <h4 className="text-xl font-medium mb-5 text-authblack tracking-[0.15px] ">Sign in</h4>
        <form action="#" className="flex flex-col gap-5">
          <FloatingLabelInput placeholder="Phone numbers" id="phone" />
          <FloatingLabelInput placeholder="Password" id="password" />
          <div className="flex justify-between">
            <AuthButton autoWidth variant="contained" size="medium">
              Login <BiRightArrowAlt className="text-2xl ms-2" />
            </AuthButton>
            <Link
              href={"/forgot-password"}
              className="self-end text-[14px] text-authbtn font-medium "
            >
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
      <Link href="/register" className="mt-10 block">
      <AuthButton variant="outlined" size="medium" fullWidth>Create new account</AuthButton>
      </Link>
    </div>
  );
};

export default Login;
