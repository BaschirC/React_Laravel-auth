"use client";

import {
  registerUserSchema,
  registerUserSchemaFieldConfigs,
} from "@/schemas/registerUserSchema";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

export default function RegisterForm() {
  const [errors, setErrors] = useState<any>({});
  const form = useForm<z.infer<typeof registerUserSchema>>();
  const router = useRouter();

  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      const values = form.getValues();
      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/api/register",
        values
      );

      return data;
    },
    onSuccess: (data) => {
      if (data && data.status === "user-created") {
        router.push("/login");
      }

      toast.success("User created successfully!");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);

      setErrors(error.response.data.errors);

      console.log(
        error,
        "the rrkljanskjadj sadkjlabsdfkga vsjfdhsakjhfabsljfasbkljb"
      );
    },
  });

  return (
    <Card className='w-full max-w-lg'>
      <CardHeader>{!isPending && <CardTitle>Login</CardTitle>}</CardHeader>
      <CardContent>
        {isPending ? (
          <div className='flex items-center justify-center h-40'>
            <Loader2Icon size={58} className='animate-spin' />
          </div>
        ) : (
          <SharedForm
            onSubmit={() => mutate()}
            form={form}
            schema={registerUserSchema}
            fieldConfigs={registerUserSchemaFieldConfigs()}
            submitButtonClassName='mt-8'
          />
        )}
      </CardContent>
      <div className='px-6'>
        {Object.values(errors).map((err: string[], index) => (
          <p className='p-2 text-red-500' key={index}>
            {err[0]}
          </p>
        ))}
      </div>
      {!isPending && (
        <CardFooter className='flex justify-end items-center gap-2'>
          <Link
            className='underline text-sm text-gray-600 hover:text-gray-900'
            href={"/login"}
          >
            You already have an account?
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
