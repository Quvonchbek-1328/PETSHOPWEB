import * as z from "zod";

export const contactSchema = z.object({
  title: z.string(),
  phoneNumber: z.string().min(10),
  message: z.string()
});