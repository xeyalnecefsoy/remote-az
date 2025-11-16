"use client";

import { Suspense } from "react";
import VacanciesContent from "./VacanciesContent";

export default function VacanciesPage() {
  return (
    <Suspense
      fallback={
        <section className="space-y-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-white">Vacancies</h1>
              <p className="mt-1 text-sm text-zinc-400">Loading...</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="h-10 animate-pulse rounded-lg bg-zinc-800/50"></div>
            <div className="h-10 animate-pulse rounded-lg bg-zinc-800/50"></div>
            <div className="h-10 animate-pulse rounded-lg bg-zinc-800/50"></div>
            <div className="h-10 animate-pulse rounded-lg bg-zinc-800/50"></div>
          </div>
        </section>
      }
    >
      <VacanciesContent />
    </Suspense>
  );
}
