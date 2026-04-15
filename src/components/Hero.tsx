import profileImg from "../assets/godwin.png";
import cvFile from "../assets/Godwin_Umoh_CV.pdf";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-36 pb-28 grid md:grid-cols-2 gap-10 items-center">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      {/* LEFT CONTENT */}
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Godwin Umoh
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">
          AI Automation Engineer <br />
          <span className="text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">
            DevOps Architect
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I build LLM-powered systems, automate workflows, and deploy scalable
          cloud infrastructure for modern businesses.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
          >
            View Projects
          </a>

          <a
            href="mailto:naijajournal@gmail.com"
            className="rounded-xl border border-white/20 px-6 py-3 text-white transition duration-300 hover:scale-105 hover:bg-white/10"
          >
            Contact Me
          </a>

          <a
            href={cvFile}
            download="Godwin_Umoh_CV.pdf"
            className="rounded-xl border border-cyan-400/30 px-6 py-3 text-cyan-300 transition duration-300 hover:scale-105 hover:bg-cyan-400/10"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <img
          src={profileImg}
          alt="Godwin Umoh"
          className="w-72 h-72 object-cover rounded-full border border-cyan-400/40 shadow-[0_0_60px_rgba(34,211,238,0.25)] transition duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}
