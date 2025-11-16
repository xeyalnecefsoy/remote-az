export default function ProfilePage() {
  return (
    <section className="space-y-10">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-b from-black via-zinc-950 to-black p-8">
        <div className="pointer-events-none absolute -top-20 left-10 h-48 w-48 rounded-full bg-[#14A700]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-[#14A700]/10 blur-2xl" />
        <div className="relative">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Your Profile</h1>
          <p className="mt-2 text-zinc-400">Manage your information, preferences, and saved jobs.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="rounded-xl border border-gray-700 bg-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white">Personal Information</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-white placeholder-zinc-500 focus:border-[#14A700] outline-none" placeholder="Full Name" />
              <input className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-white placeholder-zinc-500 focus:border-[#14A700] outline-none" placeholder="Email" />
              <input className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-white placeholder-zinc-500 focus:border-[#14A700] outline-none" placeholder="Location" />
              <input className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-white placeholder-zinc-500 focus:border-[#14A700] outline-none" placeholder="Website / Portfolio" />
            </div>
            <div className="mt-4 flex justify-end">
              <button className="rounded-md bg-[#14A700] px-4 py-2 text-sm font-semibold text-white">Save</button>
            </div>
          </section>

          <section className="rounded-xl border border-gray-700 bg-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white">Experience & Career Preferences</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-white placeholder-zinc-500 focus:border-[#14A700] outline-none" placeholder="Current Role" />
              <input className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-white placeholder-zinc-500 focus:border-[#14A700] outline-none" placeholder="Years of Experience" />
              <input className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-white placeholder-zinc-500 focus:border-[#14A700] outline-none" placeholder="Preferred Job Titles" />
              <input className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-white placeholder-zinc-500 focus:border-[#14A700] outline-none" placeholder="Preferred Tech Stack" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-sm text-zinc-300">Open to:</span>
              <span className="rounded-full bg-[#14A700] px-3 py-1 text-xs font-medium text-white">Full-time</span>
              <span className="rounded-full bg-[#14A700] px-3 py-1 text-xs font-medium text-white">Freelance</span>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="rounded-md bg-[#14A700] px-4 py-2 text-sm font-semibold text-white">Save</button>
            </div>
          </section>

          <section className="rounded-xl border border-gray-700 bg-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white">Security</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input type="password" className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-white placeholder-zinc-500 focus:border-[#14A700] outline-none" placeholder="Current Password" />
              <input type="password" className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-white placeholder-zinc-500 focus:border-[#14A700] outline-none" placeholder="New Password" />
            </div>
            <div className="mt-4 flex justify-end">
              <button className="rounded-md bg-[#14A700] px-4 py-2 text-sm font-semibold text-white">Update</button>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-xl border border-gray-700 bg-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white">Saved / Bookmarked Jobs</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li className="flex items-center justify-between rounded-md border border-zinc-700 bg-zinc-900/60 px-3 py-2">
                <span>Frontend Developer — Caspian Tech</span>
                <button className="rounded-md bg-[#14A700] px-3 py-1 text-xs font-semibold text-white">View</button>
              </li>
              <li className="flex items-center justify-between rounded-md border border-zinc-700 bg-zinc-900/60 px-3 py-2">
                <span>UI/UX Designer — Baku Design Studio</span>
                <button className="rounded-md bg-[#14A700] px-3 py-1 text-xs font-semibold text-white">View</button>
              </li>
            </ul>
          </section>

          <section className="rounded-xl border border-gray-700 bg-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white">Notification Preferences</h2>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              <label className="flex items-center justify-between gap-3">
                <span>New job alerts</span>
                <input type="checkbox" className="h-4 w-4 accent-[#14A700]" defaultChecked />
              </label>
              <label className="flex items-center justify-between gap-3">
                <span>Weekly newsletter</span>
                <input type="checkbox" className="h-4 w-4 accent-[#14A700]" />
              </label>
              <label className="flex items-center justify-between gap-3">
                <span>Important updates</span>
                <input type="checkbox" className="h-4 w-4 accent-[#14A700]" defaultChecked />
              </label>
            </div>
          </section>
        </aside>
      </div>
    </section>
  );
}
