"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Company = {
  name: string;
  industry: string;
  size: string;
  jobs: number;
  logo: string;
};

const COMPANIES: Company[] = [
  { name: "Caspian Tech", industry: "Software", size: "51-200", jobs: 3, logo: "/logos/caspian-tech.svg" },
  { name: "Baku Design Studio", industry: "Design", size: "11-50", jobs: 2, logo: "/logos/baku-design-studio.svg" },
  { name: "Shirvan Systems", industry: "Software", size: "201-500", jobs: 4, logo: "/logos/shirvan-systems.svg" },
  { name: "Absheron Labs", industry: "Product", size: "51-200", jobs: 1, logo: "/logos/absheron-labs.svg" },
  { name: "Caucasus Data", industry: "Data", size: "11-50", jobs: 2, logo: "/logos/caspian-tech.svg" },
];

const INDUSTRIES = ["All", "Software", "Design", "Product", "Data"] as const;

export default function CompaniesPage() {
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState<typeof INDUSTRIES[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COMPANIES.filter((c) => {
      const matchesQuery = !q || [c.name, c.industry, c.size].some((f) => f.toLowerCase().includes(q));
      const matchesIndustry = industry === "All" || c.industry === industry;
      return matchesQuery && matchesIndustry;
    });
  }, [query, industry]);

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Companies</h1>
        <p className="mt-1 text-sm text-zinc-400">Discover teams hiring remotely in Azerbaijan.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by company, industry, or size..."
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-white placeholder-zinc-500 outline-none focus:border-[#14A700]"
        />
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value as typeof INDUSTRIES[number])}
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-2.5 text-white outline-none focus:border-[#14A700]"
        >
          {INDUSTRIES.map((i) => (
            <option key={i} value={i} className="bg-black">
              {i}
            </option>
          ))}
        </select>
        <div className="sm:col-span-2 flex items-center justify-end">
          <button
            onClick={() => {
              setQuery("");
              setIndustry("All");
            }}
            className="rounded-md border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#14A700]/60"
          >
            Reset Filters
          </button>
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-white">Results</h2>
          <span className="text-sm text-zinc-500">{filtered.length} companies</span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <div key={c.name} className="rounded-xl border border-gray-700 bg-gray-800 p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-md border border-zinc-700 bg-black">
                    <Image src={c.logo} alt={`${c.name} logo`} width={40} height={40} className="h-10 w-10 object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{c.name}</h3>
                    <p className="text-xs text-zinc-400">{c.industry} • {c.size}</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#14A700] px-3 py-1 text-xs font-medium text-white">{c.jobs} jobs</span>
              </div>
              <div className="mt-3">
                <Link
                  href={`/vacancies?category=${encodeURIComponent(c.industry)}`}
                  className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-xs font-semibold text-white transition hover:border-[#14A700]/60"
                >
                  View Vacancies
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
