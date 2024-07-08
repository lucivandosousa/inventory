import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchItem, deleteItem } from '../../services/api';
import Link from 'next/link';

export default function ItemDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id) {
      const getItem = async () => {
        try {
          const data = await fetchItem(id);
          setItem(data);
        } catch (error) {
          console.error('Erro ao buscar item:', error);
        }
      };

      getItem();
    }
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteItem(id);
      router.push('/items');
    } catch (error) {
      console.error('Erro ao excluir item:', error);
    }
  };

  if (!item) {
    return <p>Carregando...</p>;
  }

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
        <h2 className="mb-6 text-3xl font-bold">Detalhes do Item</h2>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-2xl font-bold mb-4">{item.name}</h3>
          <p className="mb-4"><strong>Descrição:</strong> {item.description}</p>
          <p className="mb-4"><strong>Quantidade:</strong> {item.quantity}</p>
          <p className="mb-4"><strong>Categoria:</strong> {item.category}</p>
          <img src={item.image} alt={item.name} className="h-32 w-32 object-cover mb-4" />
          <div className="flex space-x-4">
            <Link href={`/items/edit/${item.id}`} legacyBehavior>
              <a className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Editar</a>
            </Link>
            <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Excluir
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

