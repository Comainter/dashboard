// lib/auth.ts
import { cookies } from 'next/headers'

export async function getUser() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')
  
  console.log('getUser - Session:', session ? 'exists' : 'missing')
  
  if (!session) {
    console.log('No session cookie in getUser')
    return null
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/me`, {
      headers: {
        Cookie: `session=${session.value}`,
      },
      cache: "no-store",
    })

    console.log('Backend response:', res.status)

    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error('Error fetching user:', error)
    return null
  }
}

// Remove requireUser or simplify it
export async function requireUser() {
  return await getUser()
}