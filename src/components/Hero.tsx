import profileImg from "../assets/godwin.png";
import cvFile from "../assets/Godwin_Umoh_CV.pdf";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-32 pb-24 md:grid-cols-2">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Godwin Umoh
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">
          AI Automation Engineer <br />
          <span className="text-cyan-300">DevOps Architect</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I build LLM-powered systems, automate workflows, and deploy scalable
          cloud infrastructure for modern businesses.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.03]"
          >
            View Projects
          </a>

          <a
            href="mailto:naijajournal@gmail.com"
            className="rounded-xl border border-white/20 px-6 py-3 text-white transition hover:scale-[1.03] hover:bg-white/5"
          >
            Contact Me
          </a>

          <a
            href={cvFile}
            download="Godwin_Umoh_CV.pdf"
            className="rounded-xl border border-cyan-400/30 px-6 py-3 text-cyan-300 transition hover:scale-[1.03] hover:bg-cyan-400/10"
          >
            Download CV
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <img
          src={profileImg}
          alt="Godwin Umoh"
          className="w-72 h-72 object-cover rounded-full border border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.2)]"
        />
      </motion.div>

    </section>
  );
}
