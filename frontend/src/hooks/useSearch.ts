import { useQueryClient } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import { useRouter, useSearchParams } from "next/navigation";
import { createQuery } from "queryfi";
import { useCallback, useEffect, useState } from "react";

export const useSearch = ({ queryKey }: { queryKey: string[] }) => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const paginate = searchParams.get("paginate");
  const page = searchParams.get("page");
  const router = useRouter();

  const [search, setSearch] = useState("");

  const handleSearch = (value: string) => {
    setSearch(value);
    debouncedRefetch();
  };

  const debouncedRefetch = useCallback(
    debounce(() => {
      handleSetPage(1);
      queryClient.invalidateQueries({
        queryKey: queryKey,
        exact: true,
      });
    }, 500), // 500ms delay, adjust as needed
    [queryClient]
  );

  useEffect(() => {
    return () => {
      debouncedRefetch.cancel();
    };
  }, [debouncedRefetch]);

  useEffect(() => {
    Promise.resolve().then(() => {
      queryClient.refetchQueries({
        queryKey: queryKey,
        exact: true, // Only refetch this exact query
      });
    });
  }, [searchParams]);

  const handleSetPage = (pageNumber?: number) => {
    const url = createQuery("", {
      baseUrl: "/",
    });

    if (!paginate || pageNumber) {
      url.paginate(10);
    }
    if (!page || pageNumber) {
      url.page(pageNumber ?? 1);
    }

    if (!page || !paginate || pageNumber) {
      router.replace(url.build());
    }
  };

  useEffect(() => {
    handleSetPage();
  }, [page, paginate]);

  return { search, handleSearch, searchParams, page, paginate };
};
