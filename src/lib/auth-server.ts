import { headers } from 'next/headers'
import { auth } from './auth'

// export async function SessionCheck() {
//   'use cache: private'
export async function getServerSession() {
  'use cache: private'

  const session = await auth.api.getSession({
    headers: await headers(),
  })

  return session
}

export async function requireAuth() {
  const session = await getServerSession()

  return {
    session,
    isAuth: Boolean(session),
  }
}
