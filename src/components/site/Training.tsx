import { FlaskConical, Layers, Users, ArrowRight } from "lucide-react";

const features = [
  { icon: FlaskConical, label: "Hands-on labs with real cloud environments" },
  { icon: Layers, label: "DevOps, DevSecOps, Kubernetes, and AWS" },
  { icon: Users, label: "Cohort-based with live weekly sessions" },
];

export function Training() {
  return (
    <section id="training" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--navy-deep)]" aria-hidden />
      <div className="absolute inset-0 topo-grid opacity-30" aria-hidden />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in oklab, var(--gold) 8%, transparent), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            KemetOps DevOps Diploma
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            A 6-month program for the next generation of Egyptian DevOps engineers.
          </h2>
          <div className="gold-divider w-32 mx-auto my-8" />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="p-6 rounded-xl border border-gold/20 bg-card/60 backdrop-blur hover:border-gold/50 transition reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="size-11 rounded-lg bg-gold/15 flex items-center justify-center mb-4">
                <Icon size={20} className="text-gold" />
              </div>
              <p className="font-medium leading-snug">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center reveal">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gold text-gold-foreground font-semibold hover:brightness-110 transition"
          >
            Join the Waitlist <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
