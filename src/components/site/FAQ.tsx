import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Do you work with very early-stage startups?",
    a: "Yes — in fact, early-stage is the best time to get your infrastructure right. Small fixes now prevent expensive rewrites later.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Most projects start with a discovery call, followed by a fixed-scope proposal. Engagements range from a one-week architecture assessment to multi-month implementation projects.",
  },
  {
    q: "Is the diploma program in Arabic or English?",
    a: "The program is delivered in Arabic with English technical terminology, making it accessible to Egyptian juniors while keeping the content internationally relevant.",
  },
  {
    q: "How do I get started?",
    a: "Book a free 30-minute discovery call using the button below. No commitment required.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14 reveal">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Common Questions</h2>
        </div>

        <div className="space-y-3 reveal">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-xl border border-border bg-background/40 overflow-hidden hover:border-gold/30 transition"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base md:text-lg">{f.q}</span>
                  <Plus
                    size={20}
                    className={`text-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
