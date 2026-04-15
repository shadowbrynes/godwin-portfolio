import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold text-white">
          Godwin Umoh
        </a>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>

        <button
          className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
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
