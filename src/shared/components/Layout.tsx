import { ReactNode } from "react"
import { AppSidebar } from "./Sidebar"
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar"

interface LayoutProps {
    children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
    <SidebarProvider>
        <AppSidebar />  
        <main>
            <SidebarTrigger />
            <div className="p-2">
                {children}
            </div>
        </main>
    </SidebarProvider>
    )
}