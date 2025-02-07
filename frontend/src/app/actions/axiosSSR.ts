"use server";

import { BACKEND_URL } from "@/constants";
import Axios from "axios";
import { cookies } from "next/headers";

const cookie = cookies();
const token = cookie.get("token").value;

export const ssrAxios = Axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
  withXSRFToken: true,
});
