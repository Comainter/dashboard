"use client"

import { useEffect, useState } from "react"

import RepoTable from "@/components/dashboard/repo-table"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Plus, Search } from "lucide-react"
import { User } from "@/type"
import Link from "next/link"

export type GitHubRepo = {
  id: number;
  full_name: string;
  private?: boolean;
  default_branch?: string;
  html_url?: string;
  language?: string | null;
};

type Installation = {
  installation_id: number;
};


export default function Repositeriespage({user}:{user:User}) {
  const [query, setQuery] = useState("")
  const [repoData,setRepoData]=useState<GitHubRepo[]>([])
  const [, setInstallations] = useState<Installation[]>([])
  const [selectedInstallation, setSelectedInstallation] = useState<number | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchInstallations = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/github/installations`, {
          credentials: "include"
        })
        const data: Installation[] = await res.json()

        if (!isMounted) return

        setInstallations(data)
        const firstInstallation = data.at(0)
        if (firstInstallation) {
          setSelectedInstallation(firstInstallation.installation_id)
        }
      } catch (error) {
        console.error("Failed to fetch installations", error)
      }
    }

    fetchInstallations()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (!selectedInstallation) return

    let isMounted = true

    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/github/repos/${selectedInstallation}`,
          { credentials: "include" }
        )
        const data: { repositories?: GitHubRepo[] } = await res.json()

        if (!isMounted) return

        setRepoData(data.repositories ?? [])
      } catch (error) {
        console.error("Failed to fetch repositories", error)
      }
    }

    fetchRepos()

    return () => {
      isMounted = false
    }

  }, [selectedInstallation])


  return (
    <div className="min-h-screen w-full bg-background">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border/60 bg-background transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Repositories</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Workspace</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <main className="w-full px-0 py-6">
        <section className="mb-6 flex w-full px-4 lg:px-6">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative min-w-0 flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search repos"
                className="h-11 w-full rounded-full border-border/70 bg-background pl-11"
              />
            </div>
            <Link className="rounded-full" href="https://github.com/apps/Coaminter/installations/new"  >
              <Plus className="size-4" />
              Add repository
            </Link>
          </div>
        </section>
        <RepoTable query={query} />
      </main>
    </div>
  )
}
