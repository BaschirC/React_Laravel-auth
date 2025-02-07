import React from "react";
import SkeletonLoader from "./skeletonLoader";

function getRandomHeight(maxHeight: number) {
  return Math.random() * maxHeight + 50;
}

function PageSkeletonLoader() {
  const maxHeight = 90; // Max height in pixels
  return (
    <div>
      {[...Array(4)].map((_, index) => (
        <SkeletonLoader
          key={index}
          style={{ height: `${getRandomHeight(maxHeight)}px` }}
          className='w-full rounded-md'
        />
      ))}
    </div>
  );
}

export default PageSkeletonLoader;
