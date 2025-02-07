"use server";

import { headers } from "next/headers";
import { ssrAxios } from "./axiosSSR";
import { redirect } from "next/navigation";

export const getUser = async () => {
  const heads = headers();
  const pathname = heads.get("x-pathname");

  try {
    const { data } = await ssrAxios.get("/api/v1/user");
    return data;
  } catch (err) {
    console.log(err, "the err");
    if (
      (err.status === 401 && pathname !== "/login") ||
      pathname !== "/register"
    ) {
      redirect("/login");
    }
  }
};
