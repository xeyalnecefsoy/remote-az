"use client";

import { useMemo, useState } from "react";
import JobCard from "@/components/JobCard";

type Job = {
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Freelance";
};

const JOBS: Job[] = [
  { title: "Frontend Developer", company: "Caspian Tech", location: "Remote", type: "Full-time" },
  { title: "UI/UX Designer", company: "Baku Design Studio", location: "Remote", type: "Freelance" },
  { title: "Backend Engineer", company: "Shirvan Systems", location: "Remote", type: "Full-time" },
];

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return JOBS;
    return JOBS.filter((j) =>
      [j.title, j.company, j.location, j.type].some((f) => f.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-b from-black via-zinc-950 to-black p-10">
        {/* Decorative gradients */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#14A700]/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-10 h-56 w-56 rounded-full bg-[#14A700]/15 blur-2xl" />

        <div className="relative flex flex-col items-center gap-5 text-center">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Discover Remote Opportunities in Azerbaijan
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300">
            Curated roles from companies hiring remotely. Search and apply with confidence.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <button className="rounded-md bg-[#14A700] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
              Find Your Next Remote Job
            </button>
            <a
              href="#jobs"
              className="rounded-md border border-zinc-800 bg-zinc-900/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#14A700]/60"
            >
              Browse Listings
            </a>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mx-auto w-full max-w-3xl">
        <label htmlFor="search" className="sr-only">
          Search jobs
        </label>
        <input
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, company, or type..."
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-white placeholder-zinc-500 outline-none ring-0 focus:border-[#14A700] focus:outline-none"
        />
      </div>

      {/* Listings */}
      <div id="jobs">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Latest Jobs</h2>
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
