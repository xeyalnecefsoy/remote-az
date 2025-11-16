import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-800 bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold tracking-tight text-[#14A700]">
          Remote Azerbaijan
        </h1>
        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-[#14A700]"
          >
            Home
          </Link>
          <Link
            href="/vacancies"
            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-[#14A700]"
          >
            Vacancies
          </Link>
          <Link
            href="/companies"
            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-[#14A700]"
          >
            Companies
          </Link>
          <Link
            href="/categories"
            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-[#14A700]"
          >
            Categories
          </Link>
          <Link
            href="/profile"
            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-[#14A700]"
          >
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}
