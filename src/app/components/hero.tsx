export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,163,115,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,163,115,0.05),transparent_50%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-12 lg:flex-row lg:items-center">
        {/* Left column */}
        <div className="flex flex-1 flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-gold">
            Configuration &amp; Prompt Engineering Copilot
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Dari Ide ke{" "}
            <span className="text-brand-gold">Raw SketchUp Look</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Ubah ide desain menjadi visual Raw SketchUp Look dalam hitungan
            menit. Hasilnya dapat langsung digunakan sebagai dasar AI Rendering
            untuk menghasilkan visual yang lebih akurat, konsisten, dan sesuai
            dengan konsep yang Anda inginkan.
          </p>

          <p className="max-w-xl text-sm leading-relaxed text-text-secondary">
            Tidak perlu lagi menghabiskan waktu mencari referensi di Pinterest,
            menyimpan ratusan gambar, atau meniru karya orang lain. Mulailah
            dari ide Anda sendiri, kembangkan menjadi bentuk visual yang jelas,
            lalu lanjutkan ke proses AI Rendering dengan workflow yang lebih
            cepat dan efisien.
          </p>

          <p className="text-sm font-semibold tracking-wide text-brand-gold">
            Create Your Own Concept. Render with AI.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://archgen.indovma.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-gold px-8 text-sm font-semibold text-bg-primary transition-all hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/25"
            >
              Mulai Free Trial 1 Hari
            </a>
            <a
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border-subtle px-8 text-sm font-semibold text-text-primary transition-all hover:border-brand-gold hover:text-brand-gold"
            >
              Beli Lifetime Access
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="w-full shrink-0 lg:w-auto lg:max-w-sm">
          <div className="rounded-xl border border-border-subtle bg-bg-card/80 p-6 backdrop-blur-sm">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Apa yang Anda Dapatkan?
            </p>
            <div className="space-y-3">
              {[
                "Mengubah ide menjadi visual Raw SketchUp Look secara instan",
                "Membangun konsep desain yang lebih orisinal",
                "Mengurangi ketergantungan pada referensi eksternal",
                "Mempercepat workflow desain dan visualisasi",
                "Menjadi fondasi yang ideal untuk AI Rendering",
                "Belajar dan mengeksplorasi proses AI Rendering dengan lebih mudah",
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="mt-0.5 shrink-0 text-brand-gold">✓</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-text-secondary"
        >
          <path d="M7 13L12 18L17 13" />
          <path d="M7 6L12 11L17 6" />
        </svg>
      </div>
    </section>
  );
}
