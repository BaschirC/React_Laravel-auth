import { API_VERSION, BACKEND_URL } from "@/constants";
import { QueryBuilder } from "queryfi";
import { QueryBuilderOptions } from "queryfi/dist/types";

QueryBuilder.setDefaultOptions({
  baseUrl: BACKEND_URL,
  defaultPathParams: { api_version: API_VERSION },
});

export function queryfi<T extends Record<string, any>>(
  basePath: string,
  options?: QueryBuilderOptions
): QueryBuilder<T> {
  return new QueryBuilder<T>(basePath, options);
}
