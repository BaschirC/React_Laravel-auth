import "server-only";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import axios from "axios";

interface fetchServerProps {
  method?: string;
  url: string;
  body?: any;
  easyFetch?: boolean;
}

async function fetchServer({
  method = "GET",
  url,
  body = "",
  easyFetch = false,
}: fetchServerProps) {
  try {
    const session = await getServerSession(authOptions);

    const { data } = await axios({
      method,
      url: url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + (session as any)?.accessToken,
      },
      data: body || undefined,
    });

    if (easyFetch) return data;

    if (!data.data.status) {
      throw new Error(data.extras || "Unknown error occurred");
    }

    return data;
  } catch (error) {
    // Handle specific cases for Response-based errors
    if (error instanceof Response) {
      if (error.status === 401) {
        return redirect("/login");
      }

      if (error.status === 409) {
        return redirect("/request-email-verification");
      }
    }

    // Re-throw the original error for proper propagation
    throw error;
  }
}

export default fetchServer;
