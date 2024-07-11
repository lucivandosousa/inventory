import Link from "next/link";

export default function MenuNavigation() {
  return (
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
            <a
              className="block p-2 rounded hover:bg-blue-700"
              onClick={() => localStorage.removeItem("token")}
            >
              Sair
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
