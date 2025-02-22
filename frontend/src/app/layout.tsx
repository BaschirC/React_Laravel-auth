import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QcProvider from "@/providers/qcProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import AuthProvider from "@/providers/authProvider";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/providers/themeProvider";
import { ModeToggle } from "@/components/modeToggle";
import { DebugBarProvider } from "@/packages/lane-debugbar/providers/debugBarProvider";
import DebugBar from "@/packages/lane-debugbar/components/component";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden `}
      >
        <QcProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <DebugBarProvider>
              <TooltipProvider>
                <SidebarProvider>
                  <AuthProvider>{children}</AuthProvider>
                  <Toaster
                    toastOptions={{
                      duration: 2000,
                      className: "text-sm text-red-500",
                    }}
                  />
                  <DebugBar />
                  <ModeToggle />
                </SidebarProvider>
              </TooltipProvider>
            </DebugBarProvider>
          </ThemeProvider>
        </QcProvider>
      </body>
    </html>
  );
}
