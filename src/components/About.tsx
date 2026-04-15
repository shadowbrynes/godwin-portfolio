export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        About Me
      </p>

      <h2 className="mt-4 text-3xl font-bold text-white">
        AI Automation Engineer building production-ready systems
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        I specialize in building intelligent systems using LLMs, RAG, and
        automation workflows. My work focuses on deploying scalable AI solutions
        using cloud infrastructure, DevOps practices, and modern tooling.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 p-4 text-slate-300 transition hover:border-cyan-400 hover:text-white hover:bg-white/5">
          LangChain / RAG
        </div>
        <div className="rounded-xl border border-white/10 p-4 text-slate-300 transition hover:border-cyan-400 hover:text-white hover:bg-white/5">
          OpenAI API
        </div>
        <div className="rounded-xl border border-white/10 p-4 text-slate-300 transition hover:border-cyan-400 hover:text-white hover:bg-white/5">
          AWS / Cloud
        </div>
        <div className="rounded-xl border border-white/10 p-4 text-slate-300 transition hover:border-cyan-400 hover:text-white hover:bg-white/5">
          Docker / Kubernetes
        </div>
        <div className="rounded-xl border border-white/10 p-4 text-slate-300 transition hover:border-cyan-400 hover:text-white hover:bg-white/5">
          Terraform / CI/CD
        </div>
        <div className="rounded-xl border border-white/10 p-4 text-slate-300 transition hover:border-cyan-400 hover:text-white hover:bg-white/5">
          Python Automation
        </div>
      </div>
    </section>
  );
}
