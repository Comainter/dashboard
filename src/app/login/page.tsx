"use client"

import { ArrowRight, GitFork } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LoginPage() {
  function signIn() {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/GitFork/login`
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_35%),linear-gradient(180deg,rgba(250,250,250,1),rgba(244,244,245,1))] px-6 py-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 size-72 -translate-x-1/2 rounded-full bg-zinc-300/25 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-black/10" />
      </div>

      <section className="w-full max-w-md rounded-[2rem] border border-black/10 bg-white/90 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur sm:p-10">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-lg shadow-zinc-950/15">
            <GitFork className="size-7" />
          </div>
          <p className="mb-2 text-sm font-medium text-zinc-500">Comaniter</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
            Sign in with GitHub
          </h1>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
            Continue to your dashboard and manage your work in one place.
          </p>
        </div>

        <Button
          size="lg"
          onClick={signIn}
          className="h-12 w-full justify-between rounded-2xl px-5 text-sm font-semibold shadow-lg shadow-zinc-950/10"
        >
          <span className="flex items-center gap-3">
            <GitFork className="size-5" />
            Continue with GitHub
          </span>
          <ArrowRight className="size-4" />
        </Button>

        <p className="mt-5 text-center text-xs leading-5 text-zinc-500">
          You&apos;ll be redirected to GitHub to authenticate.
        </p>
      </section>
    </main>
  )
}
