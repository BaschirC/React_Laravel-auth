import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ImagePlus, Loader2Icon, XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function UploadImageComponent({
  isDragging,
  setIsDragging,
  field,
  fieldName,
  config,
  setIsLoading,
  isLoading,
}: {
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
  field: any;
  fieldName: string;
  config: any;
  setIsLoading: (isLoading: boolean) => void;
  isLoading: boolean;
}) {
  return (
    <div className='flex flex-col gap-4'>
      <div
        className={cn(
          "relative group border-2 border-dashed rounded-lg",
          "transition-colors duration-200 ease-in-out",
          isDragging
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25",
          "hover:border-primary hover:bg-primary/5",
          config.uploadAreaClassName
        )}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          const file = e.dataTransfer.files?.[0];
          if (file && file.type.startsWith("image/")) {
            setIsLoading(true);
            const previewUrl = URL.createObjectURL(file);
            field.onChange({ file, previewUrl });
          }
        }}
      >
        <Input
          type='file'
          accept='image/*'
          className='sr-only'
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setIsLoading(true);
              const previewUrl = URL.createObjectURL(file);
              field.onChange({ file, previewUrl });
            }
          }}
          id={`${fieldName}-upload`}
        />
        <label
          htmlFor={`${fieldName}-upload`}
          className={cn(
            "flex flex-col items-center justify-center gap-2",
            "cursor-pointer w-full p-4",
            "text-muted-foreground",
            config.inputClassName
          )}
        >
          {!field.value ? (
            <>
              <ImagePlus className='w-10 h-10' />
              <div className='text-center'>
                <p className='font-medium'>Click to upload</p>
                <p className='text-sm'>or drag and drop</p>
              </div>
              <p className='text-xs'>PNG, JPG, GIF up to 10MB</p>
            </>
          ) : (
            <div className='relative w-40 h-40'>
              {isLoading && (
                <div className='absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10'>
                  <Loader2Icon className='h-8 w-8 animate-spin text-primary' />
                </div>
              )}
              <Image
                src={field.value.previewUrl}
                alt='Preview'
                fill
                className='object-cover rounded-lg'
                onLoad={() => {
                  setIsLoading(false);
                  if (config.onImageLoad) {
                    config.onImageLoad(field.value);
                  }
                }}
              />
              <Button
                type='button'
                variant='destructive'
                size='xsIcon'
                className='absolute -top-6 -right-6 z-20'
                onClick={(e) => {
                  e.preventDefault();
                  if (field.value?.previewUrl) {
                    URL.revokeObjectURL(field.value.previewUrl);
                  }
                  field.onChange(null);
                }}
              >
                <XIcon className='h-4 w-4' />
              </Button>
            </div>
          )}
        </label>
      </div>
    </div>
  );
}

export default UploadImageComponent;
