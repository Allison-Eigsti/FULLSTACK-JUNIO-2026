import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900"
        >
          MyApp
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            About
          </Link>

          <Link 
            href='/posts' 
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Posts
            </Link>
        </nav>
      </div>
    </header>
  );
}
