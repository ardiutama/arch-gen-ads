"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Tentang", href: "#hero" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Fitur", href: "#features" },
  { label: "Harga", href: "#pricing" },
];

const APP_URL = "https://archgen.indovma.com/";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold text-sm font-bold text-bg-primary">
            AG
          </div>
          <span className="text-lg font-semibold tracking-tight text-text-primary">
            Arch-Gen
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-brand-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-lg bg-brand-gold px-4 text-sm font-semibold text-bg-primary transition-all hover:bg-brand-gold-light"
          >
            Buka Aplikasi
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border-subtle bg-bg-primary md:hidden">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-text-secondary transition-colors hover:text-brand-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center rounded-lg bg-brand-gold py-2.5 text-sm font-semibold text-bg-primary"
            >
              Buka Aplikasi
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
