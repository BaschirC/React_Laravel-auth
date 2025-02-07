"use client";

import { extractInitials } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { LogOutIcon } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import SkeletonLoader from "./loaders/skeletonLoader";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function UserDropdown() {
  const { data } = useQuery<Session>({
    queryKey: ["user"],
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <DropdownMenuTrigger asChild>
          {!data && !data?.user ? (
            <div className='flex w-full items-center gap-2'>
              <SkeletonLoader className='h-12 min-w-12 rounded-full' />
              <div className='flex w-full flex-col gap-2'>
                <SkeletonLoader className='h-4 w-full rounded-md' />
                <SkeletonLoader className='h-4 w-1/2 rounded-md' />
              </div>
            </div>
          ) : (
            <Button size='icon' variant='outline' className='rounded-full'>
              {extractInitials(data.user.name)}
            </Button>
          )}
        </DropdownMenuTrigger>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
        side='bottom'
        align='end'
        sideOffset={4}
      >
        <DropdownMenuLabel className='p-0 font-normal'>
          <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
            <div className='grid flex-1 text-left text-sm leading-tight'>
              <span className='truncate font-semibold'>{data?.user.name}</span>
              <span className='truncate text-xs'>{data?.user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut()}
          className={"flex cursor-pointer items-center gap-2"}
        >
          <LogOutIcon size={16} />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdown;
