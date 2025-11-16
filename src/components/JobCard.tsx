type JobCardProps = {
  title: string;
  company: string;
  location?: string;
  type?: string;
};

export default function JobCard({ title, company, location = "Remote", type = "Full-time" }: JobCardProps) {
  return (
    <div className="rounded-xl border border-gray-700 bg-gray-800 p-5 shadow-sm transition hover:shadow">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="rounded-full bg-[#14A700] px-3 py-1 text-xs font-medium text-white">{type}</span>
      </div>
      <p className="text-sm text-zinc-300">{company}</p>
      <p className="mt-1 text-sm text-zinc-400">{location}</p>
    </div>
  );
}
