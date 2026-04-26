import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { SocialProof } from "@/components/site/SocialProof";
import { Services } from "@/components/site/Services";
import { HowWeWork } from "@/components/site/HowWeWork";
import { About } from "@/components/site/About";
import { Training } from "@/components/site/Training";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "KemetOps — DevOps & Cloud Consulting for Egyptian Startups" },
      {
        name: "description",
        content:
          "KemetOps helps Egyptian startups architect DevOps, DevSecOps, and cloud infrastructure that scales. CKA & AWS certified. Build Right. Scale Smart.",
      },
      { property: "og:title", content: "KemetOps — Build Right. Scale Smart." },
      {
        property: "og:description",
        content:
          "DevOps, DevSecOps, and cloud consulting built for the Egyptian startup ecosystem.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <HowWeWork />
        <About />
        <Training />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
