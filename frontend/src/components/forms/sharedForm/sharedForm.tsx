"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { magicRename } from "@/lib/utils";
import { FieldConfigs } from "@/types/sharedForm";
import React from "react";
import { Control, SubmitHandler, UseFormReturn } from "react-hook-form";
import { v4 } from "uuid";
import { z } from "zod";
import BooleanField from "./_components/booleanField";
import DateField from "./_components/dateField";
import ImageField from "./_components/imageField";
import NumberField from "./_components/numberField";
import SelectField from "./_components/selectField";
import TextField from "./_components/textField";
import TextareaField from "./_components/textareaField";

const renderField = <T extends z.ZodType<any, any>>(
  index: number,
  fieldName: string,
  schema: T,
  control: Control<any>,
  fieldConfigs: FieldConfigs
): React.ReactNode => {
  const config = fieldConfigs[fieldName] || {};
  const label = config.label || magicRename(fieldName);

  // Check if the field should be hidden
  if (config.hidden) {
    return null;
  }

  // Determine if the field is optional
  const isOptional =
    schema instanceof z.ZodOptional ||
    schema instanceof z.ZodNullable ||
    schema instanceof z.ZodDefault ||
    config.optional;

  // Unwrap optional/nullable schemas
  const baseSchema =
    schema instanceof z.ZodOptional || schema instanceof z.ZodNullable
      ? schema._def.innerType
      : schema;

  if (config.type === "image") {
    return (
      <ImageField
        schema={baseSchema}
        key={index}
        fieldName={fieldName}
        control={control}
        config={config}
        isOptional={isOptional}
        label={label}
      />
    );
  }

  if (config.type === "select" || baseSchema instanceof z.ZodEnum) {
    return (
      <SelectField
        key={index}
        config={config}
        isOptional={isOptional}
        label={label}
        fieldName={fieldName}
        control={control}
        schema={schema}
      />
    );
  }

  // Date handling for datetime schemas
  if (baseSchema instanceof z.ZodDate) {
    return (
      <DateField
        key={index}
        config={config}
        isOptional={isOptional}
        label={label}
        fieldName={fieldName}
        control={control}
        schema={baseSchema}
      />
    );
  }

  // String input
  if (
    baseSchema instanceof z.ZodString &&
    config.type === "text" &&
    config.textType !== "huge" &&
    config.textType !== "number"
  ) {
    return (
      <TextField
        key={index}
        fieldName={fieldName}
        control={control}
        config={config}
        isOptional={isOptional}
        label={label}
        schema={baseSchema}
      />
    );
  }

  // String input
  if (
    baseSchema instanceof z.ZodString &&
    config.type === "text" &&
    config.textType === "huge"
  ) {
    return (
      <TextareaField
        key={index}
        fieldName={fieldName}
        control={control}
        config={config}
        isOptional={isOptional}
        label={label}
        schema={baseSchema}
      />
    );
  }

  // Number input
  if (
    baseSchema instanceof z.ZodNumber ||
    config.type === "number" ||
    (config.type === "text" && config.textType === "number")
  ) {
    return (
      <NumberField
        key={index}
        config={config}
        isOptional={isOptional}
        label={label}
        fieldName={fieldName}
        control={control}
        schema={baseSchema}
      />
    );
  }

  // Boolean (Checkbox)
  if (baseSchema instanceof z.ZodBoolean) {
    return (
      <BooleanField
        key={index}
        config={config}
        isOptional={isOptional}
        label={label}
        fieldName={fieldName}
        control={control}
        schema={baseSchema}
      />
    );
  }

  return null;
};

interface UniversalFormProps<T extends z.ZodObject<any> | z.ZodEffects<z.ZodObject<any>>> {
  schema: T;
  onSubmit: SubmitHandler<z.infer<T>>;
  fieldConfigs?: FieldConfigs;
  submitButtonText?: string;
  formClassName?: string;
  submitButtonClassName?: string;
  form: UseFormReturn;
  showSeparator?: boolean;
}

function SharedForm<T extends z.ZodObject<any> | z.ZodEffects<z.ZodObject<any>>>({
  schema,
  onSubmit,
  fieldConfigs = {},
  submitButtonText = "Submit",
  formClassName = "flex flex-col gap-4",
  submitButtonClassName,
  form,
  showSeparator = false,
}: UniversalFormProps<T>) {
  const id = v4();

  const schemaShape = ('shape' in schema) ? schema.shape : schema._def.schema.shape;

  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form?.handleSubmit(onSubmit)}
        className={formClassName}
      >
        {Object.keys(schemaShape).map((fieldName, index) => {
          const fieldSchema = schemaShape[fieldName];
          const config = fieldConfigs[fieldName] || {};

          if (!config.hidden) {
            return renderField<typeof fieldSchema>(
              index,
              fieldName,
              fieldSchema,
              form.control,
              fieldConfigs
            );
          }

          return null;
        })}
      </form>
      {showSeparator && <Separator />}
      <div className='flex justify-end w-full'>
        <Button form={id} type='submit' className={submitButtonClassName}>
          {submitButtonText}
        </Button>
      </div>
    </Form>
  );
}

export default SharedForm;
