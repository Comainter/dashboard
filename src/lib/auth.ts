import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getUser() {
  const cookieStore = await cookies()

  const session = cookieStore.get('session')

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/me`, {
    headers: {
      Cookie: `session=${session?.value ?? ''}`,
    },
    cache: 'no-store'
  })

  console.log(res)
  if (!res.ok) return null
  return res.json()
}

export async function requireUser() {
  const user = await getUser()
  console.log(user)

  return user
}