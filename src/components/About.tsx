import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          AI Automation Engineer building production-ready systems
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I specialize in building intelligent systems using LLMs, RAG, and
          automation workflows. My work focuses on deploying scalable AI
          solutions using cloud infrastructure, DevOps practices, and modern
          tooling.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "LangChain / RAG",
            "OpenAI API",
            "AWS / Cloud",
            "Docker / Kubernetes",
            "Terraform / CI/CD",
            "Python Automation",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-white hover:bg-white/10 shadow-[0_0_20px_rgba(34,211,238,0.06)]"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
