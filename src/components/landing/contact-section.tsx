"use client";

export function ContactSection() {
  return (
    <section className="bg-neutral-900 text-white border-t border-white/5">
      <div className="px-8 sm:px-16 py-20 max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="text-xs text-white/20 tracking-[0.2em] uppercase">
          Contact
        </p>
        <div className="flex gap-8 text-sm">
          <a
            href="mailto:hello@example.com"
            className="text-white/40 hover:text-white transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-white/40"
          >
            Email
          </a>
          <a
            href="tel:13752648712"
            className="text-white/40 hover:text-white transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-white/40"
          >
            Phone
          </a>
        </div>
      </div>
    </section>
  );
}
