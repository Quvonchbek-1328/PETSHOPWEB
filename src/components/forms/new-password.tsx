"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axios from "@/store/axios";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { resetPasswordSchema } from "@/lib/validation";
import { z } from "zod";
import AuthButton from "@/components/ui/auth-button";
import { BiRightArrowAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

interface ResetPasswordFormProps {
  values: string;
}

const ResetPasswordForm = ({ values }: ResetPasswordFormProps) => {
  const router = useRouter();
  const resetForm = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      code: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onResetSubmit(formValues: ResetPasswordFormValues) {
    console.log("Form Values:", formValues);

    try {
      const newValues = {
        code: formValues.code,
        newPassword: formValues.newPassword,
        phoneNumber: values,
      };
      console.log(newValues);

      await axios.post("/Auth/reset-password", newValues);
      toast.success("Password reset successfully");
      router.push('/login')
      resetForm.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  }

  const { isSubmitting } = resetForm.formState;

  return (
    <FormProvider {...resetForm}>
      <form
        onSubmit={resetForm.handleSubmit(onResetSubmit)}
        className="flex flex-col gap-5"
      >
        <FormField
          name="code"
          control={resetForm.control}
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
        <FormField
          name="newPassword"
          control={resetForm.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter new password"
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
          control={resetForm.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm new password"
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
            Next
            <BiRightArrowAlt className="text-2xl ms-2" />
          </AuthButton>
        </div>
      </form>
    </FormProvider>
  );
};

export default ResetPasswordForm;
