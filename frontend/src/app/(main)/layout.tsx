import { PropsWithChildren } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import UserDropdown from "@/components/userDropdown";
import { Separator } from "@/components/ui/separator";
import { DynamicBreadcrumbs } from "@/components/dynamicBreadcrumb";
import TopBar from "@/components/topBar";

const AppLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div className='flex w-screen min-h-screen'>
      <AppSidebar />
      <main className='w-full p-2'>
        <TopBar title='' className='flex items-center justify-between'>
          <DynamicBreadcrumbs />
          <div className='w-fit'>
            <UserDropdown />
          </div>
        </TopBar>
        <Separator className='my-1 bg-transparent' />
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
