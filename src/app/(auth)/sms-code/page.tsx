import Image from "next/image";
import logo from "../../../../public/uzworks.svg";
import Link from "next/link";
import AuthButton from "@/components/ui/auth-button";
import FloatingLabelInput from "@/components/ui/floating-label";
import { BiRightArrowAlt } from "react-icons/bi";

const ForgotPassword = () => {
  return (
    <div className="font-roboto w-[344px]">
      <div className="flex items-center gap-x-[18px]">
        <Link href="/">
          <Image src={logo} alt="logo uzworks" />
        </Link>
      </div>
      <div className="mt-[72px]">
        <h4 className="text-xl font-medium text-[#000000DE] tracking-[0.15px] ">
          Sms Code
        </h4>
        <p className="text-[14px] leading-[20.02px] tracking-[0.15px] mb-6 ">
          Please check your sms code for next steps.
        </p>
        <form action="#" className="flex flex-col gap-5">
          <FloatingLabelInput placeholder="SMS code" id="sms" />
          <div>
            <AuthButton autoWidth variant="contained" size="medium">
              Next <BiRightArrowAlt className="text-2xl ms-2" />
            </AuthButton>
          </div>
        </form>
      </div>
      <Link href="/login" className="mt-[72px] block">
        <AuthButton variant="outlined" size="medium" fullWidth>
          Back
        </AuthButton>
      </Link>
    </div>
  );
};

export default ForgotPassword;
