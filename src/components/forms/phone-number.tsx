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
import { forgotPasswordSchema } from "@/lib/validation";
import { z } from "zod";
import AuthButton from "@/components/ui/auth-button";
import { BiRightArrowAlt } from "react-icons/bi";

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

interface ForgotPasswordFormProps {
  onNext: () => void;
  setValues: (value: string) => void;
}

const ForgotPasswordForm = ({ onNext, setValues }: ForgotPasswordFormProps) => {
  const forgotForm = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { phoneNumber: "+998" },
  });

  const {
    handleSubmit: handleForgotSubmit,
    control: forgotControl,
    formState: forgotFormState,
  } = forgotForm;

  const { isSubmitting: isForgotSubmitting } = forgotFormState;

  async function onForgotSubmit(values: ForgotPasswordFormValues) {
    try {
      const newValues = {
        phoneNumber: `${values.phoneNumber.slice(1)}`,
      };
      await axios.post("/Auth/forget-password", newValues);
      toast.success("Password reset instructions sent successfully");
      onNext();
      setValues(newValues.phoneNumber);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  }

  return (
    <div>
      <FormProvider {...forgotForm}>
        <form
          onSubmit={handleForgotSubmit(onForgotSubmit)}
          className="flex flex-col gap-5"
        >
          <FormField
            name="phoneNumber"
            control={forgotControl}
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
          <div>
            <AuthButton
              autoWidth
              variant="contained"
              size="medium"
              type="submit"
              disabled={isForgotSubmitting}
            >
              Next <BiRightArrowAlt className="text-2xl ms-2" />
            </AuthButton>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ForgotPasswordForm;
