import { motion } from "motion/react";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Experience
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Professional Experience
        </h2>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-cyan-400/40">
          <h3 className="text-xl font-semibold text-white">
            AI & Cloud Automation Consultant
          </h3>

          <p className="text-sm text-slate-400">
            Freelance • Nov 2022 – Jan 2024
          </p>

          <ul className="mt-4 space-y-2 text-slate-300">
            <li>• Built RAG-based AI systems using LangChain</li>
            <li>• Developed Telegram & WhatsApp AI chatbots</li>
            <li>• Integrated ElevenLabs voice AI</li>
            <li>• Automated infrastructure with Terraform</li>
            <li>• Implemented CI/CD pipelines</li>
            <li>• Reduced AWS costs by 25%</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
