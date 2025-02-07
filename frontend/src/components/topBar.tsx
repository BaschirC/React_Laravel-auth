import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

function TopBar({
  title,
  children,
  className,
}: PropsWithChildren<{ title: React.ReactNode; className?: string }>) {
  return (
    <div className={cn(className)}>
      {title && <h2 className='text-2xl font-medium'>{title}</h2>}
      {children}
    </div>
  );
}

export default TopBar;
