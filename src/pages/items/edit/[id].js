// src/pages/items/edit/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchItem, updateItem } from '../../../services/api';
import Link from 'next/link';

export default function EditItem() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({
    name: '',
    description: '',
    quantity: 0,
    category: '',
    image: ''
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: name === 'quantity' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateItem(id, item);
      router.push(`/items/${id}`);
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
    }
  };

  if (!item) return <p>Carregando...</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <nav className="w-64 h-screen p-6 bg-blue-800 text-white">
        <h1 className="mb-8 text-2xl font-bold">Dashboard</h1>
        <ul className="list-none">
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
        <h2 className="mb-6 text-3xl font-bold">Editar Item</h2>
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
            Salvar
          </button>
        </form>
      </main>
    </div>
  );
};

