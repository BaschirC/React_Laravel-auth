import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { cn } from "@/lib/utils";

function WithHoverCard({
  trigger,
  content,
  closeDelay = 200,
  openDelay = 200,
  className,
}: {
  trigger: React.ReactNode;
  content: React.ReactNode;
  closeDelay?: number;
  openDelay?: number;
  className?: string;
}) {
  return (
    <HoverCard openDelay={openDelay} closeDelay={closeDelay}>
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
      <HoverCardContent className={cn("p-2", className)}>
        {content}
      </HoverCardContent>
    </HoverCard>
  );
}

export default WithHoverCard;
