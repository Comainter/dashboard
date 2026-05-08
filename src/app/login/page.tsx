import { Suspense } from "react"
import LoginClient from "./LoignClient"


function LoginFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-sm text-zinc-500">
        Loading authentication...
      </div>
    </main>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginClient />
    </Suspense>
  )
}