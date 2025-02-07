import { useCallback } from "react";
import { getSession, signOut } from "next-auth/react";
import { useDebugBar } from "@/packages/lane-debugbar/providers/debugBarProvider";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

interface FetchClientProps {
  method?: string;
  url: string;
  body?: any;
  token?: string;
  easyFetch?: boolean;
}

export const useFetch = () => {
  const { addResponse } = useDebugBar();
  const queryClient = useQueryClient();

  const invalidate = (keys: string[][]) => {
    keys.forEach((element) => {
      queryClient.invalidateQueries({
        queryKey: element,
      });
    });
  };

  const fetchClient = useCallback(
    async <T>({
      method = "GET",
      url,
      body = "",
      token,
      easyFetch = false,
    }: FetchClientProps): Promise<{ data: T }> => {
      try {
        const session = await getSession();
        const accessToken = token || (session as any)?.accessToken;

        const { data } = await axios(url, {
          method,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            Authorization: "Bearer " + accessToken,
          },
          data: body || undefined,
        });

        if (easyFetch) return data;

        console.log(data, "the response data");

        if (data?.data?.debugbar) {
          addResponse(data.data.debugbar);
        }

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

        if (error?.response?.data?.debugbar) {
          addResponse(error?.response?.data?.debugbar);
        }

        throw error;
      }
    },
    []
  );

  return { fetchClient, invalidate };
};

export default useFetch;
