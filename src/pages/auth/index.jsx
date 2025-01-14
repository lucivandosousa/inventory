import { useState } from 'react';
import { useRouter } from 'next/router';
import { loginUser } from '../../services/api';

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const data = await loginUser({ email, password })
      localStorage.setItem('token', data.token)
      const storedToken = localStorage.getItem('token')
      router.push('/')
    } catch (error) {
      setError('Email ou senha incorretos');
    }
  }

  const navigateToRegister = () => {
    router.push('/auth/register')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="mb-6 text-2xl font-bold">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-2">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="p-2 rounded bg-blue-500 text-white hover:bg-blue-400">
            Entrar
          </button>
        </form>
        <button onClick={navigateToRegister} className="mt-4 p-2 rounded text-green-600">
          Não tem uma conta? Cadastre-se
        </button>
      </div>
    </div>
  )
}
