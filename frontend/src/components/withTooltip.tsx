import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function WithTooltip({
  trigger,
  message,
}: {
  trigger: React.ReactNode;
  message: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      {message && <TooltipContent className='z-20'>{message}</TooltipContent>}
    </Tooltip>
  );
}

export default WithTooltip;
