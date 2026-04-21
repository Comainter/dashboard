import AppSidebar from '@/components/dashboard/appsidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

export default function DashBoardLayout({children}:{children: React.ReactNode}) {
  return (
    <SidebarProvider>
    <AppSidebar />
    <main>
      {children}
    </main>
  </SidebarProvider>
  )
}
