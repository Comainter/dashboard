


import Repositeriespage from '@/components/dashboard/Repositeriespage'
import { requireUser } from '@/lib/auth'
import { User } from '@/type'

export default async function RepositeriesLayout() {
  const user = await requireUser()

  return <Repositeriespage user={user} />
}