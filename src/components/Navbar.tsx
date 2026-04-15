import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold text-white tracking-tight">
          Godwin Umoh
        </a>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-cyan-300">
            About
          </a>
          <a href="#projects" className="transition hover:text-cyan-300">
            Projects
          </a>
          <a href="#experience" className="transition hover:text-cyan-300">
            Experience
          </a>
          <a href="#contact" className="transition hover:text-cyan-300">
            Contact
          </a>
        </nav>

        <button
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-slate-300">
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a href="#experience" onClick={() => setOpen(false)}>
              Experience
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
