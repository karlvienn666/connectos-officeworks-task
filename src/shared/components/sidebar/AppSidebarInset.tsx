import { Separator } from "@radix-ui/react-separator"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb"
import { SidebarInset, SidebarTrigger } from "../ui/sidebar"
import { ReactNode } from "react"
import { useUrlPath } from "@/shared/hooks/useUrlPath";

interface AppSidebarInsetprops {
    children: ReactNode;
}

export const AppSidebarInset: React.FC<AppSidebarInsetprops> = ({children}) => {

    const {formattedUrl} = useUrlPath();

    return (
        <SidebarInset className="w-full">
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
                <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                    Dashboard
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                    <BreadcrumbPage>{formattedUrl}</BreadcrumbPage>
                </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            </header>
            <div className="flex p-2 h-full bg-background">
                {children}
            </div>
        </SidebarInset>
    )
}