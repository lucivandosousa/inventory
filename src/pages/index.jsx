import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { jwtDecode } from "jwt-decode";
import MenuNavigation from "@/components/MenuNavigation";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      try {
        const decodedToken = jwtDecode(token)
        const currentTime = Date.now() / 1000
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('token')
          router.push('/auth')
        }
      } catch (error) {
        localStorage.removeItem('token')
        router.push('/auth')
      }
    } else {
      router.push('/auth')
    }
  }, [router])

  return (
    <div className="flex min-h-screen bg-gray-100">
      <MenuNavigation />
      <main className="flex-1 p-6">
        <h2 className="mb-6 text-3xl font-bold">Bem-vindo ao Inventário</h2>
        <p>Selecione uma opção no menu para começar.</p>
      </main>
    </div>
  )
}
