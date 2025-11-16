"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import JobCard from "@/components/JobCard";

type Job = {
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Freelance";
  category: string;
};

const JOBS: Job[] = [
  { title: "Frontend Developer", company: "Caspian Tech", location: "Remote", type: "Full-time", category: "Engineering" },
  { title: "UI/UX Designer", company: "Baku Design Studio", location: "Remote", type: "Freelance", category: "Design" },
  { title: "Backend Engineer", company: "Shirvan Systems", location: "Remote", type: "Full-time", category: "Engineering" },
  { title: "Product Manager", company: "Absheron Labs", location: "Remote", type: "Full-time", category: "Product" },
  { title: "Data Analyst", company: "Caucasus Data", location: "Remote", type: "Freelance", category: "Data" },
];

const TYPES = ["All", "Full-time", "Freelance"] as const;
const CATEGORIES = ["All", "Engineering", "Design", "Product", "Marketing", "Data", "DevOps"] as const;

export default function VacanciesPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [query, setQuery] = useState("");
  const [type, setType] = useState<typeof TYPES[number]>("All");
  const [category, setCategory] = useState<typeof CATEGORIES[number]>("All");

  useEffect(() => {
    if (initialCategory && (CATEGORIES as readonly string[]).includes(initialCategory)) {
      setCategory(initialCategory as typeof CATEGORIES[number]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return JOBS.filter((j) => {
      const matchesQuery = !q || [j.title, j.company, j.location, j.type, j.category].some((f) => f.toLowerCase().includes(q));
      const matchesType = type === "All" || j.type === type;
      const matchesCategory = category === "All" || j.category === category;
      return matchesQuery && matchesType && matchesCategory;
    });
  }, [query, type, category]);

  return (
    <section className="space-y-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-white">Vacancies</h1>
          <p className="mt-1 text-sm text-zinc-400">Search and filter remote roles.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, company, or keyword..."
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-white placeholder-zinc-500 outline-none focus:border-[#14A700]"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value as typeof TYPES[number])}
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-2.5 text-white outline-none focus:border-[#14A700]"
        >
          {TYPES.map((t) => (
            <option key={t} value={t} className="bg-black">
              {t}
            </option>
          ))}
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as typeof CATEGORIES[number])}
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-2.5 text-white outline-none focus:border-[#14A700]"
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c} className="bg-black">
              {c}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            setQuery("");
            setType("All");
            setCategory("All");
          }}
          className="rounded-md border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#14A700]/60"
        >
          Reset Filters
        </button>
      </div>

      <div>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold text-white">Results</h2>
          <span className="text-sm text-zinc-500">{filtered.length} roles</span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((job) => (
            <JobCard
              key={`${job.title}-${job.company}`}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
