"use client"

import * as React from "react"
import {
  AudioWaveform,
  Bot,
  BriefcaseBusiness,
  Bug,
  Building,
  GalleryVerticalEnd,
  LayoutGrid,
  PieChart,
  UserRoundCog,
} from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import  TeamSwitcher  from "./team-switcher"
import  NavMain  from "./nav-main"
import NavProjects  from "./nav-projects"
import  NavUser  from "./nav-user"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Comainter",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Maintania",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],

  projects: [
    {
      name: "Repositeries",
      url: "/",
      icon: BriefcaseBusiness,
    },
    {
      name: "Issues",
      url: "/issues",
      icon: Bug,
    },
    {
      name: "Analaytics",
      url: "/analyatics",
      icon: PieChart,
    },
   
    {
      name: "AI Insights",
      url: "insights",
      icon: Bot,
    },
    {
      name: "Oragnisation settings",
      url: "orgsettings",
      icon: Building,
    },
  ],
}

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
