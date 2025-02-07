import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define the variants for the Input component
const inputVariants = cva(
  "flex w-full file:border-0 file:bg-transparent rounded-md file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed transition-all duration-300 ease-in-out disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-input bg-background", // Default styles
        outline: "border-2 border-ring bg-transparent", // Outline styles
        error:
          "border border-red-500 bg-red-50 text-red-700 placeholder:text-red-400", // Error styles
        // Discreet variant with animated focus effect
        discreet:
          "border-0 border-b border-b-input placeholder:text-muted-foreground focus:border-b-2 focus:border-b-primary focus:outline-none focus-visible:ring-0 rounded-none",
      },
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        md: "h-10 px-3 py-2 text-base",
        lg: "h-12 px-4 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "default", // Default variant if not specified
      size: "md", // Default size if not specified
    },
  }
);

// Input component with variants
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
