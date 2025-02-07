import axios from "axios";
import { getSession, signOut } from "next-auth/react";

interface fetchClientProps {
  method?: string;
  url: string;
  body?: any;
  token?: string;
  easyFetch?: boolean;
}

async function fetchClient({
  method = "GET",
  url,
  body = "",
  token,
  easyFetch = false,
}: fetchClientProps) {
  try {
    const session = await getSession();
    const accessToken = token || (session as any)?.accessToken;

    const { data } = await axios(url, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer" + accessToken,
      },
      data: body || undefined,
    });

    if (easyFetch) return data;

    if (!data.data.status) {
      throw data;
    }

    return data;
  } catch (error) {
    if (error instanceof Response) {
      if (error.status === 401) {
        signOut();
      }
    }

    return error;
  }
}

export default fetchClient;
