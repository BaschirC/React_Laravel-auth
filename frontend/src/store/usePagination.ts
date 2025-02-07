import { create } from "zustand";

export interface IPagination {
  currentPage: number;
  pageSize: number;
  total?: number;
  lastPage?: number;
  firstPage?: number;
  setCurrentPage: (page: number) => void;
  setPageSize: (newPageSize: number) => void;
}

export const usePagination = create<IPagination>((set) => ({
  currentPage: 1,
  pageSize: 10,
  total: undefined,
  lastPage: undefined,
  firstPage: undefined,
  setCurrentPage: (page) => {
    set({
      currentPage: page,
    });
  },

  setPageSize: (newPageSize) => {
    set({ pageSize: newPageSize });
  },
}));
