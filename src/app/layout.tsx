import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/features/providers";
import { AI_NAME } from "@/features/theme/customise";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";
import "./layout.css"

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: AI_NAME,
  description: AI_NAME,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className={cn(inter.className, "flex w-full h-full")}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col flex-1 w-full h-full">
              <div
                className={cn(
                  inter.className,
                  "layout-wrapper",
                  "flex gap-2 bg-primary flex-1 overflow-hidden"
                )}
              >
                {children}
              </div>
              <div className="p-2 bg-primary text-slate-300 flex text-[10px] gap-2 justify-between">
                <div>Powered by Azure Chat Solution Accelerator</div>
                <div>For UNDP Serbia adapted by ICT Tech Cell</div>
              </div>
            </div>
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
