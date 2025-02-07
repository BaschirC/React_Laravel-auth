"use client";

import { loginSchema, loginSchemaFieldConfigs } from "@/schemas/loginSchema";
import { useMutation } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SharedForm from "./sharedForm/sharedForm";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const form = useForm<z.infer<typeof loginSchema>>();

  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      const credentials = form.getValues();
      const callbackUrl = searchParams.get("callbackUrl") || "/";

      return signIn("credentials", {
        ...credentials,
        callbackUrl,
      });
    },
    onSuccess: () => {
      signIn("credentials");
    },
    onError: (err) => {
      toast.error("Invalid credentials...");
      console.log(error, err, "the error");
    },
  });

  return (
    <>
      <Card className='w-full max-w-lg'>
        {!isPending && (
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
        )}
        <CardContent>
          {isPending ? (
            <div className='h-40 flex items-center justify-center'>
              <Loader2Icon size={58} className='animate-spin' />
            </div>
          ) : (
            <SharedForm
              form={form}
              schema={loginSchema}
              fieldConfigs={loginSchemaFieldConfigs()}
              onSubmit={() => mutate()}
              submitButtonText='Login'
              submitButtonClassName='mt-8'
            />
          )}
        </CardContent>
        {!isPending && (
          <CardFooter className='flex justify-end items-center gap-2'>
            <Link
              className='underline text-sm text-gray-600 hover:text-gray-900'
              href={"/register"}
            >
              You need an account?
            </Link>
          </CardFooter>
        )}
      </Card>
    </>
  );
}
