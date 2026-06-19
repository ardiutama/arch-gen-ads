"use client";

import { Check, Copy } from "lucide-react";

const WHATSAPP_NUMBER = "6281339599155";
const WHATSAPP_MESSAGE = encodeURIComponent(
  `Halo, saya telah transfer Rp 399.000 untuk Arch-Gen Lifetime Access. Berikut bukti transfer: [lampirkan bukti]`
);

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Investasi <span className="text-brand-gold">Sekali</span>, Manfaat
            Selamanya
          </h2>
          <p className="mt-4 text-text-secondary">
            Akses penuh semua fitur Arch-Gen tanpa batasan. Cukup transfer
            manual dan konfirmasi via WhatsApp.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {/* Trial Card */}
          <div className="rounded-xl border border-border-subtle bg-bg-card p-8">
            <h3 className="text-lg font-semibold">Free Trial</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Coba Arch-Gen tanpa risiko
            </p>
            <p className="mt-6">
              <span className="text-4xl font-bold">Gratis</span>
              <span className="ml-2 text-text-secondary">/ 1 hari</span>
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Akses penuh semua fitur",
                "Prompt Engineering Copilot",
                "Multi-Panel Specification",
                "Natural Language Generation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://archgen.indovma.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex h-12 w-full items-center justify-center rounded-lg border border-border-subtle text-sm font-semibold text-text-primary transition-all hover:border-brand-gold hover:text-brand-gold"
            >
              Mulai Free Trial
            </a>
          </div>

          {/* Lifetime Card */}
          <div className="relative rounded-xl border border-brand-gold/40 bg-bg-card p-8 shadow-lg shadow-brand-gold/5">
            <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-1 text-xs font-semibold uppercase tracking-wider text-bg-primary">
              Terpopuler
            </div>
            <h3 className="text-lg font-semibold">Lifetime Access</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Akses permanen, bayar sekali
            </p>
            <p className="mt-6">
              <span className="text-4xl font-bold text-brand-gold">
                Rp 399.000
              </span>
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Semua fitur Trial +",
                "Akses lifetime tanpa limit",
                "Prioritas update fitur baru",
                "Dukungan prioritas via WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#payment-info"
              className="mt-8 flex h-12 w-full items-center justify-center rounded-lg bg-brand-gold text-sm font-semibold text-bg-primary transition-all hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/25"
            >
              Beli Lifetime Access
            </a>
          </div>
        </div>

        {/* Payment Info */}
        <div
          id="payment-info"
          className="mx-auto mt-16 max-w-2xl rounded-xl border border-border-subtle bg-bg-card p-8 text-center"
        >
          <h3 className="text-xl font-semibold">
            Petunjuk Pembayaran &amp; Aktivasi
          </h3>

          <div className="mt-8 space-y-6 text-left">
            <div className="rounded-lg border border-border-subtle bg-bg-primary p-6">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-text-secondary">
                Bank
              </p>
              <p className="text-lg font-semibold">BCA</p>
              <p className="mt-3 mb-1 text-xs font-medium uppercase tracking-wider text-text-secondary">
                Nomor Rekening
              </p>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold tracking-wider text-brand-gold">
                  0491557817
                </span>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText("0491557817")
                  }
                  className="flex items-center gap-1 rounded-md border border-border-subtle px-3 py-1.5 text-xs text-text-secondary transition-colors hover:border-brand-gold hover:text-brand-gold"
                >
                  <Copy className="h-3.5 w-3.5" />
                  Salin
                </button>
              </div>
              <p className="mt-3 mb-1 text-xs font-medium uppercase tracking-wider text-text-secondary">
                Nama Penerima
              </p>
              <p className="font-medium">I Dewa Gede Ardi Utama</p>
            </div>

            <div className="space-y-3 text-sm text-text-secondary">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-xs font-bold text-brand-gold">
                  1
                </span>
                <span>
                  Transfer <strong className="text-text-primary">Rp 399.000</strong> ke rekening BCA
                  di atas
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-xs font-bold text-brand-gold">
                  2
                </span>
                <span>
                  Klik tombol <strong className="text-text-primary">Konfirmasi Pembayaran</strong> di
                  bawah
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-xs font-bold text-brand-gold">
                  3
                </span>
                <span>
                  Kirim bukti transfer via WhatsApp — tim CS akan aktivasi akun
                  Anda dalam 1×24 jam
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] text-sm font-semibold text-white transition-all hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/25"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konfirmasi Pembayaran via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
