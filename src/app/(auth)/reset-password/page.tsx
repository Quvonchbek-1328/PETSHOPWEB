"use client";
import { useState } from "react";
import Link from "next/link";
import AuthButton from "@/components/ui/auth-button";
import PhoneNumber from "@/components/forms/phone-number";
import NewPassword from "@/components/forms/new-password";

const ForgotPasswordStepper = () => {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState("")

  return (
    <div>
      <div className="flex items-center gap-x-[18px]">
      <Link href="/" className="lg:text-[34px] text-[24px] text-nowrap font-bold tracking-[3%]"><span className="text-darkblue">UZ</span>WORKS</Link>
      </div>
      <div className="mt-[72px]">
        <h4 className="lg:text-xl md:text-[19px] text-[18px]  font-medium text-authblack tracking-[0.15px]">
          {step === 0 ? "Reset your password" : "Enter your new password"}
        </h4>
        <p className="lg:text-[16px] md:text-[16px] text-[14px] text-authblack leading-[20.02px] tracking-[0.15px] mb-6">
          {step === 0
            ? "Type in your registered phone number to reset your password"
            : "Type in the new password you want to set"}
        </p>

        {step === 0 ? (
          <PhoneNumber setValues={setValues} onNext={() => setStep(1)} />
        ) : (
          <NewPassword values={values} />
        )}

        <Link href="/login" className="mt-[72px] block">
          <AuthButton variant="outlined" size="medium" fullWidth>
          BACK TO LOGIN
          </AuthButton>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordStepper;
