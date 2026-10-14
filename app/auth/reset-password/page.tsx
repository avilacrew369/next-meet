import { Suspense } from 'react'
import SetPasswordForm from '@/src/features/auth/components/SetPasswordForm'
import Heading from '@/src/shared/components/typografy/Heading'
import { generatePageTitle } from '@/src/shared/utils/metadata'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: generatePageTitle('Define tu nuevo Password')
}

export default function ForgotPasswordPage() {
    const Spinner = () => {
    return <div className="spinner">Cargando...</div>; // Usa tus estilos CSS aquí
};
  return (
    <>
    <Heading >Define tu nuevo Password</Heading>
    <Heading >Define tu nuevo Password</Heading>
    <Suspense fallback={null}>
      <SetPasswordForm />
    </Suspense>

     <nav className="flex justify-between mt-20">
        <Link
          href={'/auth/login'}
          className="font-bold"
          >Iniciar Sesión</Link>
        <Link
          href={'/auth/creat-account'}
          className="font-bold"
          >Crear Cuenta</Link>

      </nav>
    
    </>
  )
}