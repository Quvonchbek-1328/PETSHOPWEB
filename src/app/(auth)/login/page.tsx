import { BiRightArrowAlt } from "react-icons/bi"; 
import Image from "next/image";
import logo from "../../../../public/uzworks.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <div className="font-roboto flex gap-x-[18px]">
        <h3 className="text-[34px] tracking-[0.25px]">Welcome to</h3>
        <Image src={logo} alt="" />{" "}
      </div>
      <div className="mt-[72px]">
        <h4 className="text-xl font-medium mb-5">Sign in</h4>
        <form action="#" className="flex flex-col gap-5">
          <Input type="text" placeholder="Telefon Numbers" />
          <Input type="password" placeholder="Password" />
          <div className="flex justify-between">
            <Button className="px-[22px] py-2 uppercase font-medium rounded-[4px] flex items-center gap-3 ">Login <BiRightArrowAlt className="text-2xl" /> </Button>
            <Link href={"/forgot-password"} className="self-end text-[14px] text-[#130160] font-medium ">Forgot your password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
