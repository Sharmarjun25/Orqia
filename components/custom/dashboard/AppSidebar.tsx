import {
    Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { AppWindow } from "lucide-react"
import Image from "next/image"

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="flex flex-row gap-2.5 items-center px-4 py-4">
                <Image src={"/logo.svg"} alt="logo" width={32} height={32} />
                <h2 className="font-semibold text-lg text-slate-900">
                    Orqia
                </h2>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                    <SidebarMenuButton className="">

                        <div className="flex h-9 w-8 shrink -0 bg-blue-100 items-center justify-center">
                            <AppWindow className="h-[18px] w-[18px] text-blue-900" />

                        </div>
                        <span>DashBoard</span>
                    </SidebarMenuButton>




                </SidebarGroup >

            </SidebarContent>
            <SidebarFooter />

        </Sidebar>
    )
}