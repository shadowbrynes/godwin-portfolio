import { motion } from "motion/react";

export default function Projects() {
  const projects = [
    {
      title: "RAG AI Knowledge Assistant",
      desc: "Built a retrieval-augmented system using LangChain and vector databases.",
      tags: ["LangChain", "RAG", "Vector DB"],
    },
    {
      title: "Telegram AI Chatbot",
      desc: "Context-aware chatbot integrated with OpenAI APIs.",
      tags: ["Telegram", "OpenAI", "Automation"],
    },
    {
      title: "WhatsApp AI Support Bot",
      desc: "Automated support using webhook-based AI responses.",
      tags: ["WhatsApp", "Webhooks", "LLM"],
    },
    {
      title: "Voice AI Assistant",
      desc: "Integrated ElevenLabs for voice-enabled AI interaction.",
      tags: ["Voice AI", "ElevenLabs", "Python"],
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Projects
      </p>

      <h2 className="mt-4 text-3xl font-bold text-white">
        Featured Work
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
          >
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>

            <p className="mt-3 text-slate-300">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-lg bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/shadowbrynes"
              target="_blank"
              className="mt-4 inline-block text-cyan-400 hover:underline"
            >
              View Code →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
