import { useState } from 'react';
import { useRouter } from 'next/router';
import { registerUser } from '../../services/api';

export default function Register() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ email, password })
      router.push('/auth')
    } catch (error) {
      setError('Email já registrado')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="mb-6 text-2xl font-bold">Registrar</h2>
        <form onSubmit={handleRegister}>
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
          <div className="flex space-x-4">
            <button type="submit" className="p-2 rounded bg-blue-500 text-white hover:bg-blue-400">
              Registrar
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => router.push('/auth')}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

