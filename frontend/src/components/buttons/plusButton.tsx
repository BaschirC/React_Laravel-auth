"use client";

import React, { forwardRef } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContentProps } from "@radix-ui/react-tooltip";
import { Plus } from "lucide-react";

interface PlusButtonInterface extends TooltipContentProps {
  title?: string;
  tooltip?: string;
  variant?: ButtonProps["variant"];
}

const PlusButton = forwardRef<HTMLButtonElement, PlusButtonInterface>(
  ({ title, tooltip, variant, ...props }, ref) => {
    return (
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              ref={ref}
              variant={variant}
              size={title ? "default" : "icon"}
              aria-label='Add new item'
            >
              <Plus size={16} strokeWidth={2} aria-hidden='true' />
              {title}
            </Button>
          </TooltipTrigger>
          {tooltip && (
            <TooltipContent
              {...props}
              className='px-2 py-1 text-xs border border-input bg-popover text-muted-foreground'
            >
              {tooltip}
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    );
  }
);

PlusButton.displayName = "PlusButton";

export default PlusButton;
