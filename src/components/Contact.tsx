import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Let’s build something powerful
        </h2>

        <p className="mt-6 text-slate-300">
          I’m open to DevOps, AI, and cloud opportunities.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <a
            href="mailto:naijajournal@gmail.com"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/40"
          >
            Email
            <div className="mt-2 text-white">
              naijajournal@gmail.com
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/godwin-umoh"
            target="_blank"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/40"
          >
            LinkedIn
            <div className="mt-2 text-white">
              godwin-umoh
            </div>
          </a>

          <a
            href="https://github.com/shadowbrynes"
            target="_blank"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/40"
          >
            GitHub
            <div className="mt-2 text-white">
              shadowbrynes
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
