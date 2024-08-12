"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../public/uzworks.svg";
import Link from "next/link";
import AuthButton from "@/components/ui/auth-button";
import FloatingLabelInput from "@/components/ui/floating-label";
import { postAuthRegister } from "@/store/api";
import {toast} from "sonner";


const Register = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  useEffect(() => {
    setInfo((prevState) => ({
      ...prevState,
      role: selectedRole,
    }));
  }, [selectedRole]);

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role.charAt(0).toUpperCase() + role.slice(1));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postAuthRegister(info)
      .then((response) => {
        toast.success("Registered successfully");
        console.log(response);
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.log(err);
      });
  };

  return (
    <div className="font-roboto w-[370px]">
      <div className="flex items-center gap-x-[18px]">
        <Link href="/">
          <Image src={logo} alt="logo uzworks" />
        </Link>
      </div>
      <div className="mt-[72px]">
        <h4 className="text-xl font-medium mb-5 text-authblack tracking-[0.15px]">
          Create new account
        </h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <FloatingLabelInput
            placeholder="Firstname"
            id="firstname"
            onChange={handleInputChange}
          />
          <FloatingLabelInput
            placeholder="Lastname"
            id="lastname"
            onChange={handleInputChange}
          />
          <FloatingLabelInput
            placeholder="Phone number"
            id="phoneNumber"
            onChange={handleInputChange}
          />
          <FloatingLabelInput
            placeholder="Password"
            id="password"
            type="password"
            onChange={handleInputChange}
          />
          <FloatingLabelInput
            placeholder="Confirm password"
            id="confirmPassword"
            type="password"
            onChange={handleInputChange}
          />
          <div className="flex justify-between gap-6 capitalize">
            <AuthButton
              type="button"
              fullWidth
              variant={selectedRole === "Employee" ? "contained" : "outlined"}
              size="large"
              textTransform="capitalize"
              onClick={() => handleRoleSelection("Employee")}
            >
              Ishchi
            </AuthButton>
            <AuthButton
              type="button"
              fullWidth
              variant={selectedRole === "Employer" ? "contained" : "outlined"}
              size="large"
              textTransform="capitalize"
              onClick={() => handleRoleSelection("Employer")}
            >
              Ish beruvchi
            </AuthButton>
          </div>
        </form>
      </div>
      <div className="mt-8 mb-5">
        <AuthButton
          variant="contained"
          size="medium"
          fullWidth
          onClick={handleSubmit}
        >
          Create
        </AuthButton>
      </div>
      <Link href="/login">
        <AuthButton variant="outlined" size="medium" fullWidth>
          Back to Login
        </AuthButton>
      </Link>
    </div>
  );
};

export default Register;
