import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "../ui/button";
import { TrashIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import WithTooltip from "../withTooltip";
import { VariantProps } from "class-variance-authority";

function DeleteButton({
  message,
  title,
  action,
  icon,
  tooltipMessage,
  buttonClassName,
  variants,
}: {
  message: string;
  title?: string;
  action: () => void;
  icon?: React.ReactNode;
  tooltipMessage?: string;
  buttonClassName?: string;
  variants?: VariantProps<typeof buttonVariants>;
}) {
  return (
    <Dialog>
      <WithTooltip
        message={tooltipMessage}
        trigger={
          <DialogTrigger asChild>
            <Button
              {...variants}
              variant='ghost'
              size='sm'
              className={cn(
                "flex items-center justify-start h-8 group/delete",
                title ? "w-full" : "w-fit",
                buttonClassName
              )}
            >
              {icon ?? (
                <TrashIcon
                  size={16}
                  className='group-hover/delete:text-red-400 group-hover/delete:animate-pulse'
                />
              )}
              {title}
            </Button>
          </DialogTrigger>
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{message}</DialogTitle>
          <DialogDescription>
            The resource will be permanently removed.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={action} variant='destructive'>
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteButton;
