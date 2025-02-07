import { create } from "zustand";

export type BreadCrumb = {
  currentSelected?: {
    id: number;
    label: string;
  };
};

export const useBreadCrumb = create<BreadCrumb>(() => ({
  currentSelected: undefined,
}));
