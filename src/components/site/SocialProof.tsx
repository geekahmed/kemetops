import { ShieldCheck, Cloud, MapPin } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "CKA Certified" },
  { icon: Cloud, label: "AWS Solutions Architect" },
  { icon: MapPin, label: "Based in Egypt. Built for Egypt." },
];

export function SocialProof() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 reveal">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-6">
          Trusted by startups, MVPs, and engineering teams across Egypt
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 px-5 py-4 rounded-lg bg-background/40 border border-border"
            >
              <Icon size={18} className="text-gold" />
              <span className="text-sm md:text-base font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
