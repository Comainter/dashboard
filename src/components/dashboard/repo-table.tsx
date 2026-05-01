"use client"

import type { ReactNode } from "react"
import { useMemo, useState } from "react"
import {
  ArrowUpRight,
  Clock3,
  FolderGit2,
  GitBranch,
  MoreHorizontal,
  Star,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

type Repository = {
  name: string
  description: string
  visibility: "Private" | "Public" | "Internal"
  status: "Healthy" | "Review" | "At Risk"
  branch: string
  updated: string
  activity: string
  score: string
  pullRequests: number
  issues: number
  stars: string
  contributors: string[]
}

const repositories: Repository[] = [
  {
    name: "comainter-dashboard",
    description: "Main analytics workspace powering the executive dashboard.",
    visibility: "Private",
    status: "Healthy",
    branch: "main",
    updated: "5 minutes ago",
    activity: "12 deploys this week",
    score: "94%",
    pullRequests: 6,
    issues: 14,
    stars: "2.4k",
    contributors: ["DK", "AR", "SJ", "MV"],
  },
  {
    name: "comainter-api",
    description: "Shared service layer for repositories, activity feeds, and auth.",
    visibility: "Internal",
    status: "Healthy",
    branch: "release/v2",
    updated: "22 minutes ago",
    activity: "8 merged PRs today",
    score: "91%",
    pullRequests: 4,
    issues: 9,
    stars: "1.8k",
    contributors: ["TN", "DP", "AS"],
  },
  {
    name: "repository-agent",
    description: "Automation rules for triage, tagging, and code ownership workflows.",
    visibility: "Private",
    status: "Review",
    branch: "staging",
    updated: "1 hour ago",
    activity: "Needs reviewer assignment",
    score: "72%",
    pullRequests: 11,
    issues: 21,
    stars: "846",
    contributors: ["PK", "DS", "AR"],
  },
  {
    name: "design-system",
    description: "Component primitives, tokens, and dashboard-specific UI patterns.",
    visibility: "Public",
    status: "Healthy",
    branch: "main",
    updated: "3 hours ago",
    activity: "Library release in progress",
    score: "96%",
    pullRequests: 3,
    issues: 5,
    stars: "5.2k",
    contributors: ["EL", "VK", "NJ", "RT"],
  },
  {
    name: "ops-console",
    description: "Internal tooling for monitoring jobs, incidents, and alerts.",
    visibility: "Private",
    status: "At Risk",
    branch: "hotfix/cache",
    updated: "Yesterday",
    activity: "2 failing checks",
    score: "61%",
    pullRequests: 9,
    issues: 18,
    stars: "690",
    contributors: ["SM", "AR"],
  },
]

const statusClasses: Record<Repository["status"], string> = {
  Healthy:
    "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  Review:
    "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  "At Risk":
    "border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-300",
}

const visibilityClasses: Record<Repository["visibility"], string> = {
  Private:
    "border-border/70 bg-muted/70 text-foreground/80",
  Internal:
    "border-sky-500/20 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  Public:
    "border-violet-500/20 bg-violet-500/10 text-violet-700 dark:text-violet-300",
}

export default function RepoTable({ query = "" }: { query?: string }) {
  const [selectedRepositories, setSelectedRepositories] = useState<string[]>([])

  const filteredRepositories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return repositories
    }

    return repositories.filter((repository) =>
      [
        repository.name,
        repository.description,
        repository.branch,
        repository.status,
        repository.visibility,
      ].some((value) => value.toLowerCase().includes(normalizedQuery))
    )
  }, [query])

  const allVisibleSelected =
    filteredRepositories.length > 0 &&
    filteredRepositories.every((repository) =>
      selectedRepositories.includes(repository.name)
    )

  function toggleRepository(name: string) {
    setSelectedRepositories((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    )
  }

  function toggleAllVisible(checked: boolean) {
    if (checked) {
      setSelectedRepositories((current) => [
        ...new Set([
          ...current,
          ...filteredRepositories.map((repository) => repository.name),
        ]),
      ])
      return
    }

    setSelectedRepositories((current) =>
      current.filter(
        (name) =>
          !filteredRepositories.some((repository) => repository.name === name)
      )
    )
  }

  return (
    <section className="w-full">
      <div className="w-full overflow-hidden border-y border-border/70 bg-background shadow-sm">
        <div className="border-b border-border/70 px-5 py-4 text-sm text-muted-foreground">
          {filteredRepositories.length} repositories
        </div>

        <Table className="w-full">
          <TableHeader>
            <TableRow className="border-border/70 hover:bg-transparent">
              <TableHead className="w-14 pl-5">
                <input
                  type="checkbox"
                  aria-label="Select all repositories"
                  checked={allVisibleSelected}
                  onChange={(event) => toggleAllVisible(event.target.checked)}
                  className="size-4 rounded border-border align-middle accent-primary"
                />
              </TableHead>
              <TableHead>Repository</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Contributors</TableHead>
              <TableHead className="pr-5 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRepositories.map((repository) => (
              <TableRow
                key={repository.name}
                data-state={
                  selectedRepositories.includes(repository.name)
                    ? "selected"
                    : undefined
                }
                className="border-border/60 hover:bg-muted/30"
              >
                <TableCell className="pl-5">
                  <input
                    type="checkbox"
                    aria-label={`Select ${repository.name}`}
                    checked={selectedRepositories.includes(repository.name)}
                    onChange={() => toggleRepository(repository.name)}
                    className="size-4 rounded border-border align-middle accent-primary"
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/15 via-amber-500/10 to-transparent text-orange-600 dark:text-orange-300">
                      <FolderGit2 className="size-5" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold">{repository.name}</p>
                        <Chip className={visibilityClasses[repository.visibility]}>
                          {repository.visibility}
                        </Chip>
                      </div>
                     
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <GitBranch className="size-3.5" />
                          {repository.branch}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock3 className="size-3.5" />
                          {repository.updated}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Star className="size-3.5" />
                          {repository.stars}
                        </span>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <Chip className={statusClasses[repository.status]}>
                      {repository.status}
                    </Chip>
                    <p className="text-xs text-muted-foreground">
                      {repository.pullRequests} PRs and {repository.issues} issues
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <AvatarGroup>
                      {repository.contributors.map((contributor) => (
                        <Avatar key={contributor} className="border border-background">
                          <AvatarFallback>{contributor}</AvatarFallback>
                        </Avatar>
                      ))}
                    </AvatarGroup>
                    <p className="text-xs text-muted-foreground">
                      {repository.contributors.length} active contributors
                    </p>
                  </div>
                </TableCell>
                <TableCell className="pr-5 text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" className="rounded-full">
                      Open
                      <ArrowUpRight className="size-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon-sm" className="rounded-full">
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Manage access</DropdownMenuItem>
                        <DropdownMenuItem>Pin repository</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

function Chip({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        className
      )}
    >
      {children}
    </span>
  )
}
