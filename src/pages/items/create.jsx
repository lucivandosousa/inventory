import { useState } from 'react';
import { useRouter } from 'next/router';
import { createItem } from '../../services/api';
import MenuNavigation from '@/components/MenuNavigation';

export default function CreateItem() {
  const router = useRouter();
  const [item, setItem] = useState({
    name: '',
    description: '',
    quantity: 0,
    category: '',
    image: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setItem((prevItem) => ({
      ...prevItem,
      [name]: name === 'quantity' ? Number(value) : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createItem(item)
      router.push('/items')
    } catch (error) {
      console.error('Erro ao criar item:', error)
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <MenuNavigation />
      <main className="flex-1 p-6">
        <h2 className="mb-6 text-3xl font-bold">Cadastro de Item</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={item.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-bold mb-2">Descrição</label>
            <input
              type="text"
              id="description"
              name="description"
              value={item.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-bold mb-2">Quantidade</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={item.quantity}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-bold mb-2">Categoria</label>
            <input
              type="text"
              id="category"
              name="category"
              value={item.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-bold mb-2">URL da Imagem</label>
            <input
              type="text"
              id="image"
              name="image"
              value={item.image}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="p-2 rounded bg-blue-500 text-white hover:bg-blue-400">
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  )
}


