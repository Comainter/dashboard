"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

import {
  ArrowRight,
  GitBranchIcon,
  GitBranch,
  Boxes,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import Link from "next/link"

const providers = [
  {
    name: "GitHub",
    icon: GitBranchIcon,
    provider: "github",
  },
  {
    name: "GitLab",
    icon: GitBranch,
    provider: "gitlab",
  },
  {
    name: "Bitbucket",
    icon: Boxes,
    provider: "bitbucket",
  },
]

export default function LoginPage() {
  const searchParams = useSearchParams()

  const error = searchParams.get("error")

  const [loadingProvider, setLoadingProvider] =
    useState<string | null>(null)

  function signIn(provider: string) {
    if (loadingProvider) return

    setLoadingProvider(provider)

    window.location.href =
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/${provider}/login`
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="animated-grid absolute inset-0" />
      </div>

      {/* Glow */}
      <div className="animated-glow absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

      {/* Scan Line */}
      <div className="scan-lines absolute inset-0 opacity-[0.03]" />

      {/* Noise */}
      <div className="noise absolute inset-0 opacity-[0.04]" />

      <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-2">
        
        {/* Left */}
        <section className="flex items-center px-8 py-20 lg:px-24">
          <div className="animate-fade-up max-w-xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
              Maintainer Infrastructure
            </div>

            <h1 className="text-5xl font-semibold tracking-tight lg:text-6xl">
              Manage open source at scale.
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Centralize repository discussions, automate
              maintainer workflows, and manage issue operations
            </p>
          </div>
        </section>

        {/* Right */}
        <section className="flex items-center justify-center px-6 py-20">
          <div className="animate-fade-up w-full max-w-md rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold">
                Sign in
              </h2>

              <p className="mt-2 text-sm text-zinc-400">
                Continue with your repository provider.
              </p>
            </div>

            <div className="space-y-4">
              {providers.map((provider) => {
                const Icon = provider.icon

                const loading =
                  loadingProvider === provider.provider

                return (
                  <Button
                    key={provider.provider}
                    onClick={() =>
                      signIn(provider.provider)
                    }
                    disabled={!!loadingProvider}
                    variant="outline"
                    className="h-14 w-full justify-between border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white/10 hover:scale-[1.01]"
                  >
                    <span className="flex items-center gap-3">
                      {loading ? (
                        <Spinner data-icon="inline-start" />
                      ) : (
                        <Icon className="size-5" />
                      )}

                      Continue with {provider.name}
                    </span>

                    {!loading && (
                      <ArrowRight className="size-4" />
                    )}
                  </Button>
                )
              })}
            </div>

            {error && (
              <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
                Authentication failed or was cancelled.
              </div>
            )}

<div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-center text-xs leading-6 text-zinc-500">
                By continuing, you agree to our{" "}
                <Link
                  href="/terms-of-use"
                  className="text-zinc-300 underline underline-offset-4 transition hover:text-white"
                >
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-zinc-300 underline underline-offset-4 transition hover:text-white"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}