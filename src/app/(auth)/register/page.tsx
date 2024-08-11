"use client"
import { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/uzworks.svg";
import Link from "next/link";
import AuthButton from "@/components/ui/auth-button";
import FloatingLabelInput from "@/components/ui/floating-label";

const Register = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
    console.log(role);    
  };

  return (
    <div className="font-roboto w-[370px]">
      <div className="flex items-center gap-x-[18px]">
        <Link href="/">
          <Image src={logo} alt="logo uzworks" />
        </Link>
      </div>
      <div className="mt-[72px]">
        <h4 className="text-xl font-medium mb-5 text-authblack tracking-[0.15px]">Create new account</h4>
        <form action="#" className="flex flex-col gap-5">
          <FloatingLabelInput placeholder="Full name" id="name" />
          <FloatingLabelInput placeholder="Phone number" id="phone" />
          <FloatingLabelInput placeholder="Password" id="password" />
          <FloatingLabelInput placeholder="Confirm password" id="confirm-password" />
          <div className="flex justify-between gap-6 capitalize">
            <AuthButton
              type="button"
              fullWidth
              variant={selectedRole === "worker" ? "contained" : "outlined"}
              size="large"
              textTransform="capitalize"
              onClick={() => handleRoleSelection("worker")}
            >
              Ishchi
            </AuthButton>
            <AuthButton
              type="button"
              fullWidth
              variant={selectedRole === "employer" ? "contained" : "outlined"}
              size="large"
              textTransform="capitalize"
              onClick={() => handleRoleSelection("employer")}
            >
              Ish beruvchi
            </AuthButton>
          </div>
        </form>
      </div>
      <div className="mt-8 mb-5">
        <AuthButton variant="contained" size="medium" fullWidth>Create</AuthButton>
      </div>
      <Link href="/login">
        <AuthButton variant="outlined" size="medium" fullWidth>Back to Login</AuthButton>
      </Link>
    </div>
  );
};

export default Register;
