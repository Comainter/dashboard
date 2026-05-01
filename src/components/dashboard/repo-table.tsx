"use client"

import type { ReactNode } from "react"
import { useMemo, useState } from "react"
import {
  ArrowUpRight,
  Clock3,
  FolderGit2,
  GitBranch,
  MoreHorizontal,
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

export type Repository = {
  status: string
  branch: string
  last_indexed_at: string
  repository: {
    id: number
    name: string
    full_name: string
    private: boolean
    updated_at: string
  }
}

const visibilityClasses: Record<"Private" | "Public", string> = {
  Private:
    "border-border/70 bg-muted/70 text-foreground/80",
  Public:
    "border-violet-500/20 bg-violet-500/10 text-violet-700 dark:text-violet-300",
}

export default function RepoTable({
  query = "",
  repositories = [],
}: {
  query?: string
  repositories: Repository[]
}) {
  const [selectedRepositories, setSelectedRepositories] = useState<string[]>([])

  const filteredRepositories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return repositories
    }

    return repositories.filter((repository) =>
      [
        repository.repository.name,
        repository.repository.full_name,
        repository.branch,
        repository.status,
        repository.repository.private ? "private" : "public",
      ].some((value) => value.toLowerCase().includes(normalizedQuery))
    )
  }, [query, repositories])

  const allVisibleSelected =
    filteredRepositories.length > 0 &&
    filteredRepositories.every((repository) =>
      selectedRepositories.includes(String(repository.repository.id))
    )

  function toggleRepository(repoId: string) {
    setSelectedRepositories((current) =>
      current.includes(repoId)
        ? current.filter((item) => item !== repoId)
        : [...current, repoId]
    )
  }

  function toggleAllVisible(checked: boolean) {
    if (checked) {
      setSelectedRepositories((current) => [
        ...new Set([
          ...current,
          ...filteredRepositories.map((repository) => String(repository.repository.id)),
        ]),
      ])
      return
    }

    setSelectedRepositories((current) =>
      current.filter(
        (name) =>
          !filteredRepositories.some((repository) => String(repository.repository.id) === name)
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
                key={repository.repository.id}
                data-state={
                  selectedRepositories.includes(String(repository.repository.id))
                    ? "selected"
                    : undefined
                }
                className="border-border/60 hover:bg-muted/30"
              >
                <TableCell className="pl-5">
                  <input
                    type="checkbox"
                    aria-label={`Select ${repository.repository.name}`}
                    checked={selectedRepositories.includes(String(repository.repository.id))}
                    onChange={() => toggleRepository(String(repository.repository.id))}
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
                        <p className="font-semibold">{repository.repository.name}</p>
                        <Chip className={visibilityClasses[repository.repository.private ? "Private" : "Public"]}>
                          {repository.repository.private ? "Private" : "Public"}
                        </Chip>
                      </div>
                      <p className="text-sm text-muted-foreground">{repository.repository.full_name}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <GitBranch className="size-3.5" />
                          {repository.branch}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock3 className="size-3.5" />
                          {new Date(repository.last_indexed_at || repository.repository.updated_at).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Chip className="border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                    {repository.status}
                  </Chip>
                </TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <AvatarGroup><Avatar className="border border-background"><AvatarFallback>{repository.repository.name.slice(0, 2).toUpperCase()}</AvatarFallback></Avatar></AvatarGroup>
                    <p className="text-xs text-muted-foreground">
                      Repo ID: {repository.repository.id}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="pr-5 text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" className="rounded-full" disabled>
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
