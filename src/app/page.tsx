
import { requireUser } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
 
    const users= await requireUser()
    if(!users) return redirect('/login')
    return redirect('/repositries')
  
}