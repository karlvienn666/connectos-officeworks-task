import { ReactNode } from "react"
import { AppSidebar } from "./sidebar/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import { AppSidebarInset } from "./sidebar/AppSidebarInset"

interface LayoutProps {
    children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
    <SidebarProvider>
        <AppSidebar />
        <AppSidebarInset>
            {children}
        </AppSidebarInset>
    </SidebarProvider>
    )
}