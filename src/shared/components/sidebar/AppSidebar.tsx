import { GalleryHorizontalEnd, Home, Image, Save } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar"
import { Link } from "react-router-dom"
 
// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Images",
    url: "images",
    icon: Image,
  },
  {
    title: "Image Upload",
    url: "image-upload",
    icon: Save,
  }
]
 
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className=" text-3xl font-sans">
        Image Saving Task
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Image Manager</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className=" text-primary w-[100%]">
                      <item.icon />
                      <span className=" p-0">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}