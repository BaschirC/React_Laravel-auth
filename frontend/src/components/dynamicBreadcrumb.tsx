"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { useBreadCrumb } from "@/store/useBreadCrumb";

export const DynamicBreadcrumbs = () => {
  const pathname = usePathname();
  const { currentSelected } = useBreadCrumb();

  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment !== "")
    .map((segment) => {
      if (!isNaN(Number(segment)) && Number(segment) === currentSelected?.id) {
        return currentSelected.label;
      }

      return segment;
    });

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments?.slice(0, index + 1).join("/")}`;
      return {
        href,
        label:
          segment?.charAt(0)?.toUpperCase() +
          segment?.slice(1)?.replace(/-/g, " "),
      };
    }),
  ];

  return (
    <Breadcrumb className='px-1 my-2 w-fit'>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.href}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {index === breadcrumbItems.length - 1 ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
