import { FieldConfig } from "@/schemas/schemaConfigs";
import { Control } from "react-hook-form";

export type FieldConfigs = Record<string, FieldConfig>;

export type SharedFormFieldProps<T extends keyof FieldConfigs> = {
  fieldName: string;
  control: Control<any>;
  config: FieldConfigs[T];
  label: string;
  isOptional: boolean;
  schema?: any;
};
