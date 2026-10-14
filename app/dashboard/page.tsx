import { requireAuth } from '@/src/lib/auth-server'
import Heading from '@/src/shared/components/typografy/Heading';
import { generatePageTitle } from '@/src/shared/utils/metadata';
import { Metadata } from 'next';
import { redirect } from 'next/navigation'
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: generatePageTitle('Dashboard')
};

export default function DashboardPage() {
  return (
    <Suspense fallback={<Heading>Cargando panel…</Heading>}>
      <DashboardContent />
    </Suspense>
  )
}

async function DashboardContent() {
  const { isAuth } = await requireAuth()

  if (!isAuth) {
    redirect('/auth/login')
  }

  return (
    <>
      <Heading> Panel de Administacion</Heading>
    </>
  )
}
