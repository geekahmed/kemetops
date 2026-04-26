export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--navy-deep)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <p className="font-display font-bold text-2xl">
              Kemet<span className="text-gold">Ops</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Build Right. Scale Smart.</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {["Services", "Training", "About", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase() === "contact" ? "cta" : l.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-gold transition"
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="md:text-right">
            <p className="text-sm text-muted-foreground">Based in Egypt · kemetops.com</p>
            <a
              href="mailto:ahmed.moustafa@kemetops.com"
              className="mt-2 inline-block text-sm text-muted-foreground hover:text-gold transition"
            >
              ahmed.moustafa@kemetops.com
            </a>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-6 opacity-40" />
        <p className="text-xs text-muted-foreground text-center">
          © 2026 KemetOps. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
