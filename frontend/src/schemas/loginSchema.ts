import { z } from "zod";
import { createFieldConfigs } from "./schemaConfigs";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const loginSchemaFieldConfigs = () =>
  createFieldConfigs(loginSchema, {
    email: {
      type: "text",
      placeholder: "Email",
      className: "w-full",
      inputClassName: "text-sm",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    password: {
      type: "text",
      textType: "password",
      placeholder: "Password",
      className: "w-full",
      inputClassName: "text-sm",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
  });
