import { Blocks, Cloud, GraduationCap, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  badge?: string;
};

const services: Service[] = [
  {
    icon: Blocks,
    eyebrow: "DevOps Architecture Consulting",
    title: "Architect for Scale",
    body: "We help startups and MVP-stage companies set up CI/CD pipelines, Kubernetes infrastructure, and cloud environments using best practices — so your stack can grow with you without painful rewrites.",
  },
  {
    icon: Cloud,
    eyebrow: "Managed Cloud Infrastructure",
    title: "We Handle the Cloud. You Build the Product.",
    body: "Skip the infrastructure headache. We manage your AWS environment, handle the complexity, and send you one consolidated invoice — so your team stays focused on shipping.",
    badge: "Coming Soon",
  },
  {
    icon: GraduationCap,
    eyebrow: "DevOps Diploma Program",
    title: "Launch Your DevOps Career",
    body: "A 6-month hands-on diploma program for junior developers and career-switchers who want to enter the DevOps, DevSecOps, and cloud field with real, practical skills.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Three ways we help you ship with confidence.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, eyebrow, title, body, badge }, i) => (
            <article
              key={title}
              className="group relative flex flex-col p-8 rounded-xl bg-card border border-border hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {badge && (
                <span className="absolute top-5 right-5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-gold/10 text-gold border border-gold/30">
                  {badge}
                </span>
              )}

              <div className="size-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/15 transition">
                <Icon size={22} className="text-gold" />
              </div>

              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                {eyebrow}
              </p>
              <h3 className="text-xl font-bold mb-3 leading-tight">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {body}
              </p>

              <a
                href="#cta"
                className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-gold group-hover:gap-2.5 transition-all"
              >
                Learn more <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
