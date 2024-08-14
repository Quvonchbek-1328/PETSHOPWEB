"use client";
import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import AuthButton from "@/components/ui/auth-button";
import { loginSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "@/store/axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phoneNumber: "+998",
      password: "",
    },
  });

  const { handleSubmit, control, formState } = loginForm;
  const { isSubmitting } = formState;

  async function handleLoginSubmit(values: z.infer<typeof loginSchema>) {
    try {
      const newValues = {
        ...values,
        phoneNumber: `${values.phoneNumber.slice(1)}`,
      };
      const { data } = await axios.post("/Auth/login", newValues);
      console.log(data);
      toast.success("Logged in successfully");
      localStorage.setItem("uzworks-auth-profile", JSON.stringify(data));
      setStep(1);
      router.push("/");
      loginForm.reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <>
      <div>
        <div className="flex items-center gap-x-[18px]">
          <h3 className="lg:text-[34px] text-[24px] text-nowrap tracking-[0.25px]">Welcome to <Link href="/" className="font-bold tracking-[3%]"><span className="text-darkblue">UZ</span>WORKS</Link></h3>
        </div>
        <div className="mt-[72px]">
          <h4 className="lg:text-2xl md:text-xl text-[18px] font-medium lg:mb-5 mb-3 text-authblack tracking-[0.15px]">
            Sign in
          </h4>
          <FormProvider {...loginForm}>
            <form
              onSubmit={handleSubmit(handleLoginSubmit)}
              className="flex flex-col gap-5"
            >
              <FormField
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Phone number"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={control}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <AuthButton
                  autoWidth
                  variant="contained"
                  size="medium"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Login <BiRightArrowAlt className="text-2xl ms-2" />
                </AuthButton>
                <Link
                  href={"/reset-password"}
                  className="self-end lg:text-[18px] text-md:[14px] text-sm font-medium text-authbtn"
                >
                  Forgot your password?
                </Link>
              </div>
            </form>
          </FormProvider>
        </div>
        <Link href="/register" className="mt-10 block">
          <AuthButton variant="outlined" size="medium" fullWidth>
            CREATE NEW ACCOUNT
          </AuthButton>
        </Link>
      </div>
    </>
  );
};

export default Login;
