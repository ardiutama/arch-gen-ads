import {
  Grid3X3,
  Eye,
  Bot,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: Grid3X3,
    title: "Precision Specifications Multi-Panel",
    description:
      "Hasilkan spesifikasi teknis multi-panel secara otomatis — denah, tampak, potongan — dengan presisi arsitektural yang konsisten.",
  },
  {
    icon: Eye,
    title: '"Raw SketchUp Look" Controller',
    description:
      "Kendalikan tampilan mentah SketchUp tanpa bias cahaya sebagai fondasi visualisasi profesional yang akurat dan objektif.",
  },
  {
    icon: Bot,
    title: "Robo-Prompt Copilot",
    description:
      "Dua mode prompt — Prompt Foto untuk referensi visual, Prompt Sketsa untuk ide konseptual — didukung AI cerdas.",
  },
  {
    icon: FileText,
    title: "Natural Language Generation",
    description:
      "Tulis spesifikasi blueprint cukup dengan bahasa alami. Arch-Gen mengubahnya menjadi dokumen teknis arsitektural yang siap pakai.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Fitur <span className="text-brand-gold">Unggulan</span>
          </h2>
          <p className="mt-4 text-text-secondary">
            Tools cerdas yang mempercepat alur kerja arsitektur Anda.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Card 1 - spans 2 rows on desktop */}
          <div className="group relative col-span-1 row-span-2 overflow-hidden rounded-xl border border-border-subtle bg-bg-card p-8 transition-all hover:border-brand-gold/30 hover:shadow-lg hover:shadow-brand-gold/5 sm:p-10">
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold/10">
                  <Grid3X3 className="h-6 w-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-semibold">
                  Precision Specifications Multi-Panel
                </h3>
                <p className="leading-relaxed text-text-secondary">
                  Hasilkan spesifikasi teknis multi-panel secara otomatis —
                  denah, tampak, potongan — dengan presisi arsitektural yang
                  konsisten.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group overflow-hidden rounded-xl border border-border-subtle bg-bg-card p-8 transition-all hover:border-brand-gold/30 hover:shadow-lg hover:shadow-brand-gold/5">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold/10">
                <Eye className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold">
                &ldquo;Raw SketchUp Look&rdquo; Controller
              </h3>
              <p className="leading-relaxed text-text-secondary">
                Kendalikan tampilan mentah SketchUp tanpa bias cahaya sebagai
                fondasi visualisasi profesional yang akurat dan objektif.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group overflow-hidden rounded-xl border border-border-subtle bg-bg-card p-8 transition-all hover:border-brand-gold/30 hover:shadow-lg hover:shadow-brand-gold/5">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold/10">
                <Bot className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="text-lg font-semibold">Robo-Prompt Copilot</h3>
              <p className="leading-relaxed text-text-secondary">
                Dua mode prompt — Prompt Foto untuk referensi visual, Prompt
                Sketsa untuk ide konseptual — didukung AI cerdas.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group col-span-1 overflow-hidden rounded-xl border border-border-subtle bg-bg-card p-8 transition-all hover:border-brand-gold/30 hover:shadow-lg hover:shadow-brand-gold/5 sm:col-span-2">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10">
                <FileText className="h-6 w-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Natural Language Generation
                </h3>
                <p className="text-text-secondary">
                  Tulis spesifikasi blueprint cukup dengan bahasa alami. Arch-Gen
                  mengubahnya menjadi dokumen teknis arsitektural yang siap
                  pakai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
