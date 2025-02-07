"use client";

import { ChevronLeftIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { menuItems } from "@/hooks/menu";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Session } from "next-auth";
import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

export function AppSidebar() {
  const [isHovering, setIsHovering] = useState<string | null>();

  const { toggleSidebar, open } = useSidebar();
  const items = menuItems();

  useQuery<Session>({
    queryKey: ["user"],
    queryFn: async () => {
      const session = await getSession();
      if (!session) {
        toast.error("You have been disconnected due to inactivity.");
        return signOut({ redirect: true, callbackUrl: "/login" });
      }
      return await session;
    },
  });

  return (
    <Sidebar collapsible='icon'>
      <SidebarContent>
        <SidebarHeader>
          <SidebarMenu>{/* <OrganizationDropdown /> */}</SidebarMenu>
        </SidebarHeader>
        {items.map((item, i) => (
          <SidebarGroup key={i}>
            <SidebarGroupLabel>{item.groupName}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((menuItem, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      onMouseEnter={() => setIsHovering(menuItem.url)}
                      onMouseLeave={() => setIsHovering(null)}
                      asChild
                      className='h-full'
                    >
                      <Link href={menuItem.url}>
                        <menuItem.icon
                          isanimating={String(isHovering === menuItem.url)}
                        />
                        <span>{menuItem.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <Button
        onClick={toggleSidebar}
        size='xsIcon'
        className={cn(
          "absolute p-0 rounded-full -right-4 bottom-14",
          !open && "rotate-180"
        )}
        variant='outline'
      >
        <ChevronLeftIcon size={32} />
      </Button>
    </Sidebar>
  );
}
