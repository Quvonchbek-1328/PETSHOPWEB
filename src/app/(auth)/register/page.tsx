"use client";
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
import { registerSchema } from "@/lib/validation";
import axios from "@/store/axios";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/uzworks.svg";
import AuthButton from "@/components/ui/auth-button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import SmsCode from "@/components/forms/sms-code";

export default function Register() {
  const [step, setStep] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedRole, setSelectedRole] = useState<"Employee" | "Employer" | null>(null);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "+998",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      const newValues = {
        ...values,
        phoneNumber: `${values.phoneNumber.slice(1)}`,
        role: selectedRole,
      };
      await axios.post("/Auth/signup", newValues);
      toast.success("Registered successfully");
      setStep(1)
      form.reset();
      setPhoneNumber(newValues.phoneNumber)
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  const { isSubmitting } = form.formState;

  return (
    <>
      {step === 0 ? (
        <div className="w-full mt-5">
          <div className="flex items-center gap-x-[18px]">
          <Link href="/" className="lg:text-[34px] text-[24px] text-nowrap font-bold tracking-[3%]"><span className="text-darkblue">UZ</span>WORKS</Link>
          </div>
          <h4 className="lg:text-2xl md:text-xl text-[18px] font-medium lg:mb-5 mb-3 mt-[52px] text-authblack tracking-[0.15px]">
            Create new account
          </h4>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex gap-4 flex-col"
              >
                <FormField
                  name="firstname"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="First name"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="lastname"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Last Name"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="phoneNumber"
                  control={form.control}
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
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email"
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
                  control={form.control}
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
                <FormField
                  name="confirmPassword"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm Password"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between gap-6 capitalize">
                  <AuthButton
                    type="button"
                    fullWidth
                    variant={
                      selectedRole === "Employee" ? "contained" : "outlined"
                    }
                    size="medium"
                    onClick={() => setSelectedRole("Employee")}
                  >
                    Ishchi
                  </AuthButton>
                  <AuthButton
                    type="button"
                    fullWidth
                    variant={
                      selectedRole === "Employer" ? "contained" : "outlined"
                    }
                    size="medium"
                    onClick={() => setSelectedRole("Employer")}
                  >
                    Ish beruvchi
                  </AuthButton>
                </div>
                <div className="mt-8">
                  <AuthButton
                    variant="contained"
                    size="medium"
                    fullWidth
                    type="submit"
                    disabled={isSubmitting}
                  >
                    CREATE
                  </AuthButton>
                </div>
                <div className="mb-5">
                  <AuthButton
                    variant="outlined"
                    size="medium"
                    fullWidth
                    type="button"
                  >
                    <Link href="/login" className="w-full">BACK TO LOGIN</Link>
                  </AuthButton>
                </div>
              </form>
            </Form>
          </div>
        </div>
      ) : (
        <SmsCode phoneNumber={phoneNumber} />
      )}
    </>
  );
}
