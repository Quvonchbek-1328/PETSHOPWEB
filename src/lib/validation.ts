import * as z from "zod";

export const contactSchema = z.object({
  title: z.string(),
  phoneNumber: z.string().min(10),
  message: z.string()
});

// export const registerSchema = z.object({
//   firstname: z.string().min(3),
//   lastname: z.string().min(3),
//   phoneNumber: z.string().min(10),
//   password: z.string().min(6),
//   confirmPassword: z.string().min(6),
//   role: z.string()
// })