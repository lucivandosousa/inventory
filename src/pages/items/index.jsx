import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchItems } from '@/services/api';
import MenuNavigation from '@/components/MenuNavigation';

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
      <MenuNavigation />
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
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2 border-b text-center">{item.name}</td>
                  <td className="px-4 py-2 border-b text-center">{item.description}</td>
                  <td className="px-4 py-2 border-b text-center">{item.quantity}</td>
                  <td className="px-4 py-2 border-b text-center">{item.category}</td>
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

