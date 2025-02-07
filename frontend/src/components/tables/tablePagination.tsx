"use client";

import { Table } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { Data } from "@/types/defaults";
import { IPaginatedResponse } from "@/types/paginatedResponse";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePagination } from "@/store/usePagination";
import { createQuery } from "queryfi";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  hideSelected?: boolean;
  query?: string;
}

export function DataTablePagination<TData>({
  table,
  hideSelected = false,
  query,
}: DataTablePaginationProps<TData>) {
  const searchParams = useSearchParams();
  const {
    currentPage,
    pageSize,
    setPageSize,
    setCurrentPage,
    lastPage,
    total,
  } = usePagination();

  const router = useRouter();
  const queryClient = useQueryClient();

  useEffect(() => {
    setCurrentPage(Number(searchParams.get("page")) ?? 1);
    setPageSize(Number(searchParams.get("paginate")) ?? 10);
  }, [searchParams]);

  useEffect(() => {
    const data = queryClient.getQueryData<Data<IPaginatedResponse<any>>>([
      query,
    ]);
    if (data?.content) {
      usePagination.setState({
        lastPage: data.content.last_page,
        total: data.content.data?.length,
      });
    }
  }, [queryClient.getQueryData([query])]);

  const setQueryParam = async (value: string | number | null) => {
    const url = createQuery("", {
      baseUrl: "/",
    })
      .page(Number(value))
      .paginate(Number(pageSize))
      .build();

    router.replace(url);
  };

  const handlePageSizeChange = (size: number) => {
    const url = createQuery("", {
      baseUrl: "/",
    })
      .paginate(Number(size))
      .page(Number(1))
      .build();

    router.replace(url);
  };

  return (
    <div className='flex items-center justify-between px-2'>
      {!hideSelected ? (
        <div className='flex-1 text-sm text-muted-foreground'>
          {table.getFilteredSelectedRowModel().rows.length} of {total} row(s)
          selected.
        </div>
      ) : (
        <div className='flex-1' />
      )}
      <div className='flex items-center space-x-6 lg:space-x-8'>
        <div className='flex items-center space-x-2'>
          <p className='text-sm font-medium'>Rows per page</p>
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => {
              handlePageSizeChange(Number(value));
            }}
          >
            <SelectTrigger className='h-8 w-[70px]'>
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side='top'>
              {[5, 10, 20, 30, 40, 50, 100].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
          Page {currentPage} of {lastPage}
        </div>
        <div className='flex items-center space-x-2'>
          <Button
            variant='outline'
            className='hidden w-8 h-8 p-0 lg:flex'
            onClick={() => setQueryParam(1)}
            disabled={currentPage === 1}
          >
            <span className='sr-only'>Go to first page</span>
            <ChevronsLeftIcon className='w-4 h-4' />
          </Button>
          <Button
            variant='outline'
            className='w-8 h-8 p-0'
            onClick={() => setQueryParam(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className='sr-only'>Go to previous page</span>
            <ChevronLeftIcon className='w-4 h-4' />
          </Button>
          <Button
            variant='outline'
            className='w-8 h-8 p-0'
            onClick={() => setQueryParam(currentPage + 1)}
            disabled={currentPage >= lastPage}
          >
            <span className='sr-only'>Go to next page</span>
            <ChevronRightIcon className='w-4 h-4' />
          </Button>
          <Button
            variant='outline'
            className='hidden w-8 h-8 p-0 lg:flex'
            onClick={() => setQueryParam(lastPage)}
            disabled={currentPage >= lastPage}
          >
            <span className='sr-only'>Go to last page</span>
            <ChevronsRightIcon className='w-4 h-4' />
          </Button>
        </div>
      </div>
    </div>
  );
}
