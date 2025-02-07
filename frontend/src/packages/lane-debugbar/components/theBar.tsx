"use client";

import React from "react";
import SkeletonLoader from "@/components/loaders/skeletonLoader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronUp, CommandIcon } from "lucide-react";
import WithTooltip from "@/components/withTooltip";

function TheBar({
  isOpen,
  setIsOpen,
  loading,
  duration,
  queries,
  path,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  duration: {
    totalTime: number;
    totalTime_str: string;
  };
  queries: number;
  path: string;
}) {
  return (
    <div className='fixed bottom-0 left-0 z-50 h-7 w-full bg-background'>
      <div className='relative'>
        <WithTooltip
          trigger={
            <Button
              size='xsIcon'
              className='absolute left-2 -top-6'
              onClick={() => setIsOpen(true)}
            >
              {isOpen ? <ChevronUp size={16} /> : <ChevronUp size={16} />}
            </Button>
          }
          message={
            <span className='flex items-center gap-2'>
              Open debugbar{" "}
              <Badge className='rounded-md' variant='secondary'>
                <CommandIcon size={16} /> + D
              </Badge>
            </span>
          }
        />
      </div>
      {loading ? (
        <SkeletonLoader className='h-5 w-32 rounded-md' />
      ) : (
        <div className='flex items-center gap-1'>
          <Badge
            // style={{
            //   backgroundColor: getColorForResponseTime(duration.total_time),
            // }}
            className='border border-gray-500 text-black rounded-md'
          >
            {duration?.totalTime_str}
          </Badge>
          <span className='w-px h-4 bg-primary-foreground/50' />
          <Badge className='border border-gray-500 text-black rounded-md'>
            {queries} queries
          </Badge>
          <span className='w-px h-4 bg-primary-foreground/50' />
          <Badge className='border border-gray-500 text-black rounded-md'>
            {path ?? ""}
          </Badge>
        </div>
      )}
    </div>
  );
}

export default TheBar;
