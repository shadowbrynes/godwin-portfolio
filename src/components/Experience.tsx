export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Experience
      </p>

      <h2 className="mt-4 text-3xl font-bold text-white">
        Professional Experience
      </h2>

      <div className="mt-10 space-y-6">
        <div className="rounded-2xl border border-white/10 p-6">
          <h3 className="text-xl font-semibold text-white">
            AI & Cloud Automation Consultant
          </h3>

          <p className="text-slate-400 text-sm">
            Freelance • Nov 2022 – Jan 2024
          </p>

          <ul className="mt-4 space-y-2 text-slate-300">
            <li>• Built RAG-based AI systems using LangChain and vector databases</li>
            <li>• Developed Telegram & WhatsApp AI chatbots with LLM integration</li>
            <li>• Integrated ElevenLabs voice AI for conversational assistants</li>
            <li>• Automated infrastructure using Terraform (60% faster deployments)</li>
            <li>• Implemented CI/CD pipelines with Docker, Jenkins & Kubernetes</li>
            <li>• Reduced AWS infrastructure cost by 25%</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
