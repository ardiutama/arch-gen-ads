export default function Footer() {
  const year = 2026;

  return (
    <footer id="footer" className="border-t border-border-subtle px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold text-sm font-bold text-bg-primary">
              AG
            </div>
            <span className="text-lg font-semibold tracking-tight text-text-primary">
              Arch-Gen
            </span>
          </div>

          <div className="flex gap-6 text-sm text-text-secondary">
            <a href="#hero" className="transition-colors hover:text-brand-gold">
              Tentang
            </a>
            <a
              href="#features"
              className="transition-colors hover:text-brand-gold"
            >
              Fitur
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:text-brand-gold"
            >
              Harga
            </a>
          </div>

          <p className="text-sm text-text-secondary">
            &copy; {year} Arch-Gen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
