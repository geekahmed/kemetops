import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 topo-grid opacity-40" aria-hidden />
      <div className="absolute inset-0 topo-radial" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium tracking-wide uppercase mb-8">
            <span className="size-1.5 rounded-full bg-gold" />
            Build Right. Scale Smart.
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
            DevOps & Cloud Infrastructure —{" "}
            <span className="text-gold">Built for Egyptian Startups</span>{" "}
            That Plan to Scale
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            KemetOps helps early-stage and growing companies architect their
            infrastructure the right way from day one — so growth never becomes a
            technical crisis.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-gold text-gold-foreground font-semibold hover:brightness-110 transition shadow-glow-gold"
            >
              Book a Free Discovery Call
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-border text-foreground font-semibold hover:border-gold/50 hover:bg-card transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
