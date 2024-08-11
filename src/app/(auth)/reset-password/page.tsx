import Image from "next/image";
import logo from "../../../../public/uzworks.svg";
import Link from "next/link";
import AuthButton from "@/components/ui/auth-button";
import FloatingLabelInput from "@/components/ui/floating-label";

const Register = () => {
  return (
    <div className="font-roboto w-[464px]">
      <div className="flex items-center gap-x-[18px]">
        <Link href="/">
          <Image src={logo} alt="logo uzworks" />
        </Link>
      </div>
      <div className="mt-[72px]">
        <h4 className="text-xl font-medium text-authblack tracking-[0.15px] ">Reset your password</h4>
        <p className="text-[14px] text-authblack leading-[20.02px] tracking-[0.15px] mb-6 ">
          Type in your new password
        </p>
        <form action="#" className="flex flex-col gap-5">
          <FloatingLabelInput placeholder="Password *" id="password" />
          <FloatingLabelInput placeholder="Confirm password *" id="confirm-password" />
          <AuthButton type="button" fullWidth variant="contained" size="medium" textTransform="uppercase">
            save
          </AuthButton>
        </form>
      </div>
      <Link href="/login" className="block mt-[72px]">
        <AuthButton variant="outlined" size="medium" fullWidth>Back to Login</AuthButton>
      </Link>
    </div>
  )
}

export default Register
