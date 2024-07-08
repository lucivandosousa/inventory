import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchItems } from '@/services/api';

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (error) {
        console.error('Erro ao buscar itens:', error);
      }
    };

    getItems();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <nav className="w-64 h-screen p-6 bg-blue-800 text-white">
        <h1 className="mb-8 text-2xl font-bold">Dashboard</h1>
        <ul className="list-none">
          <li className="mb-4">
            <Link href="/" legacyBehavior>
              <a className="block p-2 rounded hover:bg-blue-700">Início</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/items" legacyBehavior>
              <a className="block p-2 rounded hover:bg-blue-700">Listagem de Itens</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/items/create" legacyBehavior>
              <a className="block p-2 rounded hover:bg-blue-700">Cadastro de Itens</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/auth" legacyBehavior>
              <a className="block p-2 rounded hover:bg-blue-700">Sair</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-6">
        <h2 className="mb-6 text-3xl font-bold">Listagem de Itens</h2>
        {items.length === 0 ? (
          <p>Nenhum item encontrado.</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Nome</th>
                <th className="px-4 py-2 border-b">Descrição</th>
                <th className="px-4 py-2 border-b">Quantidade</th>
                <th className="px-4 py-2 border-b">Categoria</th>
                <th className="px-4 py-2 border-b">Imagem</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b">{item.description}</td>
                  <td className="px-4 py-2 border-b">{item.quantity}</td>
                  <td className="px-4 py-2 border-b">{item.category}</td>
                  <td className="px-4 py-2 border-b">
                    <img src={item.image} alt={item.name} className="h-10 w-10 object-cover" />
                  </td>
                  <td className="px-4 py-2 border-b">
                    <Link href={`/items/${item.id}`} legacyBehavior>
                      <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Ver</a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  )
}

