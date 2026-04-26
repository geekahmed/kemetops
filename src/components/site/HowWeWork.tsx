const steps = [
  { n: "01", title: "Discovery Call", body: "We learn about your stack, your goals, and your pain points." },
  { n: "02", title: "Tailored Proposal", body: "You get a clear scope, timeline, and fixed price. No surprises." },
  { n: "03", title: "Hands-On Delivery", body: "We build, implement, and document everything properly." },
  { n: "04", title: "Handover & Support", body: "Your team owns it. We stay available." },
];

export function HowWeWork() {
  return (
    <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            A simple, transparent process.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden />

          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative z-10 size-14 rounded-full bg-background border border-gold/40 flex items-center justify-center text-gold font-bold font-display mb-5">
                {s.n}
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
