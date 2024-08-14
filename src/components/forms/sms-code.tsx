"use client";
import Link from "next/link";
import AuthButton from "@/components/ui/auth-button";
import { BiRightArrowAlt } from "react-icons/bi";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import axios from "@/store/axios";
import { smsSchema } from "@/lib/validation";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

type SmsFormValues = z.infer<typeof smsSchema>;

const SmsCode = ({phoneNumber}: {phoneNumber: string}) => {  
  const router = useRouter();
  const smsForm = useForm<SmsFormValues>({
    resolver: zodResolver(smsSchema),
    defaultValues: {
      code: "",
      phoneNumber: phoneNumber,
    },
  });

  const { handleSubmit, control, formState } = smsForm;
  const { isSubmitting } = formState;

  async function handleSmsSubmit(values: SmsFormValues) {
    try {
      await axios.post("/Auth/verify-phone", values);
      toast.success("SMS code verified successfully");
      smsForm.reset();
      router.push("/login");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div>
      <div className="flex items-center gap-x-[18px]">
      <Link href="/" className="lg:text-[34px] text-[24px] text-nowrap font-bold tracking-[3%]"><span className="text-darkblue">UZ</span>WORKS</Link>
      </div>
      <div className="mt-[72px]">
        <h4 className="lg:text-xl md:text-[17px] text-[16px] font-medium text-[#000000DE] tracking-[0.15px]">
          SMS Code
        </h4>
        <p className="text-[14px] leading-[20.02px] tracking-[0.15px] mb-6">
          Please check your SMS code for the next steps.
        </p>
        <FormProvider {...smsForm}>
          <form
            onSubmit={handleSubmit(handleSmsSubmit)}
            className="flex flex-col gap-5"
          >
            <FormField
              name="code"
              control={control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>SMS Code</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter SMS code"
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
                NEXT <BiRightArrowAlt className="text-2xl ms-2" />
              </AuthButton>
            </div>
          </form>
        </FormProvider>
      </div>
      {/* <Link href="/register" className="mt-[72px] block">
        <AuthButton variant="outlined" size="medium" fullWidth>
          Back
        </AuthButton>
      </Link> */}
    </div>
  );
};

export default SmsCode;
