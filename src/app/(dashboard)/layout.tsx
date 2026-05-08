import AppSidebar from '@/components/dashboard/appsidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Toaster } from "@/components/ui/sonner"
import React from 'react'

export default function DashBoardLayout({children}:{children: React.ReactNode}) {
  return (
    <SidebarProvider>
   <div className="flex min-h-screen w-full">
        <AppSidebar />

        <main className="flex-1 w-full">
          {children}
        </main>
        <Toaster />
      </div>
  </SidebarProvider>
  )
}
