export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-zinc-800 bg-black text-zinc-400">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm">
        © {year} Remote Azerbaijan. All rights reserved.
      </div>
    </footer>
  );
}
