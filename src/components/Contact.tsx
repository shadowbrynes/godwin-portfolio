export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Contact
      </p>

      <h2 className="mt-4 text-3xl font-bold text-white">
        Let’s build something powerful
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        I’m open to DevOps, cloud, and AI automation opportunities, freelance
        projects, and technical collaborations.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <a
          href="mailto:naijajournal@gmail.com"
          className="rounded-xl border border-white/10 p-5 text-slate-300 transition hover:border-cyan-400 hover:text-white hover:bg-white/5"
        >
          Email
          <div className="mt-2 text-white">naijajournal@gmail.com</div>
        </a>

        <a
          href="https://www.linkedin.com/in/godwin-umoh"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/10 p-5 text-slate-300 transition hover:border-cyan-400 hover:text-white hover:bg-white/5"
        >
          LinkedIn
          <div className="mt-2 text-white">godwin-umoh</div>
        </a>

        <a
          href="https://github.com/shadowbrynes"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/10 p-5 text-slate-300 transition hover:border-cyan-400 hover:text-white hover:bg-white/5"
        >
          GitHub
          <div className="mt-2 text-white">shadowbrynes</div>
        </a>
      </div>
    </section>
  );
}
