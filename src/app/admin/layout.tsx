/* export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 w-full h-full  bg-black">
      {children}
    </div>
  );
} */


import { AppSidebar } from "@/components/ui/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function LayoutPage({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
      
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 dark:bg-slate-700">
          {children}
          {/* {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="aspect-video h-12 w-full rounded-lg bg-muted/50"
            />
          ))} */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
