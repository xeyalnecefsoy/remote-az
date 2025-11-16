"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Category = {
  name: string;
  description: string;
  count: number;
};

const CATEGORIES: Category[] = [
  { name: "Engineering", description: "Frontend, Backend, Full‑stack, DevOps", count: 14 },
  { name: "Design", description: "Product, UI, UX, Visual", count: 7 },
  { name: "Product", description: "Product Management, Ownership", count: 6 },
  { name: "Marketing", description: "Growth, Content, Performance", count: 5 },
  { name: "Data", description: "Analytics, Science, BI", count: 8 },
  { name: "DevOps", description: "SRE, Infrastructure, Cloud", count: 4 },
];

export default function CategoriesPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATEGORIES;
    return CATEGORIES.filter((c) =>
      [c.name, c.description].some((f) => f.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Categories</h1>
        <p className="mt-1 text-sm text-zinc-400">Browse roles by discipline and quickly jump to open vacancies.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search categories..."
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-white placeholder-zinc-500 outline-none focus:border-[#14A700]"
        />
        <div className="sm:col-span-3 flex items-center justify-end">
          <span className="text-sm text-zinc-500">{filtered.length} categories</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <div key={c.name} className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800 p-6">
            <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-[#14A700]/15 blur-2xl" />
            <div className="relative">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{c.name}</h3>
                <span className="rounded-full bg-[#14A700] px-3 py-1 text-xs font-medium text-white">{c.count} roles</span>
              </div>
              <p className="text-sm text-zinc-300">{c.description}</p>
              <div className="mt-4">
                <Link
                  href={`/vacancies?category=${encodeURIComponent(c.name)}`}
                  className="rounded-md bg-[#14A700] px-3 py-2 text-xs font-semibold text-white"
                >
                  View Vacancies
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
