import React from "react";

function PageContainer({
  children,
  className,
  ...rest
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={`border rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

export default PageContainer;
