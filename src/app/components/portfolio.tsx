const facebookPosts = [
  "https://www.facebook.com/share/p/1BZ2uhzCuC/",
  "https://www.facebook.com/share/p/1ZBFJW2PoW/",
  "https://www.facebook.com/share/p/1SYfcm1mGx/",
  "https://www.facebook.com/share/p/1AazkBgatq/",
  "https://www.facebook.com/share/p/18sxXe2wTX/",
  "https://www.facebook.com/share/p/14i6Mexu1dZ/",
  "https://www.facebook.com/share/p/1HNhyqVxrd/",
  "https://www.facebook.com/share/p/1FGScP16QD/",
  "https://www.facebook.com/share/p/1DfpkE5Pi6/",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Output Visual <span className="text-brand-gold">Arch-Gen</span>
          </h2>
          <p className="mt-4 text-text-secondary">
            Lihat langsung hasil visualisasi arsitektural yang telah dihasilkan oleh Arch-Gen by indovma.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facebookPosts.map((url, i) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border-subtle bg-bg-card transition-all hover:border-brand-gold/40 hover:shadow-lg hover:shadow-brand-gold/5"
            >
              {/* Gradient placeholder */}
              <div
                className="absolute inset-0 opacity-60 transition-opacity group-hover:opacity-80"
                style={{
                  background: `linear-gradient(135deg, 
                    hsl(${(i * 37) % 360}, 25%, 25%), 
                    hsl(${(i * 37 + 60) % 360}, 30%, 35%))`,
                }}
              />

              {/* Card content */}
              <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white/60 transition-colors group-hover:text-brand-gold"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-center text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                  Lihat di Facebook
                </span>
              </div>

              {/* Number badge */}
              <div className="absolute top-3 left-3 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-xs font-bold text-white/80">
                {i + 1}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
