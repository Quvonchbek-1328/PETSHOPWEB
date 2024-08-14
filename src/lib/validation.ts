import * as z from "zod";

export const contactSchema = z.object({
  title: z.string(),
  phoneNumber: z.string().min(10),
  message: z.string()
});

export const registerSchema = z.object({
  firstname: z.string()
    .min(3, { message: "Firstname must be at least 3 characters long." }),
  lastname: z.string()
    .min(3, { message: "Lastname must be at least 3 characters long." }),
  email: z.string()
    .email({ message: "Invalid email address." }),
  phoneNumber: z.string()
    .min(11, { message: "Phone number must be at least 11 characters long." }),
  password: z.string()
    .min(6, { message: "Password must be at least 6 characters long." }),
  confirmPassword: z.string()
    .min(6, { message: "Confirm Password must be at least 6 characters long." }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords must match.",
  path: ["confirmPassword"],
});


export const loginSchema = z.object({
  phoneNumber: z.string()
  .min(11, { message: "Phone number must be at least 11 characters long." }),
  password: z.string()
    .min(6, { message: "Password must be at least 6 characters long." }),
});

export const smsSchema = z.object({
  code: z.string().min(4, { message: "Code must be at least 4 characters long." }),
  phoneNumber: z.string()
  .min(11, { message: "Phone number must be at least 11 characters long." }),
})

export const  resetPasswordSchema = z.object({
  code: z.string().min(4, { message: "Code must be at least 4 characters long." }),
  newPassword: z.string()
    .min(6, { message: "Password must be at least 6 characters long." }),
  confirmPassword: z.string()
    .min(6, { message: "Confirm Password must be at least 6 characters long." }),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords must match.",
  path: ["confirmPassword"],
})


export const forgotPasswordSchema = z.object({
  phoneNumber: z.string()
    .min(11, { message: "Phone number must be at least 11 characters long." }),
})

