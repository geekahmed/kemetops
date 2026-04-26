import { Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="reveal">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Who Is Behind KemetOps
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-3xl">
            Engineering depth, built for the Egyptian ecosystem.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            KemetOps was founded by a CKA-certified Kubernetes administrator and
            AWS Solutions Architect with deep hands-on experience in DevOps and
            cloud-native infrastructure. We are based in Egypt and built
            specifically for the Egyptian startup and SME ecosystem — because
            world-class DevOps practices should not be reserved for companies
            with large engineering budgets.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 reveal">
          {[
            { title: "CKA", body: "Certified Kubernetes Administrator" },
            { title: "AWS", body: "Certified Solutions Architect" },
          ].map((c) => (
            <div
              key={c.title}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-gold/40 transition"
            >
              <div className="size-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Award size={22} className="text-gold" />
              </div>
              <div>
                <p className="font-bold font-display">{c.title}</p>
                <p className="text-sm text-muted-foreground">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
