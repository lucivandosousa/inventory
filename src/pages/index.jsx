import Link from "next/link";

export default function Home() {
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
        <h2 className="mb-6 text-3xl font-bold">Bem-vindo ao Inventário</h2>
        <p>Selecione uma opção no menu para começar.</p>
      </main>
    </div>
  );
}
