import { queryfi } from "@/lib/queryfi";
import { QueryBuilder } from "queryfi";

export const buildQuery = <T>({
  mutate,
  getter,
  path,
}: {
  mutate?: (qb: QueryBuilder<T>) => QueryBuilder<T>;
  getter?: "get" | "first" | "build" | "count";
  path: string | number;
}) => {
  return queryfi<T>(`/api/{api_version}/${path ?? ""}`)
    .mutator((qb) => (mutate ? mutate(qb) : qb))
    [getter ?? "build"]();
};
