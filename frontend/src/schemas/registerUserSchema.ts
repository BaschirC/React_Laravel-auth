import { z } from "zod";
import { createFieldConfigs } from "./schemaConfigs";

export const registerUserSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    password_confirmation: z.string().min(8),
}).superRefine((data, ctx) => {
    if (data.password !== data.password_confirmation) {
        ctx.addIssue({
            code: "custom",
            message: "Password confirmation does not match",
            path: ["password_confirmation"]
        });
    }
});

export const registerUserSchemaFieldConfigs = () =>
    createFieldConfigs(registerUserSchema, {
        name: {
            type: "text",
            placeholder: "Ceva fin",
            className: "w-full",
            inputClassName: "text-sm",
            rules: {
                required: {
                    value: true,
                    message: "This field is required",
                },
            },
        },
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
        password_confirmation: {
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