import React from "react";

interface SkeletonLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode; // Allow nested content
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  children,
  ...props
}) => {
  // Generate a random duration between 1s and 3s
  const randomDuration = `${(Math.random() * 2 + 1).toFixed(2)}s`;

  // Generate random shades for the moving gradient
  const baseGray = Math.floor(Math.random() * 30) + 200; // Range: 200-229
  const lightGray = `rgb(${baseGray + 10}, ${baseGray + 10}, ${baseGray + 10})`; // Slightly lighter
  const darkGray = `rgb(${baseGray - 10}, ${baseGray - 10}, ${baseGray - 10})`; // Slightly darker

  return (
    <div
      suppressHydrationWarning
      {...props}
      className={`skeleton-loader ${props.className || ""}`}
      style={
        {
          "--animation-duration": randomDuration,
          "--light-gray": lightGray,
          "--dark-gray": darkGray,
          ...props.style,
        } as any
      }
    >
      {children && <div className='skeleton-loader-content'>{children}</div>}
    </div>
  );
};

export default SkeletonLoader;
