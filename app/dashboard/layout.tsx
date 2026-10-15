import React from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/custom/dashboard/AppSidebar';

function DashBoardlayout({ children }: any) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full'>
                <SidebarTrigger />
                {children}
            </main>


        </SidebarProvider>

    )
}

export default DashBoardlayout;